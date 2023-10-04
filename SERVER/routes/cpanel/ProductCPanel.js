var express = require('express');
var router = express.Router();
const productController = require('../../components/products/ProductController');
const userController = require('../../components/users/UserController');
const categoryController = require('../../components/category/CategoryController');
const uploadFile = require('../../middle/UploadFile');
const CONFIG = require('../../config/Config');


//firebase
const firebaseAdmin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');
const uuid = uuidv4();
// change the path of json file
const serviceAccount = require('../../bookapp-f06b4-firebase-adminsdk-45n3b-c2b1712615.json');
const authorModel = require('../../components/author/AuthorModel');
//intialize
const admin = firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
});
//create storage refence
const storageRef = admin.storage().bucket(`gs://bookapp-f06b4.appspot.com`);

async function uploadFiles(path, filename) {

    // Upload the File
    const storage = await storageRef.upload(path, {
        public: true,
        destination: `/uploads/hashnode/${filename}`,
        metadata: {
            firebaseStorageDownloadTokens: uuidv4(),
        }
    });
    return storage[0].metadata.mediaLink;
}






//localhost:3000/cpanel/product
router.get('/', async (req, res, next) => {
    //hien thi trang danh sach sp
    const products = await productController.getAllProducts();
    res.render('product/list', { products });
    //     const users = await userController.getAllUsers();
    // res.render('product/list', { users });
});
//localhost:3000/cpanel/product
router.get('/details', async (req, res, next) => {
    //hien thi trang danh sach sp
    const detail = await productController.getAllDetails();
    res.render('product/list', { detail });
    //     const users = await userController.getAllUsers();
    // res.render('product/list', { users });
});
router.get('/:id/delete', async (req, res, next) => {
    // hien thi trang danh sach sp
    try {
        const { id } = req.params;
        await productController.deleteProductById(id);
        return res.json({ status: true })
    }
    catch (error) {
        return res.json({ status: false })
    }

});
router.get('/new', async (req, res, next) => {
    // hien thi add sp
    const categories = await categoryController.getAllCategories();
    res.render('product/new', { categories });

});
// xu ly add sp
router.post('/new', [uploadFile.single('image'),], async (req, res, next) => {
    try {
        let { body, file } = req;
        if (file) {
            // up image and get link image
            let image = `http://${CONFIG.CONSTANTS.IP}:3000/images/${file.filename}`;
            body = { ...body, image: image }
        }
        let { name, price, quantity, image, category } = body;
        await productController
            .addNewProduct(name, price, quantity, image, category);
        return res.redirect('/cpanel/product');
    } catch (error) {
        console.log('Add new product error: ', error)
        next(error);
    }
})
router.get('/testUploadImage', async (req, res, next) => {
    // hien thi add sp
    const categories = await categoryController.getAllCategories();
    const authors = await authorModel.find();
    res.render('product/new', { categories,authors });

});
router.post('/testUploadImage', [uploadFile.single('image'),], async (req, res, next) => {
    try {
        let { body, file } = req;
        let { title,authorId,categoryId, description,image,createAt,updateAt } = body;
        await productController.addNewProduct(title,authorId,categoryId, description, image,createAt,updateAt );
        return res.redirect('/cpanel/product');
    } catch (error) {
        console.log('Add new product error: ', error)
        next(error);
    }
})
//xu ly cap nhat sp
router.post('/:id/edit', [uploadFile.single('image'),], async (req, res, next) => {
    try {
        let { body, file } = req;
        let { id } = req.params;
        if (file) {
            let image = `http://${CONFIG.CONSTANTS.IP}:3000/images/${file.filename}`;
            body = { ...body, image: image }
        }
        let { name, price, quantity, image, category } = body;
        console.log(body);
        await productController
            .updateProduct(id, name, price, quantity, image, category);
        return res.redirect('/cpanel/product');
    } catch (error) {
        console.log('Add new product error: ', error)
        next(error);
    }
})

// hien thi trang cap nhat sp /cpanel/product/:id/edit
router.get('/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productController.getProductById(id);
        const categories = await categoryController.getAllCategories();
        console.log(product);
        console.log(categories);
        for (let index = 0; index < categories.length; index++) {
            const element = categories[index];
            categories[index].selected = false;
            if (element._id.toString() == product.category.toString()) {
                categories[index].selected = true;
            }
        }
        res.render('product/edit', { product, categories });
    } catch (error) {
        next(error);
    }
});

module.exports = router;