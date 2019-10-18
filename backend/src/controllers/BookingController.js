const Booking = require('../models/Booking');

module.exports={
    async store(req, res){
        const { player_id } = req.headers;
        const { table_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            player: player_id,
            table: table_id,
            date,
        });

        await booking.populate('table').populate('player').execPopulate()
        return res.json(booking); 
    }
}