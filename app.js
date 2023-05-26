const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
app.use(morgan("combined"));

app.use(process.env.URL, (req, res) => {
  res.send("<h1>hello</h1>");
});

const port = process.env.PORT;
app.listen(port, () => console.log(`server done in port :${port}`));
