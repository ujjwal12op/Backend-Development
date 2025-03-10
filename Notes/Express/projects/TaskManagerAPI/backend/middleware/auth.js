const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }
  try {
    // Remove 'Bearer ' prefix if present
    const tokenValue = token.startsWith("Bearer ") ? token.split(" ")[1] : token;

    const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token." });
  }
};
