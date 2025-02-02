const express = require("express")

// express app
const app = express()

// reggister view engine
app.set('view engine','ejs')

//  listen for req
app.listen(3000)

app.get('/', function (require, response) {
  response.render('index')
})

app.get('/about', function (require, response) {
    response.render('about')  })

app.get('/blogs/create', function (require, response) {
    response.render('create')  })
  
// redirecting
// app.get('/about-us', (require, response) => {
//     response.redirect('/about')
// })

// 404 page
app.use((require, response)=>{
    response.status(404).render('404')})