# File Upload Project - Multer Backend + React Frontend

This project combines a Multer file upload backend with a React frontend in one folder.

## Project Structure

```
file-upload-project/
├── backend/                  # Backend folder
│   ├── server.js            # Backend server with Multer
│   ├── backend-package.json # Backend dependencies
│   └── uploads/             # Directory for uploaded files (auto-created)
└── frontend/                # React frontend
    ├── index.html
    ├── frontend-package.json # Frontend dependencies
    ├── vite.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── App.css
        └── index.css
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Rename the backend package file:
```bash
ren backend-package.json package.json
```

3. Install backend dependencies:
```bash
npm install
```

4. Create uploads directory:
```bash
mkdir uploads
```

5. Start the backend server:
```bash
npm start
```

The backend will run on http://localhost:3000

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Rename the frontend package file:
```bash
ren frontend-package.json package.json
```

3. Install frontend dependencies:
```bash
npm install
```

4. Start the frontend development server:
```bash
npm run dev
```

The frontend will run on the URL shown in the terminal (usually http://localhost:5173)

## Usage

1. Make sure both backend and frontend are running
2. Open the frontend URL in your browser
3. Select one or more image files
4. Click "Upload Files"
5. The uploaded files will be displayed below

## API Endpoints

- `POST /send-file` - Upload files (expects multipart/form-data with field name "images")
- `GET /uploads/:filename` - Serve uploaded files
- `GET /` - Health check endpoint

## Features

- Multiple file upload support
- Image preview after upload
- CORS enabled for frontend-backend communication
- Static file serving for uploaded images
