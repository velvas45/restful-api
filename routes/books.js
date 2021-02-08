const express = require('express');
const bookController = require('./../controller/books');

const router = express.Router();

router.get('/api/v1/books',bookController.getAPI );

router.get('/api/v1/books/:id',bookController.getAPIById );

router.post('/api/v1/books',bookController.postAPI );

router.put('/api/v1/books/:id', bookController.putAPI);

router.delete('/api/v1/books/:id',bookController.deleteAPI );

module.exports = router;