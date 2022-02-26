const http= require('http')

http.createServer(function(request,response){
    response.writeHead(200,{'content-type' : 'text/html'})
    response.end("Hello World, Welcome to NodeJS")
}).listen(3001)