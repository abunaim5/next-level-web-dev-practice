import express, { Request, Response } from "express";
import { pool } from "../../config/db";
import UserController from "./user.controller";
import logger from "../../middleware/logger";
import auth from "../../middleware/auth";

const router = express.Router();

router.post('/', UserController.createUser);

router.get('/', logger, auth("admin"), UserController.getUsers);

router.get('/:id', logger, auth("admin", "user"), UserController.getSingleUser);

router.put('/:id', UserController.updateUser);

router.delete('/:id', UserController.deleteUser);

export const userRoutes = router;