import Razorpay from 'razorpay';
import crypto from 'crypto';
import { Payment } from '../models/Payment.js';

export const checkout = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: Number(req.body.amount),
      currency: "INR",
    };

    const order = await instance.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      message: "Error creating order",
    });
  }
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.status(200).json({
      success: true,
      message: "Payment Verified Successfully",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Payment Verification Failed",
    });
  }
};

export const paymentWebhook = async (req, res) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const signature = req.headers['x-razorpay-signature'];
  const body = req.body;

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(body))
    .digest('hex');

  if (expectedSignature === signature) {
    const { event, payload } = body;
    if (event === 'payment.captured') {
      const { order_id, id, signature } = payload.payment.entity;
      await Payment.create({
        razorpay_order_id: order_id,
        razorpay_payment_id: id,
        razorpay_signature: signature,
      });
    }
    res.status(200).json({ status: 'ok' });
  } else {
    res.status(400).json({ status: 'error' });
  }
};