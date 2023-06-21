const express = require("express");
const booksRouter = express.Router();
const {
  getBooks,
  newBook,
  deleteBook,
} = require("../controllers/books_controller");

booksRouter.get("/", getBooks);
booksRouter.post("/", newBook);
booksRouter.delete("/:id", deleteBook);
module.exports = booksRouter;
