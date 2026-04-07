// day 11 - multer - file upload in node js
const express = require("express");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    return cb(null, file.originalname);
  },
});

// let storage = multer.memoryStorage();

const upload = multer({ storage });

const app = express();

app.get("/", (req, res) => {
  res.send("ok");
});

app.post("/send-file", upload.array("images"), (req, res) => {
  console.log(req.files);
  res.send("files uploaded");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});