import express from 'express';
import {LoginOp} from "../controllers/loginSigup.js";
const router=express.Router();

router.post("/",LoginOp);

export default router;