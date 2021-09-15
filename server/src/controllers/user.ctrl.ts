import { Request, Response } from "express";

export const getProfile = (_req: Request, res: Response) => {
  console.log("ctrl", res.locals.user);
  res.status(200).send("Espace reservé !!! Mais tu peux passer");
};
