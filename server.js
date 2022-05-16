const express = require("express");

const server = express();

const port = 3333;

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

server.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
