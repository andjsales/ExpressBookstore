# Purpose

The purpose of this assignment was to practice implementing validation in a route for APIs.

# Prerequisites
```
psql -c "CREATE DATABASE books;"
psql -c "CREATE DATABASE books_test;"
psql books < data.sqld
psql books_test < data.sql

npm install
npm install jsonschema
npm install jest
npm install supertest
```

# Usage

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
