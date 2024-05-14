import jwt from 'jsonwebtoken';
import { Request, Response, Router } from "express"

export const router = Router();

// POST Request
router.post('/', (req: Request, res: Response) => {
    const {id, username} = req.body;
    const validId = 'uuidv4';
    const validUsername = 'psi1234';
    let result : string;

    if (id == validId && username == validUsername) {
        const payload = {
            id: id,
            username: username
        }
        const secret = process.env.JWT_SECRET!;
        const expiresIn = 60 * 60 * 1;
        const token = jwt.sign(payload, secret, {expiresIn: expiresIn})
        result = 'You has logged in'

        return res.json({
            result: result,
            token: token
        })
    } else {
        return res.status(403).json({
            message: 'Your id or username invalid'
        })
    }
})