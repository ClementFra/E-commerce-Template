const jwt = require('jsonwebtoken');

const protect = (roles = []) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).send("Non autorisé");

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).send("Accès interdit");
      }
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).send("Token invalide");
    }
  };
};

module.exports = { protect };
