import express from 'express';
import router from './route.js';
import multer from 'multer';
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