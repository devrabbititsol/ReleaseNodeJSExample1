var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World .. This is an example");
});

app.listen(4444);