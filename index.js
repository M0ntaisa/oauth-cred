const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.send("hello world")
})

app.get("/callback", (req, res) => {
  res.send("it should've work")
})

app.listen(3000, () => {
  console.log("we're running at port 3000");
})