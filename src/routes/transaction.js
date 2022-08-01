const express = require("express");
const router = express.Router();
const sdk = require("sdk");

const { transactions } = require("../controller/transaction.controller");

router.get("/", transactions);
module.exports = router;
