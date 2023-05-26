// console.log("hello");
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const router = require("./router");
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/* router */
app.use("/api", router);

/* Connect to DB */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log(console.log(error)));

/*run server*/
const port = process.env.PORT;
app.listen(port, () => console.log(`server run ${port}`));
