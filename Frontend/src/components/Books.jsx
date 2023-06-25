import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
export default function Books() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [inputSearch, setInputSearch] = useState();
  const navigateHome = useNavigate();

  function handleClcik() {
    navigateHome("/");
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/books")
      .then((res) => {
        // console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [books]);

  function deleteMode(e, id) {
    e.preventDefault();
    axios
      .delete(`http://localhost:3000/api/books/${id}`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getCategory(searchQuery) {
    // console.log(typeof (url + `${searchQuery}`));
    axios
      .get("http://localhost:3000/api/books/category?search=" + searchQuery)
      .then((response) => {
        // console.log(response.data.hits);
        setBooks(response.data);
      })
      .catch((err) => console.log(err));
  }

  function handleUserSearch(e) {
    setInputSearch(e.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(inputSearch);
    getCategory(inputSearch);
  }

  //   to={`/books/${book.id}`}
  return (
    <>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Form
            className="d-flex align-items-center mt-5"
            onSubmit={handleSubmit}
            style={{ width: "30rem" }}
          >
            <Form.Control
              type="search"
              placeholder="Search the category"
              className="me-3"
              aria-label="Search"
              onChange={handleUserSearch}
              style={{ height: "2rem" }}
            />
            <Button
              variant="dark"
              style={{ height: "2rem" }}
              className="d-flex align-items-center"
              type="submit"
            >
              Search
            </Button>
          </Form>
        </Row>
        <Row>
          <h1 className="text-center mt-5">Total Books</h1>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-lg-8 mt-5 mb-5">
            <ol className="list-group ">
              {books &&
                books.map((book, index) => {
                  return (
                    <li
                      className="list-group-item list-group-item-dark d-flex flex-column"
                      key={book.id}
                    >
                      <div className="d-flex align-items-center">
                        {/* <div className="me-2">{index + 1}</div> */}
                        <div className="m-1">
                          <h6>
                            {index + 1} - {book.title}
                          </h6>
                        </div>
                      </div>
                      <Row className="m-2 g-1">
                        <Col md="auto" className="mb-2">
                          <Button
                            className="w-100 mb-2 mb-lg-0"
                            variant="dark"
                            onClick={() => {
                              navigate(`/books/${book.id}`);
                            }}
                          >
                            View more
                          </Button>
                        </Col>
                        <Col md="auto" className="mb-2">
                          <Button
                            className=" w-100"
                            variant="danger"
                            onClick={(e) => {
                              deleteMode(e, book.id);
                            }}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    </li>
                  );
                })}
            </ol>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Button
              type="submit"
              variant="info"
              className="mb-5 text-center"
              onClick={handleClcik}
            >
              Go back to HOME
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
