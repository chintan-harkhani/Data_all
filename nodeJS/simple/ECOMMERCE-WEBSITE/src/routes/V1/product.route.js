const express = require("express");
const { ProductController } = require("../../controllers");
const { PorductValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const {upload} = require("../../middlewares/upload");

const routes = express.Router();

//create product

routes.post("/createproduct",
upload.single("product_img"),
validate(PorductValidation.CreateProduct),
    ProductController.CreateProduct
);

//product list

routes.get("/productlist",
    ProductController.ProductList
);

//product id
routes.get("/productlist/:productId",
    ProductController.ProductId
);

//delete product

routes.delete("/deleteproduct/:productId",
    ProductController.DeleteProduct
);

//update product

routes.put("/updateproduct/:productId",
    ProductController.UpdateProduct
);

module.exports = routes;