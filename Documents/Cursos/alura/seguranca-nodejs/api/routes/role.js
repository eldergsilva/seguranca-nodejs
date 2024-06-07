const {Routes, Router} =require('express')
const RoleController = require('../controllers/roleController')

const router = Router()

router
    .post('/roles',RoleController.cadastrar)
    .get('/roles')
    .get('/roles/:id')
    .delete('/:id')
    .put('/roles/:id')

    module.exports = router