const redis = require('./redisClient');
/* redis
    .pipeline([
        ["xrevrange", "C075D280897VOLVOcycCan", "+", "-", "count", 1],
        ["xrevrange", "C075D280899VOLVOcycCan", "+", "-", "count", 1],
    ])
    .exec((err, result) => {
        console.log(result);
    }); */

function readStream(spcKey) {
    console.time();

    const cycCans = redis.keys('*' + spcKey);
    cycCans.then((resultKeys) => {
        // console.log(resultKeys);
        const ps = [];
        for (let i = 0; i < resultKeys.length; i++) {
            const p = ["xrevrange", resultKeys[i], "+", "-", "count", 1];
            ps.push(p);
        }
        redis
            .pipeline(ps)
            .exec((err, res) => {
                // console.log(res);
                const typeBodays=[];
                for(let i=0;i<100;i++){
                    // console.log(res[i][1][0][1][1]);
                    typeBodays.push(res[i][1][0][1][1]);
                }
                console.log(typeBodays.length);
                redis.lpush(spcKey+"Merge",typeBodays[0]).then((res)=>{
                    console.log(res);
                });
                /* redis.pipeline().set(spcKey+"Merge",typeBodays.toString()).exec((err, result) => {
                    console.log(result);
                }); */
                console.timeEnd();
            });
    })
}
readStream('cycCan');

