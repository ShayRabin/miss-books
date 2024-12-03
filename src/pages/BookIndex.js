// BookIndex.js
import React, { useState, useEffect } from "react";
import { bookService } from "../services/bookService";
import { Link } from "react-router-dom";
import BookFilter from "../components/BookFilter"; // ייבוא רכיב הסינון

function BookIndex() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    bookService.query().then((booksData) => {
      setBooks(booksData);
      setFilteredBooks(booksData);
      setCategories([...new Set(booksData.map((book) => book.category))]); // רשימת הקטגוריות
    });
  }, []);

  const filterBooks = (category) => {
    const filtered = category
      ? books.filter((book) => book.category === category)
      : books;
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <h1>רשימת הספרים</h1>
      <BookFilter filterBooks={filterBooks} categories={categories} />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <img
              src={book.thumbnail}
              alt={book.title}
              style={{ width: "100px", height: "auto" }}
            />{" "}
            {/* הצגת התמונה */}
            <h2>{book.title}</h2>
            <Link to={`/book/${book.id}`}>מידע נוסף</Link>
          </li>
        ))}
      </ul>
      <Link to="/book/edit">הוסף ספר חדש</Link>
    </div>
  );
}

export default BookIndex;
