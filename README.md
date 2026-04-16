🛍️ TrendHive — Full-Stack MERN E-Commerce Platform

TrendHive is a production-ready full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It demonstrates real-world full-stack development including authentication, API design, and cloud deployment.

🌐 Live Demo & Repository

GitHub Repository
https://github.com/coder0606-op/TrendHive.git

Frontend (User Website)
https://trend-hive-gray.vercel.app/

Backend API
https://trendhive-ortz.onrender.com/

✨ Key Features

Full-stack MERN architecture
Clean and scalable project structure
JWT-based authentication
RESTful API design
MongoDB Atlas cloud database
Responsive UI for mobile and desktop
Production deployment using Vercel and Render

🛒 User Features

User registration and login
Browse products
Add and remove items from cart
Dynamic cart updates
Checkout flow
Persistent data storage

⚙️ Backend Features

REST API built with Express.js
Secure JWT authentication and authorization
MongoDB schema modeling
Environment-based configuration
CORS-enabled API

🧱 Tech Stack

Frontend: React.js, Vite, HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB Atlas
Authentication: JWT
Deployment: Vercel (Frontend), Render (Backend)

📂 Project Structure

TrendHive/
│
├── frontend → User-facing React application
├── backend → Express API
├── .gitignore
└── README.md

⚡ Local Setup Guide

Clone Repository

git clone https://github.com/coder0606-op/TrendHive.git

cd TrendHive

Install Dependencies

cd backend && npm install
cd ../frontend && npm install

Environment Variables

backend/.env

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key

frontend/.env

VITE_BACKEND_URL=http://localhost:5000

Run the Application

Backend

cd backend
npm run server

Frontend

cd ../frontend
npm run dev

💼 About This Project

TrendHive demonstrates the ability to build a complete full-stack application, design scalable backend systems, integrate frontend with APIs, and deploy real-world applications using modern tools.

👨‍💻 Developer

Ayush (coder0606-op)
Full-Stack MERN Developer