const fs = require('fs')
// access global mock db file
const products = require(global.mock_db)

// write service method implementations
const product_service = {
    getAll() {
        return products
    }
}

module.exports = product_service
