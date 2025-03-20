// Importing required modules from Express and other necessary libraries
import express, { Request, Response } from "express"; // Importing express and types for Request and Response
import { products } from "./mock/products"; // Importing the mock products data

// Creating an instance of an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Defining the Product interface to enforce the structure of product objects
interface Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    price: number; // Price of the product
    stock: number; // Available stock for the product
    is_active: boolean; // Status indicating if the product is active
    created_at: Date; // Timestamp for when the product was created
    updated_at: Date; // Timestamp for when the product was last updated
}

// In-memory storage for products, initialized with mock data
let productList: Product[] = products;

// Endpoint to get the list of products
app.get("/products", (req: Request, res: Response) => {
    res.json(productList); // Respond with the list of products in JSON format
});

// Endpoint to get a product by its ID
app.get("/products/:id", (req: Request, res: Response) => {
    const productId = req.params.id; // Extracting the product ID from the request parameters
    const product = productList.find((p) => p.id === productId); // Finding the product in the list
    if (product) {
        res.json(product); // Respond with the found product
    } else {
        res.status(404).json({ message: "Product not found" }); // Respond with 404 if not found
    }
});
