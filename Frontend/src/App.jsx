import { useEffect, useState } from "react";
import axios from "axios";
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
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <img src={book.cover_url} alt="" />
            <p>{book.description}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
