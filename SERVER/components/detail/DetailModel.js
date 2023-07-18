const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const schema = new Schema({
    id: { type: ObjectId }, // khóa chính,
    name:{type:String},
    chuong1: {
        type: String, // kiểu dữ liệu
    },
    chuong2: {
        type: String, // kiểu dữ liệu
    },
    chuong3: {
        type: String, // kiểu dữ liệu
    },
});
module.exports = mongoose.models.detail || mongoose.model('detail', schema);
// category -----> categories