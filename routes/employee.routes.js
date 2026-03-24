import express from "express";
import { getAllEmployee } from "../controllers/employee.controller.js";

const router = express.Router();

router.get("/", getAllEmployee);

export default router;
