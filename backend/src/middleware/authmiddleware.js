const jwt = require('jsonwebtoken');
require('dotenv').config()
const secretKey = process.env.SECRET_KEY 

const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token'); 

    if (!token) {
        return res.status(401).json({ message: 'No se proporcionó un token de autenticación.' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; 
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido o expirado.' });
    }
};

module.exports = {authMiddleware}
