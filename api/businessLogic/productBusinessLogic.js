const { Product } = require('../../models/productModel');

module.exports.create = async (req, res) => {
    try {
        let reqBody = req.body;
        await Product.create({
            name: reqBody.name,
            price: reqBody.price,
            available_quantity: reqBody.available_quantity
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


module.exports.findOne = async (req, res) => {
    try {
        let reqQuery = req.query;
        await Product.findOne({
            where: {
                id: parseInt(reqQuery.id)
            }
        })
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


module.exports.findAll = async (req, res) => {
    try {
        let reqQuery = req.query;
        await Product.findAll()
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


module.exports.delete = async (req, res) => {
    try {
        let reqQuery = req.query;
        await Product.destroy({
            where: {
                id: parseInt(reqQuery.id)
            }
        })
            .then((result) => {
                return res.status(200).json({
                    status: true,
                    message: 'Data deleted',
                    data: null,
                })
            })
            .catch((error) => {
                return res.status(400).json({
                    status: false,
                    message: 'Data not deleted',
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


module.exports.updateOne = async (req, res) => {
    try {
        let reqQuery = req.query;
        let reqBody = req.body;
        let updateData = {
            name: reqBody.name,
            price: reqBody.price,
            available_quantity: reqBody.available_quantity,
        }
        await Product.update(
            updateData,
            {
                where: {
                    id: parseInt(reqQuery.id)
                }
            }
        )
            .then((result) => {
                return res.status(200).json({
                    status: true,
                    message: 'Data updated',
                    data: null,
                })
            })
            .catch((error) => {
                return res.status(400).json({
                    status: false,
                    message: 'Data not updated',
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
