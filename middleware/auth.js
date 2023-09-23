const jwt = require('jsonwebtoken');
const jwtSecret = 'DevTest08';

module.exports.auth = (req, res , next) =>{
    try {
         let token = req.headers.authorization.split(" ")[1];
         let decode = jwt.verify(token, jwtSecret);
         req.userData = decode;
         next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Authentication failed.',
        });
    }
};
