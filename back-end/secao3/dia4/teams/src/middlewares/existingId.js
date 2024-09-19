const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const { id } = req.params;
  const teamFoundById = teams.find((team) => team.id === Number(id));
  if (teamFoundById) {
    next();
  } else {
    res.status(404).json({ message: "time não encontrado!" })
  }
};

module.exports = existingId;
