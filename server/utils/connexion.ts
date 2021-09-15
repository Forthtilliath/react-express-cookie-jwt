import { sign } from "jsonwebtoken";

export const getToken = (content: object) => {
  return sign(content, process.env.SECRET_TOKEN as string, {
    expiresIn: "4h",
  });
};
