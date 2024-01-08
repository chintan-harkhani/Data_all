const { product } = require("../models");

//create Product

const ProductCreate = async (reqBody) => {
    return  product.create(reqBody);
};

//list Product

const ProductList = async (req, res) => {
    return product.find(
        // {$or :[{is_active : true}]}
    )
};

// get Product id

const ProductId = async (productId) => {
    return product.findById(productId);
};

//delete Product

const DeleteProduct = async (productId) => {
    return product.findByIdAndDelete(productId);
};

//update Product

const UpdateProduct = async (productId, updateBody) => {
    return product.findByIdAndUpdate(productId, { $set: updateBody });
}

module.exports = {
 ProductCreate,
 ProductList,
 ProductId,
 DeleteProduct,
 UpdateProduct
}