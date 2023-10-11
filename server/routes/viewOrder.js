import express from "express";
import {OrderList} from "../controllers/viewOrder.js";
import {verifyUser} from '../utilis/verifyToken.js';
const router=express.Router();


router.get("/",verifyUser,OrderList);


export default router;