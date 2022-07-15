'use strict'
require('dotenv').config();

var express = require('express');
var app = express();
 
// const redis = require('./util/redisClient');
// const lruCache = require('./util/lruCache');
// const localCache=new Map();
// const myCache=require('./util/nodeCache');

const knex = require('knex')({
  client: 'mysql',
  connection: {
    /* host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "mysql" */
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  },
  debug: false,
  pool: {
    min: 1,
    max: 10,
    createTimeoutMillis: 30000,
    acquireTimeoutMillis: 600000,
    idleTimeoutMillis: 20000,
    reapIntervalMillis: 20000,
    createRetryIntervalMillis: 200,
  }
})

//  主页输出 "Hello World"
app.get('/', function (req, res) {
  // console.log("主页 GET 请求");
  res.send('Hello GET');
})


//  POST 请求
app.post('/', function (req, res) {
  console.log("主页 POST 请求");
  res.send('Hello POST');
})

//  /del_user 页面响应
app.get('/del_user', function (req, res) {
  console.log("/del_user 响应 DELETE 请求");
  res.send('删除页面');
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
  // console.log("/list_user GET 请求");
  
  knex('user')
  .select()
  // .returning('id') //2019-12-11: Not supported by MySql
  .then((result) => {
    res.send(result);
    // console.log('result===>>>', result); // [39] => return the id of inserted info
  })
  .catch((err) => {
    const error = new Error('sendLogMysql-' + log.message + '--' + err.message); //throw to console.
    console.log(err.message);
    throw error;
  });
  
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
  console.log("/ab*cd GET 请求");
  res.send('正则匹配');
})
app.get('/list_stream', function(req, response) {   
  // console.time("计时器1");
  console.log("/list_stream GET 请求 获取");
  // console.log(req.query.spcKey);
  // console.log(req.query.size);

  /* const cycCans = redis.keys('*'+req.query.spcKey);
  cycCans.then((resultKeys) => {
      // console.log(resultKeys);
      const ps = [];
      const typeBodays=[];
      let size=req.query.size;
      size=size>resultKeys.length?resultKeys.length:size;
      resultKeys.sort();//将key值进行排序
      for (let i = 0; i < size; i++) {
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
                  typeBodays.push(info);
                  
              }
              // console.timeEnd("计时器1");
              response.send(typeBodays);
          });
  }) */
})
app.get('/list_cache',function(req, res) {   
  // console.log("/list_cache获取cache记录");
  // console.log(myCache.getStats());

  const keys=myCache.keys();
  keys.sort();
  let pageNo=req.query.pageNo==undefined?1:parseInt(req.query.pageNo);
  let pageSize=req.query.pageSize==undefined?20:parseInt(req.query.pageSize);
  let resultKeys=pagination(pageNo,pageSize,keys);
  let result ={"pageNo":pageNo,"pageSize":pageSize,"totalCount":keys.length,"data":myCache.mget(resultKeys)};

  res.send(result);
})

function pagination (pageNo, pageSize, array){
  // 分组分页
  var offset = (pageNo - 1) * pageSize;
  return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
}
var server = app.listen(3000, function () {

 var host = server.address().address
 var port = server.address().port

 console.log("应用实例，访问地址为 http://%s:%s", host, port)
 console.log(process.env);

})