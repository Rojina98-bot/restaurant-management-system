import express from "express";
import {CategoryCreate} from '../controllers/category.js';
import {CategoryUpdate} from '../controllers/category.js';
import {CategoryDelete} from '../controllers/category.js';
import {verifyAdmin} from '../utilis/verifyToken.js';
import {CategoryGet} from '../controllers/category.js';
import {CategoryGetAll} from '../controllers/category.js';
import { CategoryCreateNew } from "../controllers/category.js";
const router=express.Router();
//create
router.post("/",verifyAdmin,CategoryCreate);
//update
router.put("/:id",verifyAdmin,CategoryUpdate);
//delete
router.delete("/:id",verifyAdmin,CategoryDelete);
router.get("/:id",CategoryGet);
router.get("/",verifyAdmin,CategoryGetAll);

export default router;