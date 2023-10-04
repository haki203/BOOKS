const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const schema = new Schema({
    id: { type: ObjectId }, // khóa chính
    name: {type: String,required:true}, // kiểu dữ liệ},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    role:{type:Number,default:1,},
    // 1:user , 100:admin , 1000: super admin system
});
module.exports = mongoose.models.user || mongoose.model('users', schema);
// user -----> users