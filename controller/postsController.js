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
const show = (req, res) => {
    const id = req.params.id;
    //query
    const sql = 'SELECT * FROM posts WHERE id=?';
    //eseguo la query
    connection.query(sql,[id], (err, results) => {
        if (err)
            return res.status(500).json(err);
        if(results.length === 0)
            return res
            .status(404)
            .json({error: 'Post non trovato'})
        res.json(results[0]);
});
};

// DESTROY - Elimina un post
const destroy = (req, res) => {
    //query
    const {id} = req.params;
    const sql = 'DELETE FROM posts WHERE id=?';
    //eseguo la query
    connection.query(sql,[id], (err, results) => {
        if(err)
            return res
              .status(500)
              .json({error : 'Errore nel cancellare il post'});
        res.sendStatus(204);
})
            
}

// Esportiamo tutte le funzioni
module.exports = {
    index,
    show,
    destroy
}