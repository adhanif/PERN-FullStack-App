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
      // bookTitle != "" ||
      // authorName != "" ||
      // bookDescript != "" ||
      // bookCategory != "" ||
      // bookUrl != "" ||
      // bookDate != "" ||
      // bookisActive != ""
      !bookTitle ||
      !authorName ||
      !bookDescript ||
      !bookCategory ||
      !bookUrl ||
      !bookDate ||
      bookisActive === ""
    ) {
      alert("Please fill all the Input fields");
    } else {
      // console.log(form);
      axios
        .post(url, form)
        .then((res) => {
          setBooks([...books, res.data]);
          setBookTitle("");
          setAuthorName("");
          setbookDescript("");
          setBookCategory("");
          setbookUrl("");
          setbookDate("");
          setBookisActive("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <Card className="formCard text-center mt-5">
      <Card.Title className="text-center mb-5 form-title">
        <h2>ADD a New Book</h2>
      </Card.Title>
      <Form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-9 ">
            <Form.Group className="mb-3" controlId="formUserId">
              <Form.Control
                type="text"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                placeholder="Add Book Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUserTitle">
              <Form.Control
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Add Author Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUserBody">
              <Form.Control
                type="text"
                value={bookDescript}
                onChange={(e) => setbookDescript(e.target.value)}
                placeholder="Add Book Description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formUserBody">
              <Form.Control
                type="text"
                value={bookCategory}
                onChange={(e) => setBookCategory(e.target.value)}
                placeholder="Add Book Category"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUserBody">
              <Form.Control
                type="text"
                value={bookUrl}
                onChange={(e) => setbookUrl(e.target.value)}
                placeholder="Add Book image URL"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formUserBody">
              <Form.Control
                type="text"
                value={bookDate}
                onChange={(e) => setbookDate(e.target.value)}
                placeholder="Add publish Date of book"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUserBody">
              <Form.Control
                type="text"
                value={bookisActive}
                onChange={(e) => setBookisActive(e.target.value)}
                placeholder="Is book active? please write yes/no?"
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-5 w-100">
              Add Book
            </Button>
          </div>
        </div>
      </Form>
    </Card>
  );
}
