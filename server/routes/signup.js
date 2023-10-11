import express from 'express';
import {SignOp} from '../controllers/loginSigup.js';

const router=express.Router();


router.post("/",SignOp);

export default router;


//use json in the format of 
//userName, userEmail