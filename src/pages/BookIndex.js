import React, { useState, useEffect } from "react";
import { bookService } from "../services/bookService";
import { Link } from "react-router-dom";
import BookFilter from "../components/BookFilter"; // ייבוא רכיב הסינון

function BookIndex() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    bookService.query().then((booksData) => {
      setBooks(booksData);
      setFilteredBooks(booksData); // הצגת כל הספרים בהתחלה
    });
  }, []);

  const filterBooks = (searchTerm) => {
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.authors.some((author) =>
          author.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        book.listPrice.amount.toString().includes(searchTerm)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <h1>רשימת הספרים</h1>
      <BookFilter filterBooks={filterBooks} />
      <ul>
        {filteredBooks.map((book) => (
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
