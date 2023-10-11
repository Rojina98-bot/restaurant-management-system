import express from 'express';
import {Count} from '../controllers/count.js';
import {verifyAdmin} from '../utilis/verifyToken.js';
const router=express.Router();
router.get("/",verifyAdmin,Count);
export default router;