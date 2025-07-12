// Importiamo i dati dei posts
// //provo a testare l'errore 500
// const posts = undefined
const posts = require('../data/posts')


// INDEX 
const index = (req, res) => {}

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