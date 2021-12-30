const redis = require('./redisClient');

console.time('计时器1');
// console.time('计时器2');

redis.get('cycCanMerge').then((result) => {
    console.log(result);
    console.timeEnd('计时器1');

});;
