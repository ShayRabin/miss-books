// BookIndex.js
import React, { useState, useEffect } from "react";
import { bookService } from "../services/bookService";
import { Link } from "react-router-dom";

function BookIndex() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookService.query().then(setBooks);
  }, []);

  return (
    <div>
      <h1>רשימת הספרים</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
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
