import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

   //Generated a token above and sending it to user in a cokkie...httponly cookie..which is a lot more secure


  res.cookie("jwt", token, { //Sending JWT token in cookies
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS...cookie will logout after 7 days
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};
