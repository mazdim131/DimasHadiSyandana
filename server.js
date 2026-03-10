const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", (req, res) => {
    console.log("=== ADA PESAN MASUK ===");
    console.log("Name: ", req.body.name);
    console.log("Email: ", req.body.email);
    console.log("Pesan: ", req.body.message);
    console.log("Waktu: ", req.body.date);
    res.status(200).send("Pesan berhasil diterima di terminal!");
});

app.listen(3000, () => console.log('Server running di http://localhost:3000'));