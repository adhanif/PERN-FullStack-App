const express = require("express");
const booksRouter = express.Router();
const {
  getBooks,
  newBook,
  deleteBook,
  getBookbyID,
} = require("../controllers/books_controller");

booksRouter.get("/", getBooks);
booksRouter.post("/", newBook);
booksRouter.delete("/:id", deleteBook);
booksRouter.get("/:id", getBookbyID);
module.exports = booksRouter;
