import express from "express";
//import User from "../models/users.js";
import {UserCreate} from '../controllers/users.js';
import {UserUpdate} from '../controllers/users.js';
import {UserDelete} from '../controllers/users.js';


const router=express.Router();
router.post("/",UserCreate);
router.put("/:id",UserUpdate);
router.delete("/:id",UserDelete)

export default router;