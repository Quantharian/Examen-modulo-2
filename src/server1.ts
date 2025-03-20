// Importing required modules from Express and other necessary libraries
import express, { Request, Response } from "express"; // Importing express and types for Request and Response
import { products } from "./mock/products.js"; // Importing the mock products data

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

// Endpoint to create a new product
app.post("/products", (req: Request, res: Response) => {
    const newProduct: Product = {
        id: crypto.randomUUID(), // Generating a unique ID using UUID
        // Creating a new product object from the request body
        // Generating a unique ID using UUID
        name: req.body.name, // Setting the name from the request body
        price: req.body.price, // Setting the price from the request body
        stock: req.body.stock, // Setting the stock from the request body
        is_active: req.body.is_active, // Setting the active status from the request body
        created_at: new Date(), // Setting the creation timestamp
        updated_at: new Date(), // Setting the update timestamp
    };
    productList.push(newProduct); // Adding the new product to the in-memory list
    res.status(201).json(newProduct); // Responding with the created product and a 201 status
});

// Endpoint to update a product by its ID
app.patch("/products/:id", (req: Request, res: Response) => {
    const productId = req.params.id; // Extracting the product ID from the request parameters
    const productIndex = productList.findIndex((p) => p.id === productId); // Finding the index of the product
    if (productIndex !== -1) {
        const updatedProduct = {
            // Creating an updated product object
            ...productList[productIndex], // Keeping existing product data
            ...req.body, // Overriding with new data from the request body
            updated_at: new Date(), // Updating the timestamp
        };
        productList[productIndex] = updatedProduct; // Updating the product in the list
        res.json(updatedProduct); // Responding with the updated product
    } else {
        res.status(404).json({ message: "Product not found" }); // Responding with 404 if not found
    }
});
// Endpoint to delete a product by its ID
app.delete("/products/:id", (req: Request, res: Response) => {
    const productId = req.params.id; // Extracting the product ID from the request parameters
    const productIndex = productList.findIndex((p) => p.id === productId); // Finding the index of the product
    if (productIndex !== -1) {
        productList.splice(productIndex, 1); // Removing the product from the list
        res.status(204).send(); // Responding with a 204 status indicating successful deletion
    } else {
        res.status(404).json({ message: "Product not found" }); // Responding with 404 if not found
    }
});

// Starting the server on port 3000
const PORT = 3006; // Defining the port number
app.listen(PORT, () => {
    // Starting the server
    console.log(`Server is running on http://localhost:${PORT}`); // Logging the server URL
});
