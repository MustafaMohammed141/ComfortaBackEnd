const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { admin_routes } = require("./routes/admins");
const { product_routes } = require("./routes/products");
const { user_routes } = require("./routes/users");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;
console.log("DB Connection String:", MONGO_URI);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });

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
