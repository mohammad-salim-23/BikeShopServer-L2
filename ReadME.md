Bike Shop Server

This is the backend server for the Bike Shop project, providing APIs for managing bikes and handling customer orders.

Features 🚀

Bike Management: Add, update, delete, and view bikes.

Order Management: Customers can place, track, and manage orders.

User Authentication: Secure login and registration system.

CORS Enabled: Allows frontend communication.

Global Error Handling: Handles errors efficiently.

Tech Stack 🛠

Node.js & Express.js - Backend framework

MongoDB & Mongoose - Database

JWT - Authentication

CORS - Cross-origin resource sharing

Installation & Setup ⚙️

1️⃣ Clone the Repository

git clone https://github.com/mohammad-salim-23/BikeShopServer-L2
cd bike-shop-server

2️⃣ Install Dependencies

npm install

3️⃣ Set Up Environment Variables

Create a .env file and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173

4️⃣ Start the Server

npm run dev

Server will run on http://localhost:5000 🚴‍♂️

API Endpoints 🔥

🚲 Bike Management

GET /api/bikes - Get all bikes

POST /api/bikes - Add a new bike

PUT /api/bikes/:id - Update a bike

DELETE /api/bikes/:id - Delete a bike

🛒 Order Management

GET /api/orders - Get all orders

POST /api/orders - Place a new order

PUT /api/orders/:id - Update order status

DELETE /api/orders/:id - Cancel an order

Deployment 🌍

This server is deployed on Vercel.
To redeploy:

vercel --prod

Contributors ✨

Mohammad Salim - Full Stack Developer