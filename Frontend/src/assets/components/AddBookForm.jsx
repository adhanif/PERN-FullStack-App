import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./AddBookForm.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
export default function AddBookForm({ books, setBooks }) {
  const [bookTitle, setBookTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [bookDescript, setbookDescript] = useState("");
  const [bookCategory, setBookCategory] = useState("");
  const [bookUrl, setbookUrl] = useState("");
  const [bookDate, setbookDate] = useState("");
  const [bookisActive, setBookisActive] = useState("");
  const url = "http://localhost:3000/api/books/";
  // bookisActive = parseBoolean(bookisActive);
  const form = {
    title: bookTitle,
    author: authorName,
    description: bookDescript,
    category: bookCategory,
    cover_url: bookUrl,
    publishedat: bookDate,
    active: bookisActive,
  };
  function handleSubmit(event) {
    event.preventDefault();
    if (
      bookTitle != "" &&
      authorName != "" &&
      bookDescript != "" &&
      bookCategory != "" &&
      bookUrl != "" &&
      bookDate != "" &&
      bookisActive != ""
    ) {
      console.log(form);
      axios
        .post(url, form)
        .then((res) => {
          setBooks([...books, res.data]);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please Enter the Input Values");
    }
  }

  function handleBookTitle(e) {
    setBookTitle(e.target.value);
  }
  function handleAuthorName(e) {
    setAuthorName(e.target.value);
  }
  function handleBookDescript(e) {
    setbookDescript(e.target.value);
  }

  function handleBookCategory(e) {
    setBookCategory(e.target.value);
  }
  function handleBookUrl(e) {
    setbookUrl(e.target.value);
  }
  function handleBookDate(e) {
    setbookDate(e.target.value);
  }
  function handleBookisActive(e) {
    setBookisActive(e.target.value);
  }

  return (
    <Card className=" formCard">
      <Card.Title className="text-center mb-5 form-title">
        ADD a New Book
      </Card.Title>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUserId">
          <Form.Control
            type="text"
            value={bookTitle}
            onChange={handleBookTitle}
            placeholder="Add Book Title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUserTitle">
          <Form.Control
            type="text"
            value={authorName}
            onChange={handleAuthorName}
            placeholder="Add Author Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUserBody">
          <Form.Control
            type="text"
            value={bookDescript}
            onChange={handleBookDescript}
            placeholder="Add Book Description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUserBody">
          <Form.Control
            type="text"
            value={bookCategory}
            onChange={handleBookCategory}
            placeholder="Add Book Category"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUserBody">
          <Form.Control
            type="text"
            value={bookUrl}
            onChange={handleBookUrl}
            placeholder="Add Book image URL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUserBody">
          <Form.Control
            type="text"
            value={bookDate}
            onChange={handleBookDate}
            placeholder="Add publish Date of book"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUserBody">
          <Form.Control
            type="text"
            value={bookisActive}
            onChange={handleBookisActive}
            placeholder="is book active yes/no?"
          />
        </Form.Group>

        <Button type="submit" variant="dark">
          Submit
        </Button>
      </Form>
    </Card>
  );
}
