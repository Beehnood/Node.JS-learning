const http = require("http")
const fs = require("fs")

const server = http.createServer((request, response) =>{
    console.log(request.url, request.method)

    response.setHeader('content-type', 'text/html')
     let path = './view/'
    switch(request.url){
        case '/':
            path += 'index.html'
            response.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            response.statusCode = 200;
            break;
        default:
            path += '404.html'
            response.statusCode = 404;
            break;

       
          
    }
    fs.readFile(path, (err, data)=> {
        if(err)
        console.log(err)
    else{
        // response.write(data)
        response.end(data)
    }
    })
})

server.listen(3000 , 'localhost', () => {
    console.log('Listening for Request on port 3000')
    
})