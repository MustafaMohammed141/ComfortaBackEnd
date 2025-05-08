let products = []; 

const getProducts = async () => {
  console.log(`getProducts`);
  return products;
};

const getSingleProducts = async (id) => {
  console.log(`getProducts`);
  return products.find((product) => product.id === id);
};

const postProducts = async (newProduct) => {
  console.log(`postProducts`);
 
  const product = {
    id: Date.now().toString(), 
    ...newProduct,
  };
  products.push(product);
  return product;
};

const deleteProducts = async (id) => {
  console.log(`deleteProducts`);
  console.log(`id`, id);
  console.log(`products`, products);
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    const deletedProduct = products[index];
    products.splice(index, 1);
    return deletedProduct;
  }
  return null;
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
