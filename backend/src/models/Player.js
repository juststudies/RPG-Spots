const {Schema, model} = require('mongoose');
const PlayerSchema = new Schema({
    name:{
        type:String,
        
        trim:true},
    email:{
        type:String,
        
        trim: true}
});

module.exports = model('Player', PlayerSchema);