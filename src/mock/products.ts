import crypto from "crypto";

// Este archivo contiene una matriz simulada de productos que sirve como datos iniciales para la API.
// Exporta los datos simulados que se utilizarán en el archivo principal del servidor.

export const products = [
    {
        id: crypto.randomUUID(),
        name: "Product A",
        price: 29.99,
        stock: 100,
        is_active: true,
        created_at: new Date("2023-01-01T10:00:00Z"),
        updated_at: new Date("2023-01-01T10:00:00Z"),
    },
    {
        id: crypto.randomUUID(),
        name: "Product B",
        price: 49.99,
        stock: 50,
        is_active: true,
        created_at: new Date("2023-01-02T10:00:00Z"),
        updated_at: new Date("2023-01-02T10:00:00Z"),
    },
    {
        id: crypto.randomUUID(),
        name: "Product C",
        price: 19.99,
        stock: 200,
        is_active: false,
        created_at: new Date("2023-01-03T10:00:00Z"),
        updated_at: new Date("2023-01-03T10:00:00Z"),
    },
];
