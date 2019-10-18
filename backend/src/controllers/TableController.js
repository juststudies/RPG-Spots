const Table = require('../models/Table');
const Player = require('../models/Player');

module.exports={
    async index(req, res){
        const tables = await Table.find({})
        return res.json(tables);        
    },

    async store(req, res){
        const {filename}= req.file;
        const {adventure, master, system,
             genre, address, price, description} = req.body;
        
        const {player_id} = req.headers;
        const player = await Player.findById(player_id);

        if(!player){
            return res.status(400).json({error: 'Player does not exists'});
        }

        const table = await Table.create({
            player: player_id,
            thumbnail:filename,
            adventure,
            master,
            system: system.split(',').map(systems=>systems.trim()),
            genre: genre.split(',').map(genres=>genres.trim()),
            address,
            price,
            description
        })
            res.json(table);
    }
}