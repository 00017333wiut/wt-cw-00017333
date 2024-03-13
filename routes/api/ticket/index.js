const express = require('express');

const router = express.Router();
const product_controller = require('../../../controllers/api/ticket');

// Define API routes
router.get('/', (req, res)=>{
    product_controller.getAll(req, res);
});

module.exports = router;
