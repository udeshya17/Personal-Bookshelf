import React from "react";
import "./styles.css";
import ButtonAppBar from "./components/AppBar";
import BookShelf from "./components/BookShelf";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/bookshelf" element={<BookShelf />} />
          <Route path="/" element={<ButtonAppBar />} />
        </Routes>
        <div
          className="background"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1498878143/photo/book-stack-and-open-book-on-the-desk-in-modern-public-library.webp?b=1&s=170667a&w=0&k=20&c=T63zJBKuZLTUQwwAAwLzbMwtzAEdd4wZRaEV6EAdUnA=')`,
          }}
        />
      </div>
    </Router>
  );
}
