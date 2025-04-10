const express = require("express");
require("dotenv").config();

const app = express();

const port = 8080 || process.env.PORT;

app.listen(8080, () => {
  console.log(`Server is listening on ${port}`);
});
