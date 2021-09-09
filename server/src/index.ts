import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const app = express();
dotenv.config();

// middleware
app
  .use(helmet())
  .use(morgan("common"))
  // .use(morgan(":method :url :status :res[content-length] - :response-time ms"))
  .use(express.json())
  .use(cookieParser())
  .use(
    cors({
      origin: ["http://localhost:3001"],
      // methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  )
  .use(express.urlencoded({ extended: true }));

const getToken = (content: object) => {
  return jwt.sign(content, process.env.SECRET_TOKEN as string);
};

/// Déconnexion
app.get("/api/logout", (req, res) => {
  res.cookie("token", "", { maxAge: 0, httpOnly: true }).send();
});

// Connexion
app.get("/api/login", (req, res) => {
  const token = getToken({ userId: 12345, username: "jteprout" });

  res.cookie("token", token, { maxAge: 900000, httpOnly: true }).send();
});

// Vérification connexion
app.get("/api/jwt", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.send(false);

    jwt.verify(token, process.env.SECRET_TOKEN as string);
    res.send(true);
  }
  catch (err) {
    res.send(false);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    chalk.blue(`=> Backend server is running on http://localhost:${PORT}`)
  );
});
