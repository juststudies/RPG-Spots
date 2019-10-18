const Table = require('../models/Table');

module.exports = {
    async show(req, res){
        const { player_id } = req.headers;
        
        const table = await Table.find({ player: player_id})
        
        return res.json(table);
    }
}
