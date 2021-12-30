const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Response is working')); 
const PORT = process.env.PORT || 4000;

// app.use();

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
})