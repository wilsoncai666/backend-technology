/* var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '123456',
  database : 'mysql',
  port : '3306'
});
 
connection.connect();
 
connection.query('SELECT * from user', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
}); */

/* var date1=new Date('2021-06-16T23:54:35.000Z').getTime();
var date2=new Date('2021-06-16T23:54:41.851Z').getTime();
console.log(date1);
console.log(date2); */


function pagination (pageNo, pageSize, array){
  // 分组分页
  var offset = (pageNo - 1) * pageSize;
  return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
}
const array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const result = pagination(1, 30, array);
console.log(result);



