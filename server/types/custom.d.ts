import { JwtPayload } from 'jsonwebtoken';
import session from 'express-session';

declare const require: any;

declare namespace Express {
    export interface Request {
        userId?: string | JwtPayload;
    }
}

declare module 'express-serve-static-core' {
    interface Request {
      user?: string
    } 
  }

// declare module "express-session" {
//     export interface SessionData {
//       [key: string]: any;
//     //   user?: string;
//     }
//   }