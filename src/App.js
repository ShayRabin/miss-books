import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import BookIndex from "./pages/BookIndex";
import BookDetails from "./pages/BookDetails";
import BookEdit from "./pages/BookEdit";
import NavBar from "./components/NavBar";
import "./App.css"; // ייבוא קובץ ה-CSS

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/book" element={<BookIndex />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/book/edit" element={<BookEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
