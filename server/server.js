const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, './../public');
var app = express();
const port = process.env.PORT || 3050;

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log('server started on ', port);
});
