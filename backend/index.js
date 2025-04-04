const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>hack me website home</h1>');
});

app.get('/two', (req, res) => {
	const searchQuery = req.query.search;
	function getQuery(query) {
		return query;
	}
  	const results = getQuery(searchQuery);
	res.send(`
		<h1>You searched for ${searchQuery}</h1>
		<p>Here are the results: ${results}</p>`);
});

app.get('/three', (req, res) => {
    res.send('<h1>flag 2: toy story 3</h1>');
});


app.get('/vulnerable_port', (req, res) => {
    res.send('<h1>flag 6: chagpt+free</h1>');
});

const port = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

