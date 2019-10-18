import express from "express";

export const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("Global Index"));
globalRouter.get("/edit", (req, res) => res.send("User edit"));
globalRouter.get("/password", (req, res) => res.send("User password"));

export default globalRouter;
