import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ error: "Token não informado" });
  }

  const [bearer, token] = header.split(" ");

  if (bearer !== "Bearer" || !token) {
    return res.status(401).json({ error: "Token mal formatado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // dados do usuário
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido" });
  }
};
