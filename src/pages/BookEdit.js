import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bookService } from "../services/bookService";

function BookEdit() {
  const [book, setBook] = useState({
    title: "",
    description: "",
    authors: "",
    listPrice: { amount: "", currencyCode: "" },
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bookService.createBook(book).then(() => {
      navigate("/book");
    });
  };

  return (
    <div>
      <h1>הוסף ספר חדש</h1>
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
        <button type="submit">הוסף ספר</button>
      </form>
    </div>
  );
}

export default BookEdit;
