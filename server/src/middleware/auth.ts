import { Request, Response, NextFunction } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

function auth(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });

    const verified = verify(token, process.env.SECRET_TOKEN) as JwtPayload;
    req.userId = verified.userId as string;

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
}

export default auth;
