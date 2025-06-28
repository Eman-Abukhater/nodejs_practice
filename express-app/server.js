import express from 'express';
import { usernameController } from './controller';
const app = express();

const PORT = 3000;
app.get('/', (req, res) => {
  // to send a response from the serverj
  res.send('Hello, Express!');

}
);

// Define a new route for '/about'
app.get('/about', (req, res) => {
  // to send a response from the serverj
  res.send('About this Express app!');

}
);





// Define a new route for '/user/:username'
app.get('/user/:username', usernameController
);
app.get('/search', (req, res) => {
  const keyword = req.query.keyword;
  res.send(`You searched for: ${keyword}`);
}
);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);