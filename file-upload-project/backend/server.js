// Multer Backend - File Upload Server
const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    return cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const app = express();

// Enable CORS for frontend
app.use(cors());
app.use(express.json());

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get("/", (req, res) => {
  res.send("Multer File Upload Server Running");
});

app.post("/send-file", upload.array("images"), (req, res) => {
  console.log(req.files);
  res.json({ 
    message: "files uploaded", 
    files: req.files.map(file => ({
      originalname: file.originalname,
      filename: file.filename,
      path: file.path
    }))
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
