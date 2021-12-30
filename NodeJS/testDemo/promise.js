
const redis = require('./redisClient');
/* const p1=redis.xrevrange("C075D280897VOLVOcycCan","+","-","count",1);
const p2=redis.xrevrange("C075D280899VOLVOcycCan","+","-","count",1);
const p3=redis.xrevrange("C075D280950VOLVOcycCan","+","-","count",1);

Promise.all([p3,p2,p1]).then(function(res){
  console.log(res);
  //p3,p2,p1是我们调用的顺序 ["p3完成","p2完成","p1完成"]是我们返回的结果
  //可以看得出来，我们控制了3个异步请求的返回顺序
}) */



console.time();
function readStream(spcKey){
  const cycCans=redis.keys('*'+spcKey);
  cycCans.then((resultKeys) =>{
      // console.log(resultKeys);
      const ps=[];
      for(let i=0;i<resultKeys.length;i++){
          
          // const cid=resultKeys[i].substring(0,resultKeys[i].indexOf(spcKey));
          const p=redis.xrevrange(resultKeys[i],"+","-","count",1);
          ps.push(p);
      }
      Promise.all(ps).then(function(res){
        // console.log(res);
       /*  for(let i=0;i<res.length;i++){
          console.log(res[i][0][1][1]);
          // console.log('----------------------------------------------');
        } */
        console.timeEnd();
      })
  })
}
readStream('cycDev');
