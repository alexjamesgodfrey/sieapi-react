/**
 * BOOKLISTS ROUTES
 * todo: create count routes
 */

const pool = require("../db.js");

module.exports = function (app) {

    app.get("/api/works", async (req, res) => {
        try {
            const allWorks = await pool.query("SELECT * FROM sierra");
            res.json(allWorks.rows);
        } catch (err) {
            console.error(err.message);
        }
    })

    app.post('/api/creatework', async (req, res) => {
        try {
            const { image, title, date, description, price, sold } = req.body
            const resp = await pool.query("INSERT INTO sierra (image, title, date, description, price, sold) VALUES ($1, $2, $3, $4, $5, $6)",
                [image, title, date, description, price, sold]);
            res.json(resp);
        } catch (err) {
            console.error(err.message)
        }
    })

    app.put('/api/editwork/:id', async (req, res) => {
        try {
            const { id } = req.params
            const { image, title, date, description, price, sold } = req.body
            const resp = await pool.query("UPDATE sierra SET image=$1, title=$2, date=$3, description=$4, price=$5, sold=$6 WHERE id=$7",
                [image, title, date, description, price, sold, id]);
            res.json(resp);
        } catch (err) {
            console.error(err.message)
        }
    })

    app.delete('/api/deletework/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const resp = await pool.query("DELETE FROM sierra where id=$1",
                [id]);
            res.json(resp);
        } catch (err) {
            console.error(err.message)
        }
    })

}