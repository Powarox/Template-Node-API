import express from "express";
import authorization from "../middlewares/auth.js";
import Controller from "../controllers/xx.controller.js";

const router = new express.Router();

router.get("/api/xx", authorization, Controller.getAll);
router.get("/api/xx/:id", authorization, Controller.get);

router.put("/api/xx/:id", authorization, Controller.update);
router.patch("/api/xx/:id", authorization, Controller.update);

router.post("/api/xx", authorization, Controller.create);
router.delete("/api/xx/:id", authorization, Controller.delete);

export default router;
