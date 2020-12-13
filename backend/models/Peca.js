const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    unique: true,
  },
  tags: {
    type: String,
  },
  descricao: {
    type: String, 
    required: true,
  },
  autor: {
    type: String,
  },
});

const Peca = mongoose.model('Peca', UserSchema);

module.exports = Peca;