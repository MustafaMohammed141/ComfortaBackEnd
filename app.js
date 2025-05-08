const express = require("express");
const { admin_routes } = require("./routes/admins");
const { product_routes } = require("./routes/products");
const { user_routes } = require("./routes/users");
const app = express();

app.use("/users", user_routes);
app.use("/products", product_routes);
app.use("/admins", admin_routes);
app.use((req, res) => {
  console.log(`NotFound`);
});
app.listen(3000, () => {
  console.log(`Online`);
});
