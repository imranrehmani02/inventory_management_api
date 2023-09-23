const { Order } = require('../../models/orderModel');


module.exports.create = async (req, res) => {
    try {
        let reqBody = req.body;
        await Order.create({
            user_id: req.userData.id,
            product_id: reqBody.product_id,
            price: reqBody.price,
            quantity: reqBody.quantity,
            total: parseInt(reqBody.price) * parseInt(reqBody.quantity),
        })
            .then((result) => {
                return res.status(201).json({
                    status: true,
                    message: 'Data saved',
                    data: null,
                })
            })
            .catch((error) => {
                return res.status(400).json({
                    status: false,
                    message: 'Data not saved',
                    data: error
                })
            })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Internal server error',
            data: null
        })
    }
};

module.exports.findAll = async (req, res) => {
    try {
        await Order.findAll()
            .then((result) => {
                return res.status(200).json({
                    status: true,
                    message: 'Data found',
                    data: result,
                })
            })
            .catch((error) => {
                return res.status(400).json({
                    status: false,
                    message: 'Data not found',
                    data: error
                })
            })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Internal server error',
            data: null
        })
    }
};