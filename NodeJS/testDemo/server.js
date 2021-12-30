var http=require('http');
var url = require('url');
function start(route){
    function onRequest(request,response){
        const yourUrl=new URL("http:127.0.0.1:8888"+request.url);

        var pathName=new URL("http:127.0.0.1:8888"+request.url).pathname;

        // var pathName=URL.parse(request.url).pathName;
        console.log("Request for "+pathName+" received");
        route(pathName);

        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello Word");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has Started");
}
exports.start=start;
