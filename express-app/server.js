import express from 'express';
import router from './route.js';

const app = express();
const PORT = 3000;
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
 res.send('Welcome to the Express App with EJS!');

}
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);