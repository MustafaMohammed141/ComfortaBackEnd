const express = require("express");
const admin_routes = express.Router();
const {
  getAdmins,
  postAdmins,
  deleteAdmins,
  putAdmins,
  getSingleAdmins,
} = require("../controllers/admins");

admin_routes.route("/").get(getAdmins);

admin_routes
  .route("/:adminId")
  .get(getSingleAdmins)
  .post(postAdmins)
  .put(putAdmins)
  .delete(deleteAdmins);

module.exports = { admin_routes };
