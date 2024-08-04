const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");

require("dotenv").config();

/**
 * Create and configure an instance of the Express application.
 */
const app = express();

// Set up middleware to parse incoming request bodies in JSON format
app.use(bodyParser.json());

/**
 * Set up middleware to define a base URL path "/api" for the routes defined in the `productRoutes` module.
 * Any routes defined in the `productRoutes` module will be accessible under the "/api" path in the application.
 */
app.get("/", (req, res) => {
  res.send(
    "Welcome to the E-Commerce API!\n\nHere are some details:\n- Get all products: /api/products\n- Delete product: /api/products/:id\n- update quantity: /api/products/:id/update_quantity\n- Create product: /api/products/create");
  );
});

// Use product routes
//app.use("/", productRoutes);

app.use("/api", productRoutes);

module.exports = app;
