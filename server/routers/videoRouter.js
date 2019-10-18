import express from "express";

export const videoRouter = express.Router();

videoRouter.get("/", (req, res) => res.send("Video Index"));
videoRouter.get("/edit", (req, res) => res.send("Video edit"));
videoRouter.get("/password", (req, res) => res.send("Video password"));

export default videoRouter;
