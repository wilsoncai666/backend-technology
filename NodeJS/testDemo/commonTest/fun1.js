function reduce(a,b){
    console.log("调用了fun1的reduce方法");
    console.log(a-b);
}

function add(a,b){
    console.log("调用了fun1的add方法");
    console.log(a+b);
}
module.exports = {
 reduce,
 add
}