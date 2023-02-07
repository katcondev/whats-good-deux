const express = require('express')
const app = express()
var fs = require('fs')

app.listen(5001, console.log('Server running on port 5001'))

app.get('/products', (req, res) => {
    fs.readFile(__dirname + '/' + 'data/products.json', 'utf8', function (err, data){
      console.log(data);
      res.send(data)
    })
  })