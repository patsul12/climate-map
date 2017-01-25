var express = require("express")
var app = express()

app.use(express.static('public'))
app.use(express.static('./src'))

app.get("/", function(req, res) {
  res.sendFile("index.html")
})

app.listen(3000, function() {
  console.log("Climate change listening on 3000")
})
