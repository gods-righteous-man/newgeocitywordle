const express = require('express');
const cors = require('cors');
const path = require('path'); // For serving static files
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(cors({
    origin: 'https://newgeocitywordle.vercel.app/', // Replace with your actual frontend URL
}));
app.use(express.json());
// Serve static files (HTML, CSS, JS)
// Your Google Maps API key
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
// Endpoint to get the API key
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

app.get('/api/getdetails', (req, res) => {
    res.json({ apiKey: GOOGLE_MAPS_API_KEY });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Other routes...
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});