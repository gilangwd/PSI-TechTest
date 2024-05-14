import { Request, Response, Router } from "express"
import { checkoutRequestBody } from "types/checkout";

export const router = Router();

// POST Request
router.post('/', (req: Request<{}, any, checkoutRequestBody>, res: Response) => {
    const {hasVoucher, itemPrice} = req.body;
    let finalPrice : number;
    let point : number = 0;
    if (hasVoucher.toUpperCase() == 'Y') {
        finalPrice = itemPrice/2;
        point = finalPrice * 0.02;
    } else {
        finalPrice = itemPrice;
    }
    res.send({
        amountToPaid: finalPrice,
        pointsEarned: point
    })
})