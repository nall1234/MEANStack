//create middleware that reports information about the incoming http request 
//certain elements will be objects (body etc) display the key value pairs
//items to report if they ahve value use colors 9an external module): method, hostname, ip, body, params, protocol, route, path , query

const color = require('colors')

module.exports = function(request, response, next){
    const keys = ['method', 'hostname', 'ip', 'body', 'params', 'path', 'protocol', 'route', 'query']

    keys.forEach(key=> {
        const data = request[key];
        
        if (request[key]){
            
            if (typeof request[key] === 'object'){
                //determine if object has key value pairs
                if( Object.keys(request[key]).length){
                    console.log(color.bgGreen(`the request ${key} has these properties`));

                    for (const prop in request[key]){
                        console.log(color.bgMagenta(`${prop} => ${request[key][prop]}`))
                    }

                    console.log('key is', key, request[key])
                }
            }else {
                console.log(color.rainbow(`the request ${key} is ${request[key]}`))
            }

        }
    })

    next()
};
