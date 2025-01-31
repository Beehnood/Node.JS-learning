const http = require("http")

const server = http.createServer((request, response) =>{
    console.log(request.url, request.method)

    response.setHeader('content-type', 'text/html')
    response.write('<h1>hello Ben, Je suis là</h1>')
    response.write('<p>T inquit pas vas au fonde avec toute de ta force</p>')
    response.end()
})

server.listen(3000 , 'localhost', () => {
    console.log('Listening for Request on port 3000')
    
})