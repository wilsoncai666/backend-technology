const redis = require('./util/redisClient');
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
        const typeBodays=[];

        console.log(resultKeys);
        resultKeys.sort();
        console.log(resultKeys);
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
                    typeBodays.push(res[i][1][0][1][1]);
                }
                // console.log(typeBodays);
                console.timeEnd();
                // return typeBodays;
              
            });
    })
}
readStream('cycCan');
// module.exports=readStream;

