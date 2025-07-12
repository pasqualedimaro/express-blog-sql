//inizializzo express, rimuovo anche la port che era inutile
const express = require('express')
const router = express.Router()

// Importiamo il controller
const postsController = require('../controller/postsController')

// INDEX - Restituisce la lista dei post con filtro per tag
router.get('/', postsController.index)

// SHOW - Restituisce un singolo post
router.get('/:id', postsController.show)

// DESTROY - Elimina un post
router.delete('/:id', postsController.destroy)

module.exports = router;