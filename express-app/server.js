import express from 'express';
import { connectDB } from './config/db.js'; // Adjust the path as necessary
import Person from './models/Person.js'; // Adjust the path as necessary
const app = express();
const PORT = 3000;

await connectDB(); // Ensure you have the connectDB function imported from your db.js file

// to use static files serving from express app
app.get('/', (req, res) => {

}
);

app.post('/person', express.json(), async (req, res) => {
  console.log('Received person data:', req.body);
  const { email, name, age } = req.body;
  // Here you would typically save the person data to the database
  const newPerson = new Person({
    name,
    age,
    email
  });
  await newPerson.save()
  console.log('Person saved:', newPerson);
  res.send('Person data received');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);