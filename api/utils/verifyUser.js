import jwt from "jsonwebtoken";
// import { JWT_SECRET } from "../../";config.js";
import { errorHandler } from "./error.js";
export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return errorHandler(res, 401, "Unauthorized");
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(res, 401, "Unauthorized"));
    }
    req.user = user;
    next();
  });
};
