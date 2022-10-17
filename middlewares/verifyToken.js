const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

    let token = req.headers.authorization;
    if (token === undefined)
        res.send({ message: "Unauthorized request." })
    try {
        jwt.verify(token, 'abcdef')
        next();
    }
    catch (err) {
        next(err);
    }


}

module.exports = verifyToken;