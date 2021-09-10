const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response){
    console.log('client request URL:', request.url);

    //this is how we do routing
    if(request.url === '/'){
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
            response.write(contents); // send respnse body
            response.end(); //finished
        });
    }
    if(request.url === '/ninjas'){
        fs.readFile('ninjas.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
            response.write(contents); // send respnse body
            response.end(); //finished
        });
    }
    if(request.url === '/dojos/new'){
        fs.readFile('dojosNew.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
            response.write(contents); // send respnse body
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