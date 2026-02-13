# Auth-API: Node.js and PostgreSQL Backend

A secure authentication system utilizing Express.js and PostgreSQL. The project implements password security using the Bcrypt hashing algorithm and follows an MVC (Model-View-Controller) architectural pattern.

## System Requirements
- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- Fedora Linux (or any modern Linux distribution)



## Technical Features
- User registration with unique email constraint validation.
- Password salting and hashing using Bcrypt (10 salt rounds).
- Modular routing for clean code separation.
- PostgreSQL connection pooling for efficient resource management.
- Environment variable configuration for sensitive data.

## Directory Structure
```text
.
├── src
│   ├── config        # Database configuration (node-postgres)
│   ├── controllers   # Authentication logic (register/login)
│   ├── routes        # Express routing definitions
│   └── index.js      # Application entry point
├── .env              # Environment variables
└── package.json      # Dependencies and scripts
