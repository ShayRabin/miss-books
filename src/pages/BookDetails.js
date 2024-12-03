// BookDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { bookService } from "../services/bookService";

function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    bookService.getById(bookId).then(setBook); // שליפת פרטי הספר במקרה של עריכה
  }, [bookId]);

  if (!book) return <p>טוען...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <img
        src={book.thumbnail}
        alt={book.title}
        style={{ width: "150px" }}
      />{" "}
      {/* הצגת התמונה */}
      <p>{book.description}</p>
      <p>
        מחיר: {book.listPrice.amount} {book.listPrice.currencyCode}
      </p>
      <p>מחבר: {book.authors.join(", ")}</p>
      <p>דירוג: {book.rating} כוכבים</p>
    </div>
  );
}

export default BookDetails;
