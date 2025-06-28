import express from 'express';
import router from './route.js';

const app = express();
const PORT = 3000;
// basic middleware 
app.use('/about',( req, res, next) => {
  console.log(`new request received at ${new Date().toISOString()}`);
  next();
});


app.get('/', (req, res) => {
  // to send a response from the serverj
  res.send('Hello, Express!');

}
);

app.get('/about', (req, res) => {
  res.send('About Page');
} );


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);