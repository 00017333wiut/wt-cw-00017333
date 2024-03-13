const express = require('express')
const order_router = require('./order')

const router = express.Router()

// registering child routers
router.use('/order', order_router)
module.exports = router