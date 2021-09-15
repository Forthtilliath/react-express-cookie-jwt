import { Request, Response, NextFunction } from "express";
import { JwtPayload, sign, verify } from "jsonwebtoken";

/**
 * Vérifie si un utilisateur est connecté. Si oui, on récupère les informations du cookie
 * pour les rendre disponible dans les controlleurs.
 */
export const checkUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) res.locals.user = null;

    const verified = verify(
      token,
      process.env.SECRET_TOKEN as string
    ) as JwtPayload;
    const { iat, exp, ...user } = verified;
    res.locals.user = user;

    // Reload the cookie
    const newToken = sign(user, process.env.SECRET_TOKEN as string, {
      expiresIn: "4h",
    });
    res.cookie("token", newToken, {
      httpOnly: true,
      maxAge: 4 * 60 * 60 * 1000,
    });
  } catch (err) {
    res.locals.user = null;
  }

  next();
};

/**
 * Autorise seulement les utilisateurs connectés à accéder aux contrôlleurs
 */
export const checkAuth = (_req: Request, res: Response, next: NextFunction) => {
  if (!res.locals.user)
    return res.status(401).json({ errorMessage: "Unauthorized" });

  next();
};
