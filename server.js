const express = require("express");
const app = express();
const sdk = require("sdk");
const dotenv = require("dotenv");
const transactionsroute = require("./src/routes/transaction");
dotenv.config();
require("./src/config/connection");
const PORT = process.env.PORT;
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/transaction", transactionsroute);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
