const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.get('/', (req, res) => {
  res.send({ ok: true, user: req.userId });
});

module.exports = app => app.use('/projects', router);