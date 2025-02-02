const express = require("express")

// express app
const app = express()


app.get('/', function (req, res) {
  res.send('World Says Hello To Behnood')
})

//  listen for req
app.listen(3000)
