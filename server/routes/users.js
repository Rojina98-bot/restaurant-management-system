import express from "express";
import {UserCreate} from '../controllers/users.js';
import {UserUpdate} from '../controllers/users.js';
import {UserDelete} from '../controllers/users.js';
import {verifyUser} from '../utilis/verifyToken.js';
import {verifyAdmin} from '../utilis/verifyToken.js';
import {UserGet} from '../controllers/users.js';
import {UserGetAll} from '../controllers/users.js';

const router=express.Router();
//create
router.post("/",UserCreate);
//update
router.put("/:id",verifyUser,UserUpdate);
//delete
router.delete("/:id",verifyUser,UserDelete);
//read
router.get("/:id",verifyUser,UserGet);
router.get("/",verifyAdmin,UserGetAll); 

export default router;