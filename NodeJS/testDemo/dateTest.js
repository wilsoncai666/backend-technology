'use strict'

const {format} = require("date-fns");
function test(){
    const date = new Date();
    console.log(date.toISOString());
    const hours=date.getHours();
    console.log(hours);
    date.setHours(hours+8);
    console.log(date.toISOString());
    console.log(format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"));
    console.log(format(date, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"));
    console.log(format(date, "yyyy-MM-dd"));

    // console.log(format(date, "yyyy-MM-dd'T'HH:mm:ss.SSS",{ locale: 'America/New_York' }));




}
test();