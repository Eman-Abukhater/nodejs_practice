import express from 'express';
import router from './route.js';
import multer from 'multer';
import mongoose from 'mongoose';
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    // Use the original name of the file
    cb(null, file.originalname);
  }
  
  // Directory to save uploaded files
}); // Use disk storage for file uploads
const app = express();
const PORT = 3000;
const upload = multer( { storage: storage });
const MONGODB_URL = 'mongodb+srv://emanabukhater2001:123456Eman@cluster0.7a96qau.mongodb.net/express';
await mongoose.connect(MONGODB_URL).then(() => {
  console.log('Connected to MongoDB');
}
).catch(err => {
  console.error('MongoDB connection error:', err);
}
);

app.use(express.urlencoded({ extended: true }));
app.use(upload.single('image')); // to handle multipart/form-data

// to use static files serving from express app
app.get('/', (req, res) => {

}
); 
app.post('/form', (req, res) => {
  console.log('Form submitted:', req.body);
  console.log('Uploaded file:', req.file);


  res.send('Form submitted successfully!');
}
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);