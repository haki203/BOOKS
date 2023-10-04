const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const schema = new Schema({
    id: { type: ObjectId }, // khóa chính
    name: {
        type: String, // kiểu dữ liệu
    },
    place:{type:String},
    introduce:{type:String},
    career:{type:String},
    image:{type:String},
});
module.exports = mongoose.models.author || mongoose.model('authors', schema);
