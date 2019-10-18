const {Schema, model} = require('mongoose');
const TableSchema = new Schema({
        thumbnail:String,
        adventure: String,
        master: String,
        system: [String],
        genre: [String],
        address: String,
        price: Number,
        description: String,
        player:{
            type: Schema.Types.ObjectId,
            ref:'Player'
        },
        created_At:Date,
        update_at: Date
    }, {
            toJSON:{
                virtuals:true
            }
        }
);

TableSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:8080/files/${this.thumbnail}`
});

module.exports = model('Table', TableSchema);