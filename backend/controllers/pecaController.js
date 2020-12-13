const express = require('express');
const router = express.Router();
const Peca = require('../models/Peca')

router.post('/', async (req, res) => {
  const { titulo } = req.body;

  try {
    if(await Peca.findOne({ titulo }))
      return res.status(400).send({ error: 'Peca already exists' });

    const peca = await Peca.create(req.body);

    return res.send({ 
      peca,
      token: generateToken({ id: peca.id }),
    });

  } catch (err) {
    return res.status(400).send({ error: 'Registration failed' });
  }
});

router.get('/findall', async(req, res) => {

  const all = await Peca.find();

  res.send({
    all,
  });
})

module.exports = app => app.use('/peca', router);