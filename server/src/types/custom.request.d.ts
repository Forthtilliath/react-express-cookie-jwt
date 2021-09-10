import { JwtPayload } from "jsonwebtoken";

declare const require: any;

declare namespace Express {
  export interface Request {
    userId?: string | JwtPayload;
    [key:string]: string;
  }
}

// declare module "express-serve-static-core" {
//   interface Request {
//     customProperty?: string;
//   }
// }

declare namespace Express {
  export interface ForthRequest extends Request {
    userId?: string;
  }
}
