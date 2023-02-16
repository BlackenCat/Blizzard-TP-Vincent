const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const classeSchema = mongoose.Schema({

    Mail:{type:String ,required: true, unicode: true},
    Classe:{type:String ,required:true},
    password: { type: String, required: true },

});
classeSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Agent', classeSchema);