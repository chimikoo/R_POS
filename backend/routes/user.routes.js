import { Router } from "express";
import {
  deleteUser,
  login,
  logout,
  register,
  updateUser,
} from "../controllers/user.controllers.js";
import isAuth from "../middlewares/isAuth.js";

const router = Router();

// POST /users/register
router.post("/register", isAuth, register);

// POST /users/login
router.post("/login", login);

// GET /users/logout
router.get("/logout", logout);

// PUT /users/update/:id
router.put("/update/:id", isAuth, updateUser);

// DELETE /users/delete/:id
router.delete("/delete/:id", isAuth, deleteUser);

export default router;
