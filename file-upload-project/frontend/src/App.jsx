import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [image, setImage] = useState("");
  const [files, setFiles] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleSendFile = async () => {
    if (!image || image.length === 0) {
      setUploadStatus("Please select files first");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < Array.from(image).length; i++) {
      formData.append("images", Array.from(image)[i]);
    }

    setUploadStatus("Uploading...");
    
    try {
      let res = await axios.post(
        "http://localhost:3000/send-file",
        formData
      );
      if (res) {
        console.log(res);
        setUploadStatus("Files uploaded successfully!");
        setFiles(res.data?.files);
      }
    } catch (error) {
      console.log("error while uploading image", error);
      setUploadStatus("Error uploading files");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>File Upload with Multer</h1>
      
      <div style={{ marginBottom: "20px" }}>
        <input 
          multiple 
          onChange={(e) => setImage(e.target.files)} 
          type="file" 
          accept="image/*"
        />
      </div>
      
      <button 
        onClick={handleSendFile}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Upload Files
      </button>

      {uploadStatus && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          {uploadStatus}
        </p>
      )}

      {files && files.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h2>Uploaded Files:</h2>
          {files.map((file, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <p><strong>Filename:</strong> {file.originalname}</p>
              {file.filename && (
                <img 
                  width={200} 
                  src={`http://localhost:3000/uploads/${file.filename}`} 
                  alt={file.originalname}
                  style={{ border: "1px solid #ddd", borderRadius: "5px" }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
