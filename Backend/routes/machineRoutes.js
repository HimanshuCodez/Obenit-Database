import express from 'express';
import { getMachineData, updateMachineData } from '../controllers/machineController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getMachineData);
router.post('/', protect, updateMachineData); // Assuming admin role check is in the controller

export default router;
