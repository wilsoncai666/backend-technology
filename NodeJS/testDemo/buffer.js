const buf = Buffer.from('runnob', 'ascii');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
console.log(buf.toString('utf-8'));



//创建一个长度为10且用0填充的buffer
const buf1 = Buffer.alloc(10);
//创建一个长度为10/且用0x1填充的buffer
const buf2 = Buffer.alloc(10, 1);
// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);
// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);
// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('test');
// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('test', 'latin1');

buf7 = Buffer.alloc(256);
len = buf7.write("www.runnob.com");
console.log(len);

console.log(buf7.toString('ascii'));

buf8 = Buffer.alloc(256);
for (var i = 0; i < 26; i++) {
    buf8[i] = i + 97;
}
console.log(buf8.toString('ascii'));
console.log(buf8.toString('ascii', 5, 10));
console.log(buf8.toString('utf-8', 5, 10));
console.log(buf8.toString(undefined, 5, 10));


//转换为json
const json = JSON.stringify(buf4);
console.log(json);
const json1 = buf4.toJSON();
console.log(json1);
var buf9 = Buffer.concat([buf, buf7]);
console.log('新内容是：' + buf9.toString());

var buf10 = buf7.slice(2, 4);
console.log(buf10.toString());
console.log(buf7.toString());
buf10.write('aaa');
console.log(buf10.toString());
console.log(buf7.toString());