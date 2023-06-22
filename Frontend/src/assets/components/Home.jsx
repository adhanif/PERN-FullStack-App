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
          className="text-center  mb-5"
          style={{ fontSize: "5rem", marginTop: "5rem" }}
        >
          Welcome to my Book Library
        </h1>
        <Row className="justify-content-center">
          {/* <Col className="col-lg-6 mt-5" md="auto"> */}
          <AddBookForm books={books} setBooks={setBooks} />
          {/* </Col> */}
        </Row>
      </Container>
    </>
  );
}
