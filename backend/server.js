const express = require('express');
const cors = require("cors");
const app = express();
const port = 5000; // You can choose a different port

app.use(cors());


app.get('/api/products', (req, res) => {
    res.json([
        "The Final Empire",
        "The Well of Acension",
        "The Hero of Ages",
        "The Alloy of Law",
        "Shadows of Self",
        "Bands of Mourning",
        "Way of kings",
        "Words of Radiance",
        "Oathbringer",
        "Rythm of War",
        "The Lost Metal"
    ]);
    });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});