const product = require("../models/product");

const getProducts = async (req, res) => {
  const products = await product.find();
    res.json(products)
};


const getSingleProducts = async (req, res) => {
  const Product = await product.findById(req.params.id);
  if (!Product) return res.status(404).json({ message: 'Product not found' });
  res.json(Product);
};




const postProducts = async (newProduct) => {

 
  const product = {
    id: Date.now().toString(), 
    ...newProduct,
  };
  products.push(product);
  return product;
};






const deleteProducts = async (id) => {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    const deletedProduct = products[index];
    products.splice(index, 1);
    return deletedProduct;
  }
  return null;
};

// update a product
const putProducts = async (req, res) => {
  const updated = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Product not found' });
  res.json(updated);
};

module.exports = {
  getProducts,
  postProducts,
  deleteProducts,
  putProducts,
  getSingleProducts,
};
