'use strict';

const knexPg = require("./knexPg");
const { logIdentifierConf,logMap } = require("./logIdentifier");

async function test(){
    const result =await knexPg("log_info").where("identifier","?|","array[12A4]'");

    console.log(result);
    /* Object.keys(logIdentifierConf).map((id)=>{

        // console.log(id,logIdentifierConf[id]);
        const result =await knexPg("log_info").where("identifier","?|","array[12A4]'");
        
    }) */
}
test();