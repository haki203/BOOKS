const detailService = require('./DetailService');

const getAllDetails = async ()=>{
    try{
        return await detailService.getAllDetails();
    }catch(error){
        throw error;
    }
}
module.exports={getAllDetails};