const express = require('express');
const peopleDB = require('../db/peopleDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;
  const [result] = await peopleDB.insert(person);
  res.status(201).json({ message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` });
});

router.get('/', async (_req, res) => {
  const [result] = await peopleDB.findAll();
  res.status(200).json(result);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [[person]] = await peopleDB.findById(id);
  if(!person) {
    return res.status(404).json({ message: 'Pessoa não encontrada' });
  }

  res.status(200).json(person);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const person = req.body;
  const [result] = await peopleDB.update(person, id);
  if (result.affectedRows === 0) {
    return res.status(404).json({ message: 'Pessoa não encontrada' });
  }
  res.status(200).json({ message: `Pessoa de id ${id} atualizada com sucesso` });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const [result] = await peopleDB.remove(id);
  if (result.affectedRows === 0) {
    return res.status(404).json({ message: 'Pessoa não encontrada' });
  }
  res.status(200).json({ message: `Pessoa de id ${id} excluída com sucesso` });
});

module.exports = router;