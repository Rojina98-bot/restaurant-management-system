import express from "express";
import {verifyUser} from '../utilis/verifyToken.js';
import { UserGetProfile } from "../controllers/getProfile.js";
const router=express.Router();

router.get("/",verifyUser,UserGetProfile); 

export default router;