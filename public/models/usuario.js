var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
	nombre: String,
	apellidos: String,
	documento: String,
	tipodocumento: String,
	titulo: String,
	email: String,
	clave: String,
	telefono: String,
	movil: String,
	direccion: String,
	programa: String,
	cdprograma: String,
	empresa: String,
	cargo: String,
	curso: String,
	rol: String,
});

mongoose.model('usuario', usuarioSchema);