import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";

export const accessValidation = (req: Request, res: Response, next: NextFunction) => {
    const {authorization} = req.headers;
    if (!authorization) {
        return res.status(401).json({
            message: 'Token is needed'
        })
    }

    const token = authorization.split(' ')[1];
    const secret = process.env.JWT_SECRET!;

    try {
        const jwtDecode = jwt.verify(token, secret);
    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }
    next()
}