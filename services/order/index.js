const fs = require('fs')
// access global mock db file
const orders = require(global.mock_db)

// write service method implementations
const order_service = {
    getAll() {
        return orders
    }
}

module.exports = order_service
