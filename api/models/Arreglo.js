const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArregloSchema = new Schema({
  nombre: String,
  modeloCelular: String,
  arreglo: String,
  dir: String,
  contacto: String,
  celPrestado: Boolean,
  estado: Boolean
});

module.exports = mongoose.model('Arreglo', ArregloSchema);
