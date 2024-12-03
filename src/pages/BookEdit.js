// BookEdit.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bookService } from "../services/bookService";

function BookEdit() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    description: "",
    authors: "",
    listPrice: { amount: "", currencyCode: "" },
    rating: 0,
    category: "",
    thumbnail: "", // הוספנו שדה לתמונה
  });

  useEffect(() => {
    if (bookId) {
      bookService.getById(bookId).then(setBook); // שליפת פרטי הספר במקרה של עריכה
    }
  }, [bookId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // טיפול בשדה "מחיר" ו"מטבע"
    if (name === "listPrice.amount") {
      setBook((prevBook) => ({
        ...prevBook,
        listPrice: { ...prevBook.listPrice, amount: value },
      }));
    } else if (name === "listPrice.currencyCode") {
      setBook((prevBook) => ({
        ...prevBook,
        listPrice: { ...prevBook.listPrice, currencyCode: value },
      }));
    } else if (name === "thumbnail") {
      // טיפול בשדה "תמונה" (על מנת להעלות את התמונה)
      const file = e.target.files[0]; // קבלת קובץ התמונה
      const reader = new FileReader();

      reader.onloadend = () => {
        setBook((prevBook) => ({
          ...prevBook,
          thumbnail: reader.result, // שמירת ה-URL של התמונה ב-state
        }));
      };

      if (file) {
        reader.readAsDataURL(file); // קורא את התמונה כ-Data URL
      }
    } else {
      setBook((prevBook) => ({
        ...prevBook,
        [name]: value, // עדכון כל שדה אחר ב-state
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookId) {
      bookService.updateBook(bookId, book).then(() => {
        navigate(`/book/${bookId}`);
      });
    } else {
      bookService.createBook(book).then(() => {
        navigate("/book");
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
            min="0"
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
        <div>
          <label>דירוג</label>
          <input
            type="number"
            name="rating"
            value={book.rating}
            onChange={handleChange}
            required
            min="0"
            max="5"
          />
        </div>
        <div>
          <label>קטגוריה</label>
          <input
            type="text"
            name="category"
            value={book.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>תמונה</label>
          <input
            type="file"
            name="thumbnail"
            accept="image/*"
            onChange={handleChange}
          />
          {book.thumbnail && (
            <img
              src={book.thumbnail}
              alt="תמונה של הספר"
              style={{ width: "150px", marginTop: "10px" }}
            />
          )}
        </div>
        <button type="submit">{bookId ? "שמור שינויים" : "הוסף ספר"}</button>
      </form>
    </div>
  );
}

export default BookEdit;
