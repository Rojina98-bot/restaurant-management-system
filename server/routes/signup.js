import express from 'express';
//import User from '../models/users.js';
import {SignOp} from '../controllers/loginSigup.js';
const router=express.Router();


router.post("/", SignOp);

export default router;


