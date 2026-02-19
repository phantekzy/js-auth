# Auth-API: Node.js, PostgreSQL and JWT

A secure authentication system built with Express.js and PostgreSQL. This project features password hashing, session management via JSON Web Tokens (JWT), and a middleware-protected routing system.

## Technical Stack
- **Runtime:** Node.js (v18+)
- **Database:** PostgreSQL (v14+)
- **Security:** Bcrypt (Hashing), JWT (Authentication)
- **Architecture:** MVC (Model-View-Controller)

## Key Features
- **Secure Registration:** Email uniqueness validation and Bcrypt hashing (10 rounds).
- **JWT Authentication:** Stateless session management with signed tokens.
- **Route Protection:** Custom middleware (verifyToken) to secure private endpoints.
- **Resource Management:** PostgreSQL connection pooling.

## Directory Structure
```text
.
├── src
│   ├── config          # PostgreSQL pool setup
│   ├── controllers     # Registration and Login logic
│   ├── middleware      # JWT verification guard
│   ├── routes          # Endpoint definitions
│   └── index.js        # Server entry point
├── .env                # Secrets (PORT, DATABASE_URL, JWT_SECRET)
└── package.json        # Dependencies
