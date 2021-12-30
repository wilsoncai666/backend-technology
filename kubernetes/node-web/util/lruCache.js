var LRU = require("lru-cache")
  , options = { max: 20000
            //   , length: function (n, key) { return n * 2 + key.length }
            //   , dispose: function (key, n) { n=null }
              , maxAge: 1000 }
  , cache = new LRU(options)
  , otherCache = new LRU(50) // sets just the max size
 module.exports=cache;
/* const info={"chassisId":"C075D280897VOLVO","deviceId":"l2031014","msgBundle":true,"timestamp":"2021-06-18T03:56:32.000Z","timestampSource":2,"processedAt":"2021-06-18T03:56:33.669Z","streamType":"cycCan","machineModel":"EC075D","gnssValid":true,"gnssSat":9,"gnssHdop":0.9,"streamBody":{"totalFuelConsumption":0,"engineRpm":1312,"fuelLevel":73.5,"lockStatus":0,"travelSpeedStatus":0,"engineModeStatus":0,"engineCoolantTemperature":83,"workTime":782966,"idleTime":275235,"machineHour":293.9447222222222},"rawPayload":{"c11":"0000000000299300","c12":"007B000000000000","s02":"2333040076F20B00"}};
for(let i=0;i<30000;i++){
    cache.set("C075D280897VOLVO"+i,info);
}
console.log(cache.length);
// console.log(cache.keys());
setTimeout(()=>{
    console.log(cache.keys());
},20000); */
