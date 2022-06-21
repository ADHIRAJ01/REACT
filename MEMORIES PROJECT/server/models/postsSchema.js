const mongoose = require('mongoose');

const dbSchema = mongoose.Schema({
    name: String , 
    des: String ,
    like: {
        type: Number,
        default: 0
    }
});

const PostSchema = mongoose.Connect("PostSchema", dbSchema);

module.exports = PostSchema;