module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/hello',
        handler: 'hello.index',
      },
      {
        method: 'GET',
        path: '/test',
        handler: 'hello.test1',
      }
    ]
  }


