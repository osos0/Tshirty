import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

//  signUp
export const signup = async (req, res, next) => {
  const { username, email, password, mobile } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    mobile: mobile || "01************",
    // address,
  });
  try {
    await newUser.save();
    res.json("Signup successfully");
  } catch (error) {
    next(error);
  }
};

// signIn
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;

    // res
    //   .status(200)
    //   .cookie("access_token", token, {
    //     httpOnly: true,
    //   })
    //   .json(rest);
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "lax", // أو "none" لو تستخدم HTTPS
        secure: false, // خليه true فقط لو بتستخدم HTTPS
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

// google
export const google = async (req, res, next) => {
  const { Name, email, googlePhotoURL, mobile } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;

      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcrypt.hashSync(generatedPassword, 10);

      const newUser = new User({
        username:
          (Name ? Name.toLowerCase().split(" ").join("") : "user") +
          Math.floor(Math.random() * 10000),
        email,
        password: hashedPassword,
        googlePhotoURL,
        mobile: mobile || "01************",
        // address,
      });

      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);
      const { password, ...rest } = savedUser._doc;

      // res
      //   .status(200)
      //   .cookie("access_token", token, {
      //     httpOnly: true,
      //   })
      //   .json(rest);
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
          sameSite: "lax", // أو "none" لو تستخدم HTTPS
          secure: false, // خليه true فقط لو بتستخدم HTTPS
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
