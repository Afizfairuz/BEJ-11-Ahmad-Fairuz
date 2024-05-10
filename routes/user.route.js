const express = require("express");
const router = express.Router();
const {
  
  GetEmployee,
  UpdateEmployee,
  CreateEmployee,
  DeleteEmployee,
} = require("../handler/user.handler");



router.get("/emp/login", (req, res) => {
  res.render("login");
});

router.get("/emp", GetEmployee);
router.post("/emp", CreateEmployee);
router.put("/emp/:id", UpdateEmployee);
router.delete("/emp/:id", DeleteEmployee);

module.exports = router;
