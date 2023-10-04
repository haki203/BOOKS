const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
    _id: { type: ObjectId }, // Khóa chính (ObjectId sẽ tự động được tạo)
    bookId: { type: ObjectId, ref: 'book' }, // Tham chiếu đến bảng Author thông qua khóa ngoại AuthorID
    chapter:{type:Number},
    title: { type: String}, 
    content: { type: String}, 
    audio: { type: String}, 
});
// Đảm bảo rằng bảng Products chưa được định nghĩa trước đó
module.exports = mongoose.model('chapter', schema, 'chapters');
