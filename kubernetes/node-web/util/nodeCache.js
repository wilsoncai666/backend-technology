'use strict'

const NodeCache = require( "node-cache" );
const redis = require('./redisClient');
//stdTTL: (default: 0) the standard ttl as number in seconds for every generated cache element. 0 = unlimited
//checkperiod: (default: 600) The period in seconds, as a number, used for the automatic delete check interval. 0 = no periodic check.
const myCache = new NodeCache( { stdTTL: 600, checkperiod: 300 } );


/* const info={"chassisId":"C075D280897VOLVO","deviceId":"l2031014","msgBundle":true,"timestamp":"2021-06-18T03:56:32.000Z","timestampSource":2,"processedAt":"2021-06-18T03:56:33.669Z","streamType":"cycCan","machineModel":"EC075D","gnssValid":true,"gnssSat":9,"gnssHdop":0.9,"streamBody":{"totalFuelConsumption":0,"engineRpm":1312,"fuelLevel":73.5,"lockStatus":0,"travelSpeedStatus":0,"engineModeStatus":0,"engineCoolantTemperature":83,"workTime":782966,"idleTime":275235,"machineHour":293.9447222222222},"rawPayload":{"c11":"0000000000299300","c12":"007B000000000000","s02":"2333040076F20B00"}};
for(let i=0;i<300000;i++){
    myCache.set("C075D280897VOLVO"+i,info);
}
console.log(myCache.getStats()); */
const streamTypes=['cycCan','cycDev','triggerEvent','triggerDtc','ecuMap','log'];
function flushCache(){
    streamTypes.forEach(function(streamType){
        console.time('flushCache计时器'+streamType);

        const spcKeys = redis.keys('*'+streamType);
        spcKeys.then((resultKeys) => {
            // console.log(resultKeys);
            const ps = [];
            
            resultKeys.sort();//将key值进行排序
            for (let i = 0; i < resultKeys.length; i++) {
                const p = ["xrevrange", resultKeys[i], "+", "-", "count", 1];
                ps.push(p);
            }
            redis
                .pipeline(ps)
                .exec((err, res) => {
                    // console.log(res);
                    for(let i=0;i<res.length;i++){
                        // console.log(res[i][1][0][1][1]);
                        const info=JSON.parse(res[i][1][0][1][1]);
                        if(info&&info.chassisId){
                            //first check cache 
                            const cid=info.chassisId;
                            let old={};
                            if(myCache.has(cid)){
                                old=myCache.get(cid);
                            }
                            old.chassisId=cid;
                            old.msgBundle=info.msgBundle;
                            old.machineModel=info.machineModel;
                            old.timestampSource=info.timestampSource;
                            const oldTime=new Date(old.timestamp).getTime();
                            const infoTime = new Date(info.timestamp).getTime();
                            old.timestamp=oldTime>infoTime?old.timestamp:info.timestamp;
                            const oldProcessedAt=new Date(old.processedAt).getTime();
                            const infoProcessedAt = new Date(info.processedAt).getTime();
                            old.processedAt=oldProcessedAt>infoProcessedAt?old.processedAt:info.processedAt;
                            //deviceId may be change,so we should choose the latest one
                            old.deviceId=oldProcessedAt>infoProcessedAt?old.deviceId:info.deviceId;

                            //delete common information in new info
                            delete info.deviceId;
                            delete info.msgBundle;
                            delete info.machineModel;
                            delete info.timestampSource;
                            // delete info.chassisId;
                            // delete info.streamType;
                            
                            old[streamType]=info;
                            myCache.set(cid,old);

                        }
                    }
                    console.timeEnd("flushCache计时器"+streamType);

                });

        })

    });
}
flushCache();
setInterval(flushCache,1000*600);
module.exports=myCache;
