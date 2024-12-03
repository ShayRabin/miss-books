// BookEdit.js
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { bookService } from "../services/bookService";

function BookEdit() {
  const { bookId } = useParams();
  const history = useHistory();
  const [book, setBook] = useState({
    title: "",
    description: "",
    authors: [],
    listPrice: { amount: "", currencyCode: "" },
  });

  useEffect(() => {
    if (bookId) {
      bookService.getById(bookId).then(setBook);
    }
  }, [bookId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookId) {
      // עדכון ספר קיים
      bookService.updateBook(bookId, book).then(() => {
        history.push(`/book/${bookId}`);
      });
    } else {
      // יצירת ספר חדש
      bookService.createBook(book).then(() => {
        history.push("/book");
      });
    }
  };

  return (
    <div>
      <h1>{bookId ? "ערוך ספר" : "הוסף ספר חדש"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>כותרת</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>תיאור</label>
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>מחיר</label>
          <input
            type="number"
            name="listPrice.amount"
            value={book.listPrice.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>מטבע</label>
          <input
            type="text"
            name="listPrice.currencyCode"
            value={book.listPrice.currencyCode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{bookId ? "שמור שינויים" : "הוסף ספר"}</button>
      </form>
    </div>
  );
}

export default BookEdit;
