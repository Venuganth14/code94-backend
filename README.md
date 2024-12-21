Vendor Product Management Backend

-This project is built using Node.js, Express.js, and MongoDB to provide a robust backend for managing vendor products, images, and search functionalities.

Features:

Product Management:

-Add, edit, delete, and retrieve products.
-Support for managing product details such as SKU, quantity, name, description, and images.

Image Upload:

-Upload multiple images for a single product using multer.
-Limit of 10 images per product.
-Option to set a main image as the thumbnail.

Search Functionality:

-API to fetch search results based on query input.
-Optimized database queries for faster results.

Favorites Management:

-Save favorite products as an array of IDs in the database.
-Supports one-to-many relational schema for vendor-specific favorites.

Tech Stack:

-Node.js: Runtime environment for building the backend.
-Express.js: Framework for handling routes and middleware.
-MongoDB Atlas: Cloud-based database for storing product data.
-Multer: Middleware for handling file uploads.

Setup Instructions:

1. Clone the repository:
           git clone <repository-url>
2. Navigate to the backend directory:
           cd backend
3. Install dependencies:
        npm install
4. Create a .env file in the root directory with the following variables:
          PORT=5000
       MONGO_URI=<your-mongodb-atlas-connection-string>
        JWT_SECRET=<your-jwt-secret>
5. Start the server:
         npm start

6. The server will run on http://localhost:5000.

