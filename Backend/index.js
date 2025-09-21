
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import paymentRoutes from './routes/paymentRoutes.js';
import githubRoutes from './routes/githubRoutes.js';
import machineRoutes from './routes/machineRoutes.js';

const app = express();

app.use(cors({ origin: 'https://obenit.com', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/github', githubRoutes);
app.use('/api/machine', machineRoutes);

app.get("/api/getkey", (req, res) => res.status(200).json({ key: process.env.RAZORPAY_KEY_ID }));

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error(err));

