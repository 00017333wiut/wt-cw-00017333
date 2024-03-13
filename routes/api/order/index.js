const express = require('express');

const router = express.Router();
const order_controller = require('../../../controllers/api/order');

// Define API routes
router.get('/', (req, res)=>{
    order_controller.getAll(req, res);
});

module.exports = router;
