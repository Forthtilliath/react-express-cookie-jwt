import { JwtPayload } from "jsonwebtoken";
import session from "express-session";

declare const require: any;

declare namespace Express {
  export interface Request {
    userId?: string | JwtPayload;
    user?: string;
  }
}

declare module "express-serve-static-core" {
  interface Request {
    userId?: string;
    user?: string;
  }
}
