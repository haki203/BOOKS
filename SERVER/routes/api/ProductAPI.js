var express = require('express');
var router = express.Router();


const productController = require('../../components/products/ProductController');
const UploadFile = require('../../middle/UploadFile');
//api/product
router.get('/', async (req, res, next) => {
    try {
        const product = await productController.getAllProducts();
        res.status(200).json({product,result:true});
    } catch (error) {
        res.status(400).json({});
    }
});
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await productController.getProductById(id);
        res.status(200).json({product,result:true});
    } catch (error) {
        res.status(400).json({});
    }
});
// add sp
router.post('/', async (req, res, next) => {

    try {
        const { name, price, quantity, image, category } = req.body;
        await productController.addNewProduct(name, price, quantity, image, category);
        res.status(200).json({ result: true });
    } catch (error) {
        res.status(400).json({ result: false });
    }
});
//api/product/search/name?keyword=iphone
router.get('/search/name', async (req, res, next) => {
    try {
        const {keyword} = req.query;
        const product = await productController.search(keyword);
        return res.status(200).json({product,result:true});
    } catch (error) {
        console.log("api search error: "+error);
        res.status(400).json({result:false});
    }
});
//upload hinh len sever
//api/product/upload
router.post('/upload',[UploadFile.single('image')] ,async (req, res, next) => {
    try {
        const {file} =req;
        if(!file){
            return res.status(400).json({result:false});
        }
        else{
            const url=`http://172.16.87.39:3000/images/${file.filename}`;
            return res.status(200).json({result:true,url}); 
        }
    } catch (error) {
        console.log("upload error: "+error);
        res.status(500).json({});
    }
});
module.exports = router;