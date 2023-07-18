const detailModel = require('./DetailModel');
const getAllDetails = async ()=>{
    try{
        return await detailModel.find();
    }catch(error){
        console.log("getAllDetails error ",error);
    }
    return [];
}
module.exports={getAllDetails};
