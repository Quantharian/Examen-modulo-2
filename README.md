# Prototipo API REST

Este proyecto es un prototipo de una API REST que permite realizar operaciones CRUD sobre una entidad llamada **Product**. La API está implementada utilizando **TypeScript**, **Node.js** y el framework **Express.js**. Los datos de los productos se almacenan en memoria, utilizando un mock de productos para inicializar la API.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
prototipo
├── src
│   ├── server1.ts          # Implementación principal de la API REST
│   └── mock
│       └── products.ts     # Datos mock de productos
├── package.json             # Configuración de npm y dependencias
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Documentación del proyecto
```

## Instalación

Para instalar las dependencias del proyecto, asegúrate de tener **Node.js** y **npm** instalados en tu máquina. Luego, ejecuta el siguiente comando en la raíz del proyecto:

```
npm install
```

Esto instalará todas las dependencias necesarias, incluyendo **Express** y **TypeScript**.

## Ejecución

Para ejecutar la API, utiliza el siguiente comando:

```
npm start
```

Esto iniciará el servidor en el puerto especificado (por defecto, el puerto 3000).

## Endpoints de la API

La API expone los siguientes endpoints para interactuar con la entidad **Product**:

- **GET /products**: Devuelve la lista de productos.
- **GET /products/:id**: Devuelve un producto específico por su ID.
- **POST /products**: Crea un nuevo producto.
- **PATCH /products/:id**: Actualiza un producto existente por su ID.
- **DELETE /products/:id**: Elimina un producto por su ID.

## Ejemplos de Uso

### Obtener todos los productos

```http
GET /products
```

### Obtener un producto por ID

```http
GET /products/1
```

### Crear un nuevo producto

```http
POST /products
Content-Type: application/json

{
  "name": "Nuevo Producto",
  "price": 100,
  "stock": 50,
  "is_active": true
}
```

### Actualizar un producto

```http
PATCH /products/1
Content-Type: application/json

{
  "price": 120
}
```

### Eliminar un producto

```http
DELETE /products/1
```

## Pruebas

Se recomienda utilizar **Postman** para probar los endpoints de la API. Puedes importar la colección de Postman que se encuentra en el archivo `postman.json` en la carpeta `prototipo`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, siéntete libre de hacer un fork y enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.