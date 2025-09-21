import express from 'express';
import { saveRepoInfo, getRepoInfo } from '../controllers/githubController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, saveRepoInfo);
router.get('/', protect, getRepoInfo);

export default router;