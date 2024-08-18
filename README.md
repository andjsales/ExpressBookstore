## Overview

- This is a Node.js web application, allowing users to manage a collection of books!
- This app uses Express.js for server management and PostgreSQL for data persistence.
- The purpose of this was to practice implementing validation in a route for APIs.

## Features

- List All Books: Retrieve a list of books from the database.
- View Book Details: Access detailed information for each book by its ID.
- Add New Book: Add a new book to the bookstore.
- Update Book Information: Modify details of an existing book.
- Delete Book: Remove a book record from the bookstore.

## Setup

Make sure to have these installed:

- Node.js
- npm
- PostgreSQL

`npm install`

## Configuration

Modify the config.js file to set up your database connection strings for development and testing environments.

## Usage

`npm start`

## Testing

`npm test`

## Routes

**GET /books :**

- Responds with a list of all the books

**POST /books :**

- Creates a book and responds with the newly created book

**GET /books/[isbn] :**

- Responds with a single book found by its **_isbn_**

**PUT /books/[isbn] :**

- Updates a book and responds with the updated book

**DELETE /books/[isbn] :**

- Deletes a book and responds with a message of “Book deleted”
