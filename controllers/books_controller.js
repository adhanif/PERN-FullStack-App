const pool = require("../db");

// const getBooks = async (req, res) => {
//   const { limit, skip } = req.query;
//   const { search } = req.query;

//   if (limit || skip) {
//     try {
//       const { rows } = await pool.query(
//         "select * from books LIMIT $1 OFFSET $2;",
//         [limit, skip || 0]
//       );
//       // console.log(rows);
//       res.json(rows);
//     } catch (error) {
//       console.log(error.message);
//       res.status(500).send("Something is wrong");
//     }
//   } else if (search) {
//     console.log(typeof search);
//     try {
//       const { rows } = await pool.query(
//         "select * from books where category ILIKE '%' || $1 || '%';",
//         [search]
//       );
//       res.json(rows);
//     } catch (error) {
//       console.log(error.message);
//       res.status(500).send("Something is wrong");
//     }
//   }
// };

const getBooks = async (req, res) => {
  try {
    const { rows } = await pool.query("select * from books;");
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Something is wrong");
  }
};

//creating new Book
const newBook = async (req, res) => {
  try {
    const {
      title,
      author,
      description,
      category,
      cover_url,
      publishedat,
      active,
    } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO books (title, author, description, category, cover_url, publishedat, active) values($1, $2, $3, $4, $5, $6, $7) RETURNING *;",
      [title, author, description, category, cover_url, publishedat, active]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Something is wrong");
  }
};

//delete a book

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("delete from books where id=$1 ;", [id]);
    res.json(rows[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Something is wrong");
  }
};

//get a book by id

const getBookbyID = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("select * from books where id=$1;", [id]);
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Something is wrong");
  }
};

// search the books by quer parameter

const searchBookCat = async (req, res) => {
  const { search } = req.query;
  try {
    const { rows } = await pool.query(
      "select * from books where category ILIKE '%' || $1 || '%';",
      [search]
    );
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Something is wrong");
  }
};

module.exports = {
  getBooks,
  newBook,
  deleteBook,
  getBookbyID,
  searchBookCat,
};
