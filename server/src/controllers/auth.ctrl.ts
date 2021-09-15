import { verify } from "jsonwebtoken";
import { getToken } from "./../../utils/connexion";
import { Request, Response } from "express";

export const logout = (_req: Request, res: Response) => {
  res.cookie("token", "", { maxAge: 0, httpOnly: true }).send();
};

export const login = (_req: Request, res: Response) => {
  const token = getToken({ userId: 12345, username: "jteprout" });

  res.cookie("token", token, { maxAge: 15 * 60 * 1000, httpOnly: true }).send();
};

export const jwt = (req: Request, res: Response) => {
  try {
    console.log("cookies", req.cookies);
    const token = req.cookies.token;
    if (!token) return res.json({ loggedIn: false });

    verify(token, process.env.SECRET_TOKEN as string);
    res.json({ loggedIn: true, user: { userId: 12345, username: "jteprout" } });
  } catch (err) {
    res.json({ loggedIn: false });
  }

    
  const defaultState = { loggedIn: false };
  try {
    const token = req.cookies.token;

    if (!token) return res.send(defaultState);

    const decodedToken:IToken = verify(token, process.env.SECRET_TOKEN as string) as IToken;
    const { iat, exp, ...user } = decodedToken;

    res.send({ loggedIn: true, user });
  } catch (err) {
    res.send(defaultState);
  }
};

interface IToken {
    iat: number,
    exp: number,
    userId: string,
    username: string
}
