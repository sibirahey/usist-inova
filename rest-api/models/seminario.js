var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var seminario = new Schema({  
  title:    { type: String },
  year:     { type: Number }
});

module.exports = mongoose.model('Seminario', seminario);  