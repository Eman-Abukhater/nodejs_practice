import express from 'express';
import router from './route.js';

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log('Start)')
  res.on('finish', () => {
    console.log('End');
  }
  );
  next(); // Pass control to the next middleware or route handler
}
);
app.get('/', (req, res) => {
  // to send a response from the server
  console.log('middleware called');
  res.send('Hello, Express!');

}
);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);