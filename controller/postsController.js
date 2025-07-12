//connetto il mio db
const connection = require('../data/db.js')


// INDEX 
const index = (req, res) => {
    //query per ottenere tutti i posts
    const sql = 'SELECT * FROM posts';
    // controllo se funziona l'errore
    connection.query(sql, (err, results) => {
        if(err)
            return res.status(500).json(err)
        res.json(results);
    })
};

// SHOW 
const show = (req, res) => {}

// DESTROY - Elimina un post
const destroy = (req, res) => {}

// Esportiamo tutte le funzioni
module.exports = {
    index,
    show,
    destroy
}