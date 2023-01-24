const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const interventionSchema = mongoose.Schema({

    motif:{type:String ,required: true, unicode: true},
    lieu:{type:String ,required:true},
    date: { type: Date, required: true },

});
agentSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Agent', agentSchema);