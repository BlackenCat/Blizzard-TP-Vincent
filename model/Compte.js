const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const CompteSchema = mongoose.Schema({

    ID:{type:String ,required: true, unicode: true},
    nom:{type:String ,required:true},
    mdp: { type: String, required: true },

});
CompteSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Agent', CompteSchema);