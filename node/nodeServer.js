const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response){
    console.log('client request URL:', request.url);
    let file;

    switch (request.url) {
    case "/":
        file = 'index.html'
        break;
    case "/ninjas":
        file = 'ninjas.html'
        break;
    case "/dojos/new":
        file = 'dojosNew.html'
        break;
    default:
        file = null;
        break;
    }
    //this is how we do routing
    if(file != null){
        fs.readFile(file, 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
            response.write(contents); // send response body
            response.end(); //finished
        });
    }

    else{
        response.writeHead(404);
        response.end('file not found!!')
    }
});
// tell the server to listen to which port
server.listen(8000);

console.log('running on port 8000')