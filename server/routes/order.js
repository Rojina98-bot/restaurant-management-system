import express from "express";
import {CreateOrder,UpdateOrder,OrderDelete,OrderGet,OrderGetAll} from "../controllers/order.js";
import {verifyUser} from '../utilis/verifyToken.js';
import { verifyAdmin } from "../utilis/verifyToken.js";
const router=express.Router();


router.post("/",verifyUser,CreateOrder);
router.put("/:id",verifyUser,UpdateOrder);
router.get("/:id",verifyAdmin,OrderGet);
router.get("/",verifyAdmin,OrderGetAll);
router.delete("/:id",verifyAdmin,OrderDelete);

export default router;


/*{
	"OrderItems":[
		{
			"OrderName":"momo",
			"OrderQuantity":4,
			"OrderPrice":150
		},
		{
			"OrderName":"biryani",
			"OrderQuantity":2,
			"OrderPrice":500
		}
	]
} */