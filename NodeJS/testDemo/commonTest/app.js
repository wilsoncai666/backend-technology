var fun1 = require('./fun1');
var fun2 = require('./fun2');

function test(){
     console.log("调用了app的test方法");
     fun1.add(1,2);
     fun2.print();
     fun2.copy(1,2)
}

test();