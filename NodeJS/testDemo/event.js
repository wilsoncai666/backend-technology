var events = require('events');
var eventEmitter = new events.EventEmitter();
//event.js文件
eventEmitter.on('some_event', function (arg1, arg2) {
    console.log('listrner1', arg1, arg2);
});
eventEmitter.on('some_event', function (arg1, arg2) {
    console.log('listrner2', arg1, arg2);
});
// setTimeout(function(){
//     eventEmitter.emit("some_event",'参数1',"参数2");
// },2000);
eventEmitter.emit("some_event", "参数1", "参数2");

