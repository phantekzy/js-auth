# Full-Stack Authentication System

A secure authentication platform featuring a Node.js REST API and a React (TypeScript) frontend. This project demonstrates user registration, login, and route protection using JSON Web Tokens (JWT).



## Project Architecture

The system is split into two independent parts:
1. Backend: An Express.js server that handles data persistence, password hashing, and token signing.
2. Frontend: A React application that manages global auth state and client-side navigation.



## Core Features

- JWT-Based Auth: Stateless sessions where the server verifies identity via signed tokens.
- Password Hashing: Secure user credentials using industry-standard hashing algorithms.
- Global Auth State: Uses the React Context API to provide user data across the application.
- Protected Routing: A dedicated wrapper component ensures only authenticated users can access private views.
- Responsive UI: Built with Tailwind CSS for a modern look and feel.

## Directory Structure

.
├── backend/                # Server-side API
│   ├── src/
│   │   ├── config/         # Database connection setup
│   │   ├── controllers/    # Authentication logic
│   │   ├── middleware/     # Token verification guard
│   │   ├── routes/         # Endpoint definitions
│   │   └── index.js        # Entry point
│   └── .env                # Configuration variables
│
└── frontend/               # Client-side application
    ├── src/
    │   ├── components/     # Reusable UI elements
    │   ├── context/        # Global auth state logic
    │   ├── layouts/        # Page wrappers and guards
    │   ├── pages/          # Application views
    │   ├── App.tsx         # Routing configuration
    │   └── main.tsx        # Mounting point
    └── .env                # Environment variables

## Technical Stack

- Frontend: React, TypeScript, Tailwind CSS, React Router, Axios
- Backend: Node.js, Express.js, PostgreSQL client
- Database: PostgreSQL
- Security: Password hashing, JWT

## Setup Instructions

### Backend Setup
1. Navigate to directory: cd backend
2. Install dependencies: npm install
3. Configure your environment variables in the .env file.
4. Start server: node src/index.js

### Frontend Setup
1. Navigate to directory: cd frontend
2. Install dependencies: npm install
3. Configure your API base URL in the .env file.
4. Start dev server: npm run dev
