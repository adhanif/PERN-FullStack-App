require("dotenv").config();
const express = require("express");
const booksRouter = require("./routes/books");

const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("it is working");
// });
app.use("/api/books", booksRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
