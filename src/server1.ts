import type { Request, Response, NextFunction } from "express";

Object.defineProperty(exports, "__esModule", { value: true });
// Importing required modules from Express and other necessary libraries
import express from "express"; // Importing express and types for Request and Response
const products_1 = require("./mock/products"); // Importing the mock products data
// Creating an instance of an Express application
const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
// In-memory storage for products, initialized with mock data
let productList = products_1.products;
// Endpoint to get the list of products

app.get("/products", (req: Request, res: Response) => {
    res.json(productList); // Respond with the list of products in JSON format
});
