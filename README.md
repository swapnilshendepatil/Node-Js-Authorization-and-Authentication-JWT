# JWT Authentication API using Express.js

A simple authentication system built with **Node.js**, **Express.js**, and **JSON Web Tokens (JWT)**.

## Features

- User Signup
- User Signin
- JWT Token Generation
- Protected Route Authentication
- JSON Request Handling

---

## Tech Stack

- Node.js
- Express.js
- JSON Web Token (JWT)

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/jwt-auth-api.git
cd jwt-auth-api
```

### Install Dependencies

```bash
npm install
```

### Required Packages

```bash
npm install express jsonwebtoken
```

---

## Run Application

```bash
node index.js
```

Server will start on:

```bash
http://localhost:3000
```

---

## API Endpoints

### 1. Signup User

**POST** `/signup`

#### Request Body

```json
{
  "userName": "swapnil",
  "password": "123456"
}
```

#### Response

```json
{
  "message": "User signup successfully..!"
}
```

---

### 2. Signin User

**POST** `/signin`

#### Request Body

```json
{
  "userName": "swapnil",
  "password": "123456"
}
```

#### Success Response

```json
{
  "messgae": "User Signin successfully..",
  "token": "jwt_token_here"
}
```

#### Failed Response

```json
{
  "message": "Invalid Username and password"
}
```

Status Code:

```bash
403 Forbidden
```

---

### 3. Get Authenticated User

**GET** `/me`

#### Headers

```http
token: <jwt_token>
```

#### Success Response

```json
{
  "message": "User Authentication Successfully"
}
```

#### Failed Response

```json
{
  "message": "Unauthorized to access"
}
```

Status Code:

```bash
403 Forbidden
```

---

## JWT Flow

1. User signs up using `/signup`
2. User signs in using `/signin`
3. Server validates credentials
4. JWT token is generated using secret key
5. Client stores token
6. Client sends token in request headers
7. `/me` route verifies token and grants access

---

## Project Structure

```bash
project/
│
├── index.js
├── package.json
└── README.md
```

---

## Example Using Postman

### Signup

```http
POST http://localhost:3000/signup
```

Body:

```json
{
  "userName": "swapnil",
  "password": "123456"
}
```

---

### Signin

```http
POST http://localhost:3000/signin
```

Body:

```json
{
  "userName": "swapnil",
  "password": "123456"
}
```

Copy the token from the response.

---

### Access Protected Route

```http
GET http://localhost:3000/me
```

Headers:

```http
token: your_jwt_token
```

---

## Security Note

This project is created for learning purposes.

Current limitations:

- Passwords are stored in plain text.
- No database integration.
- No password hashing.
- JWT secret is hardcoded.

For production applications:

- Use bcrypt for password hashing.
- Store users in a database.
- Use environment variables for secrets.
- Add token expiration.
- Implement proper error handling.

---

## Author

**Swapnil Shende**

Learning Backend Development with:
- Node.js
- Express.js
- JWT Authentication
- REST APIs
