import { verify } from "jsonwebtoken";
import { getToken } from "./../utils/connexion";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import chalk from "chalk";
import cookieParser from "cookie-parser";

import * as authMdw from "./middleware/auth.mdw";
import * as userCtrl from "./controllers/user.ctrl";
import * as authCtrl from "./controllers/auth.ctrl";

const app = express();
dotenv.config();

// middleware
app
  .use(helmet())
  .use(morgan("dev"))
  // .use(morgan(":method :url :status :res[content-length] - :response-time ms"))
  .use(express.json())
  .use(cookieParser())
  .use(
    cors({
      origin: ["http://localhost:3001"],
      credentials: true,
    })
  )
  .use(express.urlencoded({ extended: true }));

app.get("*", authMdw.checkUser);

app.get("/api/login", authCtrl.login);
app.get("/api/logout", authCtrl.logout);
app.get("/api/jwt", authCtrl.jwt);

app.get("/api/user/profile", authMdw.checkAuth, userCtrl.getProfile);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    chalk.blue(`=> Backend server is running on http://localhost:${PORT}`)
  );
});
