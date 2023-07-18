const productModel = require('./ProductModel');
const detailModel = require('../detail/DetailModel');
const getAllProducts = async (size, page) => {
    // lay toan bo sp trong database
    // size =20 , page =4 ==> 61-80
    try {
        return await productModel.find().populate('category').populate('detail')
    } catch (error) {
        console.log("getAllProducts error: " + error);
    }
    return [];
}
const getAllDetails = async (size, page) => {
    // lay toan bo sp trong database
    // size =20 , page =4 ==> 61-80
    try {
        return await detailModel.find()
    } catch (error) {
        console.log("getAllProducts error: " + error);
    }
    return [];
}
// const getAllProducts = async (size, page) => {
//     try {
//         return await productModel.populate('category') // lay category
//         //.skip(2) // bo qua 2 sp dau
//     } catch (error) {
//         console.log("getAllProducts error: " + error);
//     }
//     return [];
// }
// xoa sp theo id
const deleteProductById = async (id) => {

    try {
        await productModel.findByIdAndDelete(id);
        return true;
    }
    catch (error) {
        console.log("Delete product by ID error: " + error);
        throw error;
    }
    return false;

}
const addNewProduct = async (name,author,content,price,image,category) => {
    try {
        const newProduct = {
            name,author,content,price,image,category
        }
        await productModel.create(newProduct);
        return true;
    }
    catch (error) {
        console.log("addNewProduct error: " + error);
        throw error;
    }
    return false;

}
//update sp
const updateProduct = async (id, name,author,content,price,image,category) => {
    try {
        let item = await productModel.findById(id);
        if (item) {
            item.name = name ? name : item.name;
            item.author = author ? author : item.author;
            item.content = content ? content : item.content;
            item.price = price ? price : item.price;
            item.image = image ? image : item.image;
            item.category = category ? category : item.category;
            await item.save();
            return true;
        }
    } catch (error) {
        console.log('Update product error', error);

    }
    return false;
}
// lay thong tin sp theo id
//
const getProductById = async (id) => {
    try {
        let product = await productModel.findById(id).populate('category').populate('detail') // lay category;;
        return product;
    } catch (error) {
        console.log('getProductById error', error); 
    }
    return null;
}
const search = async(keyword)=>{
    try {
        let query = {
            //price:{$gt:1000,$lt:2000}, // gt:greater than, lt: less than  1000<price<2000
            //quantity:{$lte:334},
            //$or:[{quantity:{$lte:500},quantity:{$gt:100},}],
            name:{$regex:keyword,$options:'i'}, // ten sp ko phan biet chu hoa, chi can co ky tu do la dc
            //name:keyword,  // tim kiem theo dung ten moi ra
        }
        let product = await productModel.find(query);
        return product;
    } catch (error) {
        console.log('search error', error); 
    }
}
module.exports = { getAllProducts, deleteProductById, addNewProduct, updateProduct, getProductById ,search,getAllDetails};

var data = [
    {
        "_id": 1,
        "name": "Anh 7",
        "price": 7,
        "quantity": 7,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 4
    }, {
        "_id": 2,
        "name": "Tart Shells - Savory, 2",
        "price": 75,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 7
    }, {
        "_id": 3,
        "name": "Sauce - Plum",
        "price": 86,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 14
    }, {
        "_id": 4,
        "name": "Otomegusa Dashi Konbu",
        "price": 40,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 4
    }, {
        "_id": 5,
        "name": "Onions Granulated",
        "price": 13,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 18
    }, {
        "_id": 6,
        "name": "Cheese - Goat",
        "price": 97,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 7
    }, {
        "_id": 7,
        "name": "Neckerchief Blck",
        "price": 77,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 2
    }, {
        "_id": 8,
        "name": "Tobasco Sauce",
        "price": 32,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 17
    }, {
        "_id": 9,
        "name": "Chutney Sauce",
        "price": 74,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 6
    }, {
        "_id": 10,
        "name": "Salt - Sea",
        "price": 77,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 6
    }, {
        "_id": 11,
        "name": "Appetizer - Southwestern",
        "price": 74,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 19
    }, {
        "_id": 12,
        "name": "Straws - Cocktale",
        "price": 50,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 5
    }, {
        "_id": 13,
        "name": "Energy Drink Red Bull",
        "price": 28,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 7
    }, {
        "_id": 14,
        "name": "Lamb - Leg, Bone In",
        "price": 68,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 16
    }, {
        "_id": 15,
        "name": "Cheese - Augre Des Champs",
        "price": 99,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 19
    }, {
        "_id": 16,
        "name": "Oil - Pumpkinseed",
        "price": 26,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 15
    }, {
        "_id": 17,
        "name": "Beer - Sleemans Cream Ale",
        "price": 12,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 7
    }, {
        "_id": 18,
        "name": "Wine - Prosecco Valdobiaddene",
        "price": 56,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 5
    }, {
        "_id": 19,
        "name": "Sauce - Sesame Thai Dressing",
        "price": 88,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 19
    }, {
        "_id": 20,
        "name": "Cake - Mini Cheesecake",
        "price": 95,
        "quantity": 100,
        "image": "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103221.jpg",
        "category": 5
    }
]