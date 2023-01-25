const { request } = require("express");
const express = require("express");

const app = express();

const port = 8000;

app.get("/", (request, response) => {
  response.status(200);
  response.json("hoi");
});

app.get("a", (request, response) => {
  response.json(100);
});

app.listen(port, () => {
  console.log("http//localhost:" + port);
});
