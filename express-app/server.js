import express from 'express';
import router from './route.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  // to send a response from the server
  console.log('middleware called');
  res.send('Hello, Express!');

}
);
// app.get('/error', () => {
//   // to simulate an error
//   throw new Error('This is a simulated error');
// }
// );

// app.use((err, req, res, next) => {
//   // to handle errors
// console.error(err.message);
// res.send ("Internal Server Error");
// }
// );
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);