const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>hack me website home</h1>');
});

app.get('/one', (req, res) => {
    res.send('<h1></h1>');
});

app.get('/two', (req, res) => {
    res.send('<h1></h1>');
});

app.get('/vulnerable_port', (req, res) => {
    res.send('<h1></h1>');
});

const port = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

