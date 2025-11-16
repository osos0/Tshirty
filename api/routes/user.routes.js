import express from "express";
import {
  //   deleteUser,
  signout,
  test,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";
// import { getUsers } from "../controllers/private.user.controller.js";
const router = express.Router();

router.get("/test", test);
// router.delete("/delete/:userId", verifyUser, deleteUser);
router.put("/update/:userId", verifyUser, updateUser);
router.post("/signout", signout);
// router.get("/all", verifyUser, getUsers);

export default router;
