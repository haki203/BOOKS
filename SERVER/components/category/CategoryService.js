const categoryModel = require('./CategoryModel');
const getAllCategories = async ()=>{
    try{
        return await categoryModel.find();
    }catch(error){
        console.log("getAllCategories error ",error);
    }
    return [];
}
module.exports={getAllCategories};

var data=[{
    "_id": 1,
    "name": "Methylphenidate Hydrochloride"
  }, {
    "_id": 2,
    "name": "Rivastigmine Tartrate"
  }, {
    "_id": 3,
    "name": "Elm American"
  }, {
    "_id": 4,
    "name": "Miconazole Nitrate"
  }, {
    "_id": 5,
    "name": "GUAIFENESIN DEXTROMETHORPHAN"
  }, {
    "_id": 6,
    "name": "Loratadine"
  }, {
    "_id": 7,
    "name": "Dextrose monohydrate"
  }, {
    "_id": 8,
    "name": "Triclosan"
  }, {
    "_id": 9,
    "name": "Titanium Dioxide and Octinoxate"
  }, {
    "_id": 10,
    "name": "menthol, methyl salicylate"
  }];
  