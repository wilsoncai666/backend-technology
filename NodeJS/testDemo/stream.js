var fs = require('fs');
var data ='write File';
//创建可读流
var readStream = fs.createReadStream('input.txt');
//设置文件编码
readStream.setEncoding('UTF8');
//处理流事件
readStream.on('data', function(chunk){
    data+=chunk;
});
readStream.on('end',function(){
    console.log(data);
});
readStream.on('error',function(err){
    console.log(err.stack);
});
console.log('读取程序执行完毕');

var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data,'UTF8');
//标记文件末尾
writeStream.end();
//处理流事件
writeStream.on('finish',function(){
    console.log('写入完成,内容是：'+data);
});
writeStream.on('error',function(err){
    console.log(err.stack);
});
console.log('写入程序执行完毕');