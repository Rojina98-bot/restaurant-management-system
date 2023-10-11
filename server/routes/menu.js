import express from "express";
import {MenuCreate} from '../controllers/menu.js';
import {MenuUpdate} from '../controllers/menu.js';
import {MenuDelete} from '../controllers/menu.js';
import {verifyAdmin} from '../utilis/verifyToken.js';
import {MenuGet} from '../controllers/menu.js';
import {MenuGetAll} from '../controllers/menu.js';

const router=express.Router();
//create
router.post("/",verifyAdmin,MenuCreate);
//update
router.put("/:id",verifyAdmin,MenuUpdate);
//delete
router.delete("/:id",verifyAdmin,MenuDelete);

router.get("/:id",MenuGet);
router.get("/",verifyAdmin,MenuGetAll);

export default router;