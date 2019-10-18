const {Schema, model} = require('mongoose');
const BookingSchema = new Schema({
    date: String,
    approved: Boolean,
    
    player:{
        type:Schema.Types.ObjectId,
        ref: 'Player'
    },

    table:{
        type:Schema.Types.ObjectId,
        ref: 'Table'
    }
});

module.exports = model('Booking', BookingSchema);