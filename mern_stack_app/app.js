const express = require('express');
const connectDB = require('./config/db');
const port = process.env.PORT || 4000;

const app = express();
connectDB();

app.get('/', (req, res) => res.send('Response is working!'));
app.listen(port, () => console.log(`Server running on port ${port}`));