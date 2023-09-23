const router = require('express').Router();
const bodyParser = require('body-parser');
const businessLogic = require('../businessLogic/productBusinessLogic');

// Middleware setup
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.post('/create', businessLogic.create);
router.get('/find', businessLogic.findOne);
router.get('/findAll', businessLogic.findAll);
router.delete('/delete', businessLogic.delete);
router.post('/update', businessLogic.updateOne);

module.exports = router;
