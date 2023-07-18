const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const schema = new Schema({
    id: { type: ObjectId }, // khóa chính
    name: {type: String}, // kiểu dữ liệu},
    author:{type:String},
    content:{type:String},
    image:{type:String},
    category:{type:ObjectId,ref:'category'},
    detail:{type:ObjectId,ref:'detail'},
});
module.exports = mongoose.models.product || mongoose.model('product', schema);
// product -----> products