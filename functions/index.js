require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const pool = require("./db.js");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("/", async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/api/booklists", async (req, res) => {
    try {
        res.json('test')
        const allBookLists = await pool.query("SELECT * FROM booklists");
        res.json(allBookLists.rows);
    } catch (err) {
        console.error(err.message);
    }
})

if (process.env.DEVELOPMENT === 'true') {
    app.listen(5000, () => {
        console.log(pool)
        console.log(`server has started on port ${5000}`);
        console.log('static file served at ' + path.join(__dirname, "..", "client", "build", "index.html"));
    });
}

exports.api = functions.https.onRequest(app)
