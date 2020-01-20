const express = require("express");
const logger = require("morgan");
const path = require("path");
const port = 5000;

const app = express();

app.use(logger("dev"));
app.use(express.static("build"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`running in port ${port}`));
