const express = require("express")

// express app
const app = express()

//  listen for req
app.listen(3000)

app.get('/', function (require, response) {
  response.sendFile('./view/index.html', {root : __dirname})
})

app.get('/about', function (require, response) {
    response.sendFile('./view/about.html', {root : __dirname})
  })
  
// redirecting
app.get('/about-us', (require, response) => {
    response.redirect('/about')
})

// 404 page
app.use((require, response)=>{
response.sendFile('./view/404.html', {root : __dirname})
})