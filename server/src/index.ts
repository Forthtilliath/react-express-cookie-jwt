import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import session from "express-session";
import jwt from "jsonwebtoken";

const app = express();
dotenv.config();

// middleware
app
  .use(helmet())
  // .use(morgan("common"))
  .use(morgan(":method :url :status :res[content-length] - :response-time ms"))
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
// .use(
//   session({
//     name: "userId",
//     secret: process.env.SECRET_SESSION as string,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 15 * 60 * 1000, // 1min
//     },
//   })
// );

const getToken = (content: object) => {
  return jwt.sign(content, process.env.SECRET_TOKEN as string);
};

/// Déconnexion
app.get("/api/logout", (req, res) => {
  // req.session.expires = new Date().getTime() + 1;
  // req.session.destroy((_err: any) => {
  //   console.log("Loggout after", req.session);
  //   res.send({ loggedIn: false });
  // });
  res.cookie("token", "", { maxAge: 0, httpOnly: true }).send();
  // res.redirect("./check");
});

// Connexion
app.get("/api/login", (req, res) => {
  // const user = { userId: 12345, username: 'jteprout' };
  // req.session.user = user;
  // console.log('Loggin',req.session.user);
  // res.send({ loggedIn: true, user });
  // req.session.user = { userId: 12345, username: "jteprout" };
  // console.log("Loggin", req.session.user);
  const token = getToken({ userId: 12345, username: "jteprout" });

  res.cookie("token", token, { maxAge: 900000, httpOnly: true }).send();
  // res.redirect('/api/check');
  // res.redirect("./check");
});

// Vérification connexion
app.get("/api/jwt", (req, res) => {
  // console.group('JWT');
  // console.log('headers',req.headers);
  // console.log('rawHeaders',req.rawHeaders);
  // console.log('cookies',req.cookies);
  // console.groupEnd();
  // console.log("/login", "before", req.session.user);
  // if (req.session.user) {
  //   res.send({ loggedIn: true, user: req.session.user });
  // } else {
  //   res.send({ loggedIn: false });
  // }
  // console.log("/login", "after", req.session);

  try {
    const token = req.cookies.token;
    if (!token) return res.send(false);

    jwt.verify(token, process.env.SECRET_TOKEN as string);

    res.send(true);
    
  } catch (err) {
    res.send(false);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    chalk.blue(`=> Backend server is running on http://localhost:${PORT}`)
  );
});
