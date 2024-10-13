const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(path.join(__dirname))); 

// Route to get the API key
app.get('/api/getdetails', (req, res) => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Assuming you're using an environment variable
    if (apiKey) {
        res.json({ apiKey });
    } else {
        res.status(404).json({ error: "API key not found" });
    }
});

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
