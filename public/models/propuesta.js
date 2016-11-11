var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var propuestaSchema = new Schema({
	fecha: String,
	ciudad: String, 
	documento: {
		asunto: String,
		tipo: String,
		nombrePosgrado: String,
		titulo: String, 
		url: String,    
		estudiante: {
  
			id: String    
		},   
		profesor: {
 
			id: String      
		},
		asesor: {
			id: String,
			perfil: String
		}  
	}
});

mongoose.model('propuesta', propuestaSchema);