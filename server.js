const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./prices.db');

db.run(`CREATE TABLE IF NOT EXISTS prices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    price TEXT,
    timestamp TEXT
)`);

app.post('/save-price', (req, res) => {
    const { price, timestamp } = req.body;
    db.run('INSERT INTO prices (price, timestamp) VALUES (?, ?)', [price, timestamp], function(err) {
        if (err) return res.status(500).send('Database error');
        res.send({ success: true, id: this.lastID });
    });
});

app.listen(3001, () => console.log('Server running on port 3001'));