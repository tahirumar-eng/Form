const express = require("express");
const router = express.Router();

const DUMMY_USERS = [];

router.post("/signup", async (req, res) => {
  console.log(req.body);
});
router.post("/login", async (req, res) => {
  console.log(req.body);
});
module.exports = router;
