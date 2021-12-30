/* var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '123456',
  database : 'mysql'
});

connection.connect();

connection.query('SELECT * from user', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
  console.log('The solution is: ', fields);

});

connection.end(); */

// console.log(process.memoryUsage());
/* function foo() {
  function bar() {
      var local = "局部变量";
      return function () {
          return local;
      };
  };
  var baz = bar();
  console.log(baz());
}; 
foo();
console.log(process.memoryUsage()); */


/* 
function getData(){
  return 'zhangsan';
  }
  async function testAsync(){
  return 'Hello async';
  }
  async function test(){
  const v1=await getData();
  const v2=await testAsync();
  console.log(v1,v2);
} */


/* function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var username = '张三';
      resolve(username);

    }, 1000)
  })
}
async function test() {

  var data = "";
  for (let i = 0; i < 10; i++) {
    data += await getData();
  }
  console.log(data);
}


test();

function ajax() {
  console.log("hello");

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();

    }, 1000)

  })

  ajax.then(function () {
    console.log("world");

  })

} */
console.time();
var p1=new Promise(function(resolve,reject){
  setTimeout(function(){
      resolve('p1完成')
  },1000)
})
var p2=new Promise(function(resolve,reject){
  setTimeout(function(){
      resolve('p2完成')
  },1000)
})
var p3=new Promise(function(resolve,reject){
  setTimeout(function(){
      resolve('p3完成')
  },6000)
})
Promise.all([p3,p2,p1]).then(function(res){
  console.log(res);
  console.timeEnd();
  //p3,p2,p1是我们调用的顺序 ["p3完成","p2完成","p1完成"]是我们返回的结果
  //可以看得出来，我们控制了3个异步请求的返回顺序
})



var foo =function(){  
  var local='local var ';  
  var bar =function(){  
      // var local='another var';  
      var baz = function(){  
          console.log(local);  
      };  
      baz();  
  };  
  bar();  

};  
foo();  