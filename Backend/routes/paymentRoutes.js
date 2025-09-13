import express from 'express';
import { checkout, paymentVerification, getKey } from '../controllers/paymentController.js';

const router = express.Router();

router.route('/create-order').post(checkout);
router.route('/payment-verification').post(paymentVerification);
router.route('/getkey').get(getKey);

export default router;