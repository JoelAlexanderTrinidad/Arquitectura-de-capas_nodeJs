require('dotenv').config();

const express = require('express');
const app = express();
const cors = require("cors");
const productsRoutes = require('./src/routes/products.route');
const port = 3000

app.use(
    express.urlencoded({
      extended: true,
    })
  );

app.use(express.json());

app.use(cors());

app.use('/products', productsRoutes);

app.listen(port, () => {
  console.log(`🔥 Server is running at port ${port}`);
});

module.exports = app;