import { Request, Response } from "express";

export const getProfile = (_req: Request, res: Response) => {
  return res.status(200).send(`Espace reservé !!! Mais tu peux passer ${res.locals.user.username} !`);
};
