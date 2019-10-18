import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

import globalRouter from "./routers/globalRouter";
import sportsListRouter from "./routers/sportsListRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", globalRouter);
app.use("/sportslist", sportsListRouter);
app.use("/videos", videoRouter);

export default app;
