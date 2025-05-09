const express = require("express");
const user_routes = express.Router();
const {
  getUsers,
  postUsers,
  deleteUsers,
  putUsers,
  getSingleUsers,
} = require("../controllers/users");

user_routes.route("/").get(getUsers);

user_routes
  .route("/:userId")
  .get(getSingleUsers)
  .post(postUsers)
  .put(putUsers)
  .delete(deleteUsers);

module.exports = { user_routes };
