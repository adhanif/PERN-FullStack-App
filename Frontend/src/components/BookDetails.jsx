import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleClcik() {
    navigate("/books");
  }

  const [book, setBook] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/books/${id}`)
      .then((res) => {
        // console.log(res.data);
        setBook(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Container className="text-center">
        {book && (
          <div className="text-center mt-5 mb-5">
            <h2>"{book.title}"</h2>
            <p>Author: {book.author}</p>
            <p className="mb-5">
              Category: {book.category} | Published At: {book.publishedat}
            </p>
            <img
              src={book.cover_url}
              alt=""
              className="mb-5"
              style={{ width: "400px", height: "auto" }}
            />
            <p>{book.description}</p>
          </div>
        )}
        <Row>
          <Col>
            <Button
              type="submit"
              variant="dark"
              className="mb-5 "
              onClick={handleClcik}
            >
              Go back
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
