"use strict";

import express from "express";

const app = express();

app.use('/', express.static('public'));

app.listen(process.env.PORT || 3000, (err) => {
  console.log("Server started on port 3000");
});
