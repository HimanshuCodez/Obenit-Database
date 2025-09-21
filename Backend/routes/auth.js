
import express from 'express';
import { signup, login, getMe, getUsersWithDomains } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/users-with-domains', protect, getUsersWithDomains);

export default router;

