import jwt from 'jsonwebtoken';

const checkAuth = async (req, res, next) => {

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            jwt.verify(token, process.env.JWT_SECRET);

            return next();
        } catch (error) {
            return res.status(403).json({ msg: 'Token not valid' });
        }
    }

    if (!token) {
        return res.status(403).json({ msg: 'Token doesnt exist' });
    }
};

export default checkAuth;