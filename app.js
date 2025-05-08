const express = require("express");
const cors = require("cors");
const { admin_routes } = require("./routes/admins");
const { product_routes } = require("./routes/products");
const { user_routes } = require("./routes/users");
// =========
require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));
// =========



const app = express();
app.use(cors());

app.use("/users", user_routes);
app.use("/products", product_routes);
app.use("/admins", admin_routes);

app.use(express.json()); // for parsing application/json

app.use((req, res) => {
  return res.status(400).json({
    status: 400,
    data: { data: null, message: "invalid route" },
  });
});

// when using the listen method, comment out the export statement
app.listen(3000, () => {
  console.log(`online`);
});

// modules.exports = app;
