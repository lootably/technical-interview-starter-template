import express from 'express';

// Constants
const PORT = 3001;

// App initialization
const app = express();

// CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
});

// Routes
app.use('/api/example', require('./routes/example'));

// Server startup
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});