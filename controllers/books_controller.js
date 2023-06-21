const pool = require("../db");
const getBooks = async (req, res) => {
  try {
    const { rows } = await pool.query("select * from books;");
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Something is wrong");
  }
};

module.exports = { getBooks };
