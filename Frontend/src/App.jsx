import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./assets/components/Home";
import Books from "./assets/components/Books";
import BookDetails from "./assets/components/BookDetails";
import Footer from "./assets/components/Footer";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <nav className="text-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>

      {/* {books.map((book) => {
        return (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <img src={book.cover_url} alt="" />
            <p>{book.description}</p>
          </div>
        );
      })} */}

      <Footer />
    </>
  );
}

export default App;
