const mongoose = require("mongoose");
const config = require("../config/config")

const ProductSchema = new mongoose.Schema(
   {
      product_name: {
         type: String,
         trim: true,
      },
      product_img: {
         type: String,
         trim: true,
      },
      product_desc: {
         type: String,
         trim: true,
      },
      // category: {
      //    type: mongoose.Types.ObjectId,
      //    ref: "category",
      // },
      // sub_category: {
      //    type: mongoose.Types.ObjectId,
      //    ref: "subcategory",
      // },
      // child_category: {
      //    type: mongoose.Types.ObjectId,
      //    ref: "ChildeCategory"
      // },
      // product_price: {
      //    type: Number,
      //    trim: true,
      // },
      // qty: {
      //    type: Number,
      //    trim: true,
      // },
      is_active: {
         type: Boolean,
         default: true,
      },
   },
   {
      timestamps: true,
      versionKey: false,
      toJSON: {
         transform: function (doc, data) {
            if (data?.product_img) {
               data.product_img = `${config.base_url}product_images/${data.product_img}`;
            }
         },
      },
   },
);
const product = mongoose.model("product", ProductSchema)
module.exports = product;