const Player = require('../models/Player');

module.exports={
    async store(req, res){
        const {name, email} = req.body;
        
        if(typeof name=== undefined || typeof email=== undefined || name===null || email===null){
            res.json({error: 'Name and email required'});
        }
        
        let player = await Player.findOne({$and:[{name}, {email}]});
        
        if(!player){
            player = await Player.create({name, email});
        }

        return res.json(player);
    }
}