const express = require('express');

//return express app
const app = express();

//Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware
//function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
//see more https://expressjs.com/en/guide/using-middleware.html

app.use((req, res, next) => {
  console.log("first middleware");
  next();

})
app.use((req, res, next) => {
  res.send("hello from express");
})

//export app to server.js
module.exports = app;
