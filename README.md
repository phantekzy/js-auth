# Auth-API: Node.js, PostgreSQL and JWT

A secure authentication system built with Express.js and PostgreSQL. This project features password hashing, session management via JSON Web Tokens (JWT), and a middleware-protected routing system.

## Technical Stack
- Runtime: Node.js (v18+)
- Database: PostgreSQL (v14+)
- Security: Bcrypt (Hashing), JWT (Authentication)
- Architecture: MVC (Model-View-Controller)

## Key Features
- Secure Registration: Email uniqueness validation and Bcrypt hashing (10 rounds).
- JWT Authentication: Stateless session management with signed tokens.
- Route Protection: Custom middleware (verifyToken) to secure private endpoints.
- Resource Management: PostgreSQL connection pooling.

## Directory Structure
.
├── src
│   ├── config          # PostgreSQL pool setup
│   ├── controllers     # Registration and Login logic
│   ├── middleware      # JWT verification guard
│   ├── routes          # Endpoint definitions
│   └── index.js        # Server entry point
├── .env                # Secrets (PORT, DATABASE_URL, JWT_SECRET)
└── package.json        # Dependencies

## API Endpoints
- POST /api/auth/register : Create a new user account (No Auth)
- POST /api/auth/login    : Authenticate and receive JWT (No Auth)
- GET  /api/auth/profile  : View current user profile (Requires Bearer Token)

## Database Schema
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

## Installation and Setup

1. Install Dependencies:
   npm install

2. Environment Variables:
   Create a .env file:
   PORT=6969
   DATABASE_URL=postgresql://user:password@localhost:5432/auth_db
   JWT_SECRET=your_secret_string

3. Run the Server:
   node src/index.js

## Testing
1. Register: POST to /api/auth/register with JSON body.
2. Login: POST to /api/auth/login and copy the token.
3. Profile: GET to /api/auth/profile using the Bearer Token in the Authorization header.
