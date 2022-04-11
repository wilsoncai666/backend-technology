'use strict'

require('dotenv').config();
const k8pg = require('../db/knexK8Pg');
module.exports = {
  async ld1055Daily(ctx, next) { // called by GET /ld1055Daily
    // console.log("--ld1055daily");
    const result = await k8pg('ld1055_dailyinfos').select();
    ctx.body = result; // we could also send a JSON
  },
  async ld1055Hydpumppresdis(ctx, next) { // called by GET /ld1055Daily
    // console.log("--ld1055daily");
    const result = await k8pg('ld1055_hydpumppresdis').select();
    ctx.body = result; // we could also send a JSON
  }
};
