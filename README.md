<img width="1327" height="673" alt="image" src="https://github.com/user-attachments/assets/8a3e73c8-7299-4820-8ec7-b5db408ea17a" />




# Node Express Posts API 🚀

This project is a **RESTful CRUD API** developed with **Node.js**, **Express.js**, and **SQLite / Knex**.  
It provides full backend functionality for managing posts and comments.

The API allows users to:

- Get all posts
- Get a single post by ID
- Create new posts
- Update existing posts
- Delete posts
- Get comments for a specific post

This project was developed as part of a **backend development and API routing exercise** to strengthen Node.js and Express.js skills.


## 📌 Project Overview

This backend project demonstrates how to build a scalable REST API using Express Router architecture.

The application separates concerns into different layers:

- **server.js** → middleware and router configuration
- **posts-router.js** → all API endpoints
- **posts-model.js** → database operations
- **index.js** → server startup

This separation makes the project clean, modular, and easy to maintain. 

## ✨ Features

### GET All Posts
Returns all available posts from the database.

```http
GET /api/posts
