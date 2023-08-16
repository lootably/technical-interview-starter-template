import express from 'express';

// Constants
const PORT = 3001;

// App initialization
const app = express();

// Routes
app.use('/api/example', require('./routes/example'));

// Server startup
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});