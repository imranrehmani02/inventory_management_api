const router = require('express').Router();
const bodyParser = require('body-parser');
const businessLogic = require('../businessLogic/orderBusinessLogic');
const { auth } = require('../../middleware/auth');

// Middleware setup
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.post('/create', auth, businessLogic.create);
router.get('/findAll', businessLogic.findAll);

module.exports = router;