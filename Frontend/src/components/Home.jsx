import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import AddBookForm from "./AddBookForm";
export default function Home() {
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
      <Container>
        <h1
          className=" text-center"
          style={{ fontSize: "5rem", marginTop: "4rem", marginBottom: "4rem" }}
        >
          <i className="fas fa-book-open text-primary"></i>MY
          <span className="text-primary">Book</span>APP
        </h1>
        <Row className="justify-content-center">
          <AddBookForm books={books} setBooks={setBooks} />
        </Row>
      </Container>
    </>
  );
}
