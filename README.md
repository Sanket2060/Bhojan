# 🍲 Bhojan App

Bhojan App is a web application built with the MERN stack (MongoDB, Express.js, React, Node.js) that helps reduce food wastage by connecting people who have surplus food with those who need it.

## Features
-  User Authentication – Register/login to share or receive food  
-  Food Sharing – Post available food details with location and expiration time  
-  Search & Filter – Find nearby food donations easily  
-  Location Support – Map/location-based listing of food providers  
-  Dashboard – Manage shared food items and track contributions  
-  Notifications – Get updates when new food is shared nearby  

## Tech Stack
- Frontend: React, Tailwind CSS  
- Backend: Node.js, Express.js  
- Database: MongoDB (Mongoose ODM)  
- Authentication: JWT / OAuth (Clerk/NextAuth or similar, depending on setup)  
- Deployment: Vercel (frontend), Render/Heroku (backend), MongoDB Atlas (database)  

## 📂 Project Structure
Bhojan-App/
├── client/               # React frontend
│   ├── public/           # Static files
│   └── src/              # Components, pages, hooks
├── server/               # Express backend
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   └── server.js         # App entry point
└── README.md

Link to the backend repo:
https://github.com/Sanket2060/Bhojanbd
