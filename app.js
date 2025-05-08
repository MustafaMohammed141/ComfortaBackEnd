const express = require("express");
const { admin_routes } = require("./routes/admins");
const { product_routes } = require("./routes/products");
const { user_routes } = require("./routes/users");
const app = express();
app.use(express.json());

app.use("/users", user_routes);
app.use("/products", product_routes);
app.use("/admins", admin_routes);
app.use((req, res) => {
  return res.status(400).json({
    status: 400,
    data: { data: null, message: "invalid route" },
  });
});

app.listen(3000, () => {
  console.log(`online`);
});
// modules.exports = app;
