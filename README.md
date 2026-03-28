# Expense Manager

A simple web application to track daily expenses and manage personal spending.
This project was built to understand how CRUD operations work along with basic backend integration.

## Features

* Add new expenses with details
* View all saved expenses
* Delete expenses whenever needed
* Simple and easy-to-use interface
* Data stored and managed through backend

## Tech Stack

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js, Express
* Database: MongoDB

## Project Idea

The goal of this project was to build something practical that helps in tracking day-to-day spending.

Users can:

* Add expenses with amount and description
* See a list of all expenses
* Remove any expense they don’t want to keep

This is a basic expense tracker, but it gives a clear idea of how real-world apps store and manage user data.

## How It Works

The user enters expense details through the UI.
That data is sent to the backend and stored in the database.

Whenever the page loads:

* All saved expenses are fetched
* Displayed in a list format
* Users can delete any entry instantly

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

* How CRUD operations work in real applications
* Connecting frontend with backend
* Handling data using MongoDB
* Structuring a backend project properly

## Future Improvements

* Add authentication (login/signup)
* Categorize expenses
* Monthly/weekly reports
* Charts/analytics
* Better UI

---

This project was built while learning backend development and trying to understand how real applications handle data.
