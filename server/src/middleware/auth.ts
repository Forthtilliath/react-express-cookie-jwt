import { Request, Response, NextFunction } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

// interface ForthRequest extends Request {
//   userId?: string;
// }

function auth(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });

    const verified = verify(token, process.env.SECRET_TOKEN as string) as JwtPayload;
    // req.userId = verified.userId as string;
    console.log('userId',verified.userId);
    res.locals.userId = verified.userId as string;
    console.log('middlerware',res.locals);

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
}

export default auth;
