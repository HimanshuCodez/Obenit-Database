import express from 'express';
import { checkout, paymentVerification, paymentWebhook } from '../controllers/paymentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/create-order').post(checkout);
router.route('/payment-verification').post(protect, paymentVerification);
router.route('/payment-webhook').post(paymentWebhook);

export default router;