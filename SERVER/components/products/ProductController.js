const productService = require('./ProductService');

const getAllProducts = async ()=>{
    try{
        return await productService.getAllProducts();
    }catch(error){
        console.log("error productController.getAllProducts: "+error);
        throw error;
    }
}
const getAllDetails = async ()=>{
    try{
        return await productService.getAllDetails();
    }catch(error){
        console.log("error productController.getAllDetails: "+error);
        throw error;
    }
}
const deleteProductById =async(id)=>{
    try{
        return await productService.deleteProductById(id);
    }
    catch(error){
        console.log("error productController.deleteProductById: "+error);
        throw error;
    }
}
const addNewProduct =async(name,author,content,price,image,category)=>{
    try{
        return await productService.addNewProduct(name,author,content,price,image,category);
    }
    catch(error){
        console.log("error addNewProduct: "+error);
        throw error;
    }
}
const updateProduct = async (id,name,price,image,category)=>{
    try {
        return await productService.updateProduct(id,name,price,image,category);
    } catch (error) {
        console.log("updateProduct error: "+error);
        throw error;
    }
}
const getProductById = async(id)=>{
    try {
        return await productService.getProductById(id);
    } catch (error) {
        console.log("getProductById error: "+error);
        throw error;
    }
}


const search = async (keyword)=>{
    try {
        return await productService.search(keyword);
    } catch (error) {
        console.log("search error: "+error);
         
    }
}
module.exports={getAllProducts,deleteProductById,addNewProduct,updateProduct,getProductById,search,getAllDetails};