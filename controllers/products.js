const productSchema = require("../models/products");

const getProducts = async () => {
  console.log(`getProducts`);
};
const getSingleProducts = async () => {
  console.log(`getProducts`);
};
const postProducts = async (req, res) => {
  const { name, description, price, image, category, stock } = req.body;
  if (!name || !description || !price || !image || !category || !stock)
    return res
      .status(400)
      .json({ status: 400, data: { data: null, message: "missing data" } });

  const isExist = await productSchema.findOne({ name });
  if (isExist) {
    return res
      .status(400)
      .json({ status: 400, data: { data: null, message: "Existing Product" } });
  }
  const product = await productSchema({
    name,
    description,
    price,
    image,
    category,
    stock,
  });
  await product.save();

  return res.status(201).json({
    status: 201,
    data: { data: true, message: "Success" },
  });
};
const deleteProducts = async () => {
  console.log(`deleteProducts`);
};
const putProducts = async () => {
  console.log(`putProducts`);
};
module.exports = {
  getProducts,
  postProducts,
  deleteProducts,
  putProducts,
  getSingleProducts,
};
