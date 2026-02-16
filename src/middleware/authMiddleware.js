export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res
      .stauts(403)
      .json({ message: "Access denied: No token provided" });
  }
};
