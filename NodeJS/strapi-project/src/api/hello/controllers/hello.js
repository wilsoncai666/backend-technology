module.exports = {
  async index(ctx, next) { // called by GET /hello
    console.log("----hello");
    ctx.body = 'Hello World!'; // we could also send a JSON
  },
  async test1(ctx, next) { // called by GET /hello
    console.log("----test");
    ctx.body = 'This is Test1!'; // we could also send a JSON
  },
};
