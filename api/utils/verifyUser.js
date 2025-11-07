// import jwt from "jsonwebtoken";
// // import { JWT_SECRET } from "../../";config.js";
// import { errorHandler } from "./error.js";
// export const verifyUser = (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (!token) {
//     return errorHandler(res, 401, "Unauthorized");
//   }
//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       return next(errorHandler(res, 401, "Unauthorized"));
//     }
//     req.user = user;
//     next();
//   });
// };

import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(errorHandler(401, "Unauthorized – No token provided"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(403, "Invalid or expired token"));
    }

    req.user = user;
    next();
  });
};
