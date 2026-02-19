# Full-Stack Authentication System
Node.js, PostgreSQL, and React (TypeScript)

A secure authentication platform featuring a Node.js REST API and a React frontend.  
This project demonstrates user registration, login, and protected route handling using JSON Web Tokens (JWT).

---

## Overview

The system is organized into two primary service layers to maintain a clear separation of concerns between backend logic and frontend application state.

---

## Architecture

### Backend (Node.js & Express)

The backend layer handles authentication and data management responsibilities.

- Processes user registration and login
- Connects to PostgreSQL using connection pooling
- Issues and verifies JSON Web Tokens (JWT)
- Hashes passwords using Bcrypt
- Protects private endpoints via middleware

### Frontend (React & TypeScript)

The frontend layer manages authentication state and client-side routing.

- Global authentication state using React Context API (AuthProvider)
- Route protection through a ProtectedRoute wrapper
- API communication abstraction
- Responsive UI styled with Tailwind CSS

---

## Directory Structure

```text
.
├── backend/
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Authentication logic
│   │   ├── middleware/     # JWT verification middleware
│   │   ├── routes/         # API endpoint definitions
│   │   └── index.js        # Application entry point
│   └── .env                # Environment variables
│
└── frontend/
    ├── src/
    │   ├── components/     # Reusable UI components
    │   ├── context/        # Authentication context logic
    │   ├── layouts/        # Route wrappers and guards
    │   ├── pages/          # Application views
    │   ├── App.tsx         # Routing configuration
    │   └── main.tsx        # React entry point
    └── .env                # Environment variables
```

---

## Technology Stack

| Layer      | Technology                 |
|------------|---------------------------|
| Runtime    | Node.js                   |
| Backend    | Express.js                |
| Frontend   | React 18                  |
| Language   | JavaScript / TypeScript   |
| Database   | PostgreSQL                |
| Styling    | Tailwind CSS              |
| Security   | JWT, Bcrypt               |

---

## Installation and Setup

### Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_secret_key
```

Start the server:

```bash
node src/index.js
```

---

### Frontend

```bash
cd frontend
npm install
```

Create a `.env` file:

```
VITE_API_URL=http://localhost:5000
```

Start the application:

```bash
npm run dev
```

---

## Security Features

- Password hashing using Bcrypt
- Stateless authentication using JWT
- Middleware-based API protection
- Client-side protected routes
- Environment variable configuration

