// BookDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { bookService } from "../services/bookService";

function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    bookService.getById(bookId).then(setBook);
  }, [bookId]);

  if (!book) return <p>טוען...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.thumbnail} alt={book.title} />
      <p>{book.description}</p>
      <p>
        מחיר: {book.listPrice.amount} {book.listPrice.currencyCode}
      </p>
      <p>מחבר: {book.authors.join(", ")}</p>
    </div>
  );
}

export default BookDetails;
