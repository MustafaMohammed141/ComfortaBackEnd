const product = require("../models/product");

const getProducts = async (req, res) => {
  const products = await product.find();
    res.json(products)
  console.log(`getProducts`);
};

const getSingleProducts = async (req, res) => {
  const Product = await product.findById(req.params.id);
  if (!Product) return res.status(404).json({ message: 'Product not found' });
  res.json(Product);
  console.log(`getSingleProduct`);
};

// create a new product
const postProducts = async () => {
  console.log(`postProducts`);
};




const deleteProducts = async () => {
  console.log(`deleteProducts`);
};

// update a product
const putProducts = async (req, res) => {
  const updated = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Product not found' });
  res.json(updated);
  console.log(`putProducts`);
};
module.exports = {
  getProducts,
  postProducts,
  deleteProducts,
  putProducts,
  getSingleProducts,
};
