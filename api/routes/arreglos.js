const express = require('express');
const router = express.Router();

const Arreglo = require('../models/Arreglo');

router.get('/arreglos', async (req, res) => {
  const arreglos = await Arreglo.find();
  res.json(arreglos);
});

router.post('/arreglos', async (req, res) => {
  const arreglo = new Arreglo(req.body);
  console.log(req.body);
  await arreglo.save();
  res.json('arreglo guardado');
});

module.exports = router;
