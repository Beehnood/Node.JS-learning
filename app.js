const express = require("express")

// express app
const app = express()


app.get('/', function (req, res) {
  res.sendFile('./view/index.html', {root : __dirname})
})

app.get('/about', function (req, res) {
    res.sendFile('./view/about.html', {root : __dirname})
  })
  


//  listen for req
app.listen(3000)
