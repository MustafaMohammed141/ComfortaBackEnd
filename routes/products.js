const express = require("express");
const router = express.Router();
const {
  getProducts,
  getSingleProducts,
  postProducts,
  deleteProducts,
  putProducts,
} = require("../controllers/products");

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await getProducts();
    res.json({
      status: 200,
      data: { data: products, message: "Products retrieved successfully" },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      data: { data: null, message: error.message },
    });
  }
});

router.get("/:productId", getSingleProducts);

// POST new product
router.post("/", async (req, res) => {
  try {
    const newProduct = await postProducts(req.body);
    res.status(201).json({
      status: 201,
      data: { data: newProduct, message: "Product created successfully" },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      data: { data: null, message: error.message },
    });
  }
});

// DELETE product by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await deleteProducts(req.params.id);
    if (deletedProduct) {
      res.json({
        status: 200,
        data: { data: deletedProduct, message: "Product deleted successfully" },
      });
    } else {
      res.status(404).json({
        status: 404,
        data: { data: null, message: "Product not found" },
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      data: { data: null, message: error.message },
    });
  }
});

module.exports = { product_routes: router };
