const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const teamsRouter = require('./routes/teamsRouter');
const cors = require('cors');
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const apiCredentials = require('./middlewares/apiCredentials');

const app = express();

const limiter = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
  message: "Muitas requisições originadas desta IP"
});

app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use(apiCredentials);
app.use(morgan('combined'));
app.use(cors());
app.use('/teams', teamsRouter);


app.use((erro, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${erro.message}` })
})

module.exports = app;