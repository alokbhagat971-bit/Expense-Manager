# Expense Manager

A web application to track daily expenses with user authentication.
Each user can securely manage their own expenses after logging in.

## Features

* User signup and login system
* Authentication-based access
* Add new expenses
* View all saved expenses
* Delete expenses anytime
* Each user can access only their own data

## Tech Stack

* Frontend: React.js
* Backend: Node.js, Express
* Database: MongoDB
* Authentication: JWT / Session (based on implementation)

## Project Idea

The main goal of this project was to build a practical application while learning how authentication and user-specific data handling work.

After logging in, users can:

* Add their expenses
* View all their saved expenses
* Delete any expense

All data is linked to the logged-in user, ensuring privacy and proper data separation.

## How It Works

* A user signs up or logs in
* After authentication, they are redirected to their dashboard
* Expenses are stored in the database and mapped to that user
* Only that user's expenses are fetched and displayed

## Installation & Setup

1. Clone the repository

   ```bash
   git clone https://github.com/alokbhagat971-bit/Expense-Manager.git
   ```

2. Navigate to the project folder

   ```bash
   cd Expense-Manager
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Run the server

   ```bash
   npm start
   ```

5. Open in browser

   ```
   http://localhost:3000
   ```

## Folder Structure

```
Expense-Manager/
│
├── models
├── routes
├── controllers
├── public
├── views
└── server.js
```

## What I Learned

* Implementing authentication in a web app
* Managing user-specific data securely
* CRUD operations with backend and database
* Structuring a full-stack project

## Future Improvements

* Categorize expenses
* Add filters (date-wise, category-wise)
* Monthly reports / summaries
* Charts and analytics
* Improve UI/UX

---

This project was built while learning backend development and understanding how real-world applications handle user data and authentication.
