import express from 'express';
import router from './route.js';
// Import the usernameController from controller.js

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

app.use(express.json()); // Middleware to parse JSON bodies
app.use('/user', router)





// // Define a new route for '/user/:username'
// app.get('/user/:username', usernameController
// );
app.get('/search', (req, res) => {
  const keyword = req.query.keyword;
  res.send(`You searched for: ${keyword}`);
}
);

app.post('/users',express.json() ,(req, res) => {
 
  const { name, email } = req.body;
  res.json({
    message: `User ${name} with email ${email} created successfully!`
  }
  );

});

app.put('/users/:id', express.json(), (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  res.json({
    message: `User with ID ${userId} updated successfully!`,
    user: { name, email }
  }
  );

}
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);