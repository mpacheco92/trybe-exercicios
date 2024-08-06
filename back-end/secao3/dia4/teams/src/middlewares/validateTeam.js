const validateTeam = (req, res, next) => {
  const { nome, sigla } = req.body;
  if (!nome || !sigla) {
    return res.status(404).json({ message: "atributos inválidos" });
  }
  next();
};

module.exports = validateTeam;
