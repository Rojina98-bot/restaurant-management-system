import express from 'express';
//import User from "../models/users.js";
import {LoginOp} from "../controllers/loginSigup.js";
const router=express.Router();

router.post("/",LoginOp);

export default router;