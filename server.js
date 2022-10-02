const express = require("express");
const path = require("path");
// instantiate the app
const app = express();
const PORT = process.env.PORT || 3001;
// middleware to parse json data
app.use(express.json());
// middleware to parse url encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:PORT`)
);
