import app from "./app";
import "./db";
import dotenv from "dotenv";
import "./models/SportsList";
dotenv.config();

app.listen(process.env.PORT, () =>
  console.log(`Conneced port ${process.env.PORT}`)
);
