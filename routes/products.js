const express = require("express");
const product_routes = express.Router();
const {
  getProducts,
  postProducts,
  deleteProducts,
  putProducts,
  getSingleProducts,
} = require("../controllers/products");

product_routes.route("/").get(getProducts);

product_routes
  .route("/:productId")
  .get(getSingleProducts)
  .post(postProducts)
  .put(putProducts)
  .delete(deleteProducts);

module.exports = { product_routes };
