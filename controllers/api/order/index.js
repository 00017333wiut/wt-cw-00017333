// import specific service class
const order_service = require('../../../services/order')

// mention the service's needed actions (methods)
const order_controller = {
    getAll(req, res) {
        res.json(order_service.getAll())
    }
}

module.exports = order_controller
