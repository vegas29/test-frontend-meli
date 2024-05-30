import jwt from 'jsonwebtoken';
import generateId from './generateId.js';

const generateJWT = ()=>{
    return jwt.sign({id: generateId()}, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
}

export default generateJWT;