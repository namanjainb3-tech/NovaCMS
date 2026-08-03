const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  console.log("TOKEN:", token);
  console.log("JWT_SECRET:", process.env.JWT_SECRET);

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded:", decoded);

    req.user = decoded;
    next();
  } catch (err) {
    console.log("JWT ERROR:", err.name);
    console.log("JWT MESSAGE:", err.message);

    return res.status(401).json({
      message: err.message,
    });
  }
};
