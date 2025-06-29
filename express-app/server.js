import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';



app.use(cookieParser());
app.use(session({
  secret: 'your-secret-key',
  resave: false, // to avoid resaving session if unmodified
  saveUninitialized: false,// to avoid storing empty sessions

}));


app.get('/', (req, res) => {
  res.send('Hello, World!');
}
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);