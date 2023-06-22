import { useEffect, useState } from "react";
import axios from "axios";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
  Image,
} from "react-bootstrap";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./assets/components/Home";
import Books from "./assets/components/Books";
import BookDetails from "./assets/components/BookDetails";
import Footer from "./assets/components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to={"/"}>
            Home
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/books"} className="tex-white">
              Books
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
