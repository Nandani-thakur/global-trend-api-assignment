# GLOBAL TREND – API Integration Internship Assignment

This project is a mini Node.js application built for the **API Integration Internship** assignment at **GLOBAL TREND**.  
The application fetches data from a **public REST API (JSONPlaceholder)** and provides clean, structured, and filtered output via API endpoints.

---

## 🚀 Features

- Fetches data from **two public API endpoints**:
  - `/posts`
  - `/users`
- Provides:
  - Listing with **filter options**
  - **Detailed view** for a single item
- Implements **file-based caching** to reduce repeated API calls
- Includes **error handling** for:
  - Network issues
  - Invalid responses
  - Missing fields
  - Unavailable endpoints
- Clean folder structure following best practices
- Express server with security (Helmet), logging (Morgan), and CORS support

---

## 📁 Project Structure

global-trend-api-assignment/
│── src/
│ │── app.js
│ │── services/
│ │ └── apiService.js
│ │── controllers/
│ │ ├── postController.js
│ │ └── userController.js
│ │── routes/
│ │ ├── postRoutes.js
│ │ └── userRoutes.js
│ │── data/
│ │ └── cache.json
│
│── package.json
└── README.md



---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **Axios** (for external API calls)
- **Helmet** (security)
- **Morgan** (logging)
- **CORS**
- **Nodemon** (dev runner)

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

git clone <your-repo-link>
cd global-trend-api-assignment
Install dependencies
npm install
Run in development mode
npm run dev
Run in production mode
npm start
Server will start at:

http://localhost:5000



API Endpoints
📝 1. Get All Posts
GET /api/posts

 Filter posts by userId
GET /api/posts?userId=1

 2. Get Single Post by ID
GET /api/posts/:id

User Endpoints
Get All Users
GET /api/users

Get Single User by ID
GET /api/users/:id

** Caching ******
Cached in: src/data/cache.json

Cache expires every 10 minutes


⚠ Error Handling

Covers:

Network failures

Timeout errors

External API not reachable

Invalid ID or missing resource

Example error response:

{ "error": "Failed to fetch posts" }



**screenshots/****

Added screenshots of:

/api/posts

/api/posts?userId=1

/api/posts/5

/api/users

/api/users/3



