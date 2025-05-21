const express = require('express');
const cors = require("cors");
const app = express();
const port = 5000; // You can choose a different port

app.use(cors());


app.get('/api/products', (req, res) => {
    res.json(["Way of kings", "Words of Radiance", "Oathbringer"]);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});