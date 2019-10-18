import express from "express";
import {
  loadSports,
  addSport,
  deleteSport,
  updateSport
} from "../controller/sportsListController";
export const sportsListRouter = express.Router();

sportsListRouter.get("/", loadSports);
sportsListRouter.post("/add", addSport);
sportsListRouter.delete("/delete", deleteSport);
sportsListRouter.put("/update", updateSport);

export default sportsListRouter;
