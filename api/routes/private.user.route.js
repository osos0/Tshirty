import express from "express";

import { verifyUser } from "../utils/verifyUser.js";
import { getUsers } from "../controllers/private.user.controller.js";
const router = express.Router();

router.get("/all", verifyUser, getUsers);

export default router;
