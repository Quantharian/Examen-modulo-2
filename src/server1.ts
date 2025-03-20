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
