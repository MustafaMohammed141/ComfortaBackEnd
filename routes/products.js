const express = require("express");
const product_routes = express.Router();
const {
  getProducts,
  postProducts,
  deleteProducts,
  putProducts,
  getSingleProducts,
} = require("../controllers/products");

product_routes.route("/").get(getProducts).post(postProducts);

product_routes
  .route("/:productId")
  .get(getSingleProducts)
  .put(putProducts)
  .delete(deleteProducts);

module.exports = { product_routes };
