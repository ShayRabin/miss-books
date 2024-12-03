// bookService.js

const books = [
  {
    id: "1",
    title: "ספר ראשון",
    description: "תיאור של הספר הראשון",
    listPrice: { amount: 100, currencyCode: "ILS" },
    authors: ["מחבר 1"],
    category: "פנטזיה",
    rating: 4,
    thumbnail: "/BooksImages/1.jpg", // התמונה מתוך תיקיית BooksImages
  },
  {
    id: "2",
    title: "ספר שני",
    description: "תיאור של הספר השני",
    listPrice: { amount: 150, currencyCode: "ILS" },
    authors: ["מחבר 2"],
    category: "מדע בדיוני",
    rating: 5,
    thumbnail: "/BooksImages/2.jpg", // התמונה מתוך תיקיית BooksImages
  },
  // הוספת ספרים נוספים עם תמונות מקטלוג
  {
    id: "3",
    title: "ספר שלישי",
    description: "תיאור של הספר השלישי",
    listPrice: { amount: 120, currencyCode: "ILS" },
    authors: ["מחבר 3"],
    category: "עיון",
    rating: 4,
    thumbnail: "/BooksImages/3.jpg", // התמונה מתוך תיקיית BooksImages
  },
  // הוסיפו ספרים נוספים לפי הצורך
];

export const bookService = {
  query() {
    return Promise.resolve(books); // מחזיר את כל הספרים
  },

  getById(bookId) {
    const book = books.find((b) => b.id === bookId);
    return Promise.resolve(book); // מחזיר את הספר לפי id
  },

  createBook(book) {
    const newBook = { ...book, id: (books.length + 1).toString() };
    books.push(newBook); // מוסיף את הספר למערך
    return Promise.resolve(newBook); // מחזיר את הספר החדש שנוסף
  },

  updateBook(bookId, updatedBook) {
    const index = books.findIndex((b) => b.id === bookId);
    if (index !== -1) {
      books[index] = { ...books[index], ...updatedBook }; // מעדכן את הספר הקיים
      return Promise.resolve(books[index]); // מחזיר את הספר המעודכן
    }
    return Promise.reject("Book not found"); // מחזיר שגיאה אם הספר לא נמצא
  },

  deleteBook(bookId) {
    const index = books.findIndex((b) => b.id === bookId);
    if (index !== -1) {
      books.splice(index, 1); // מסיר את הספר מהמארך
      return Promise.resolve(); // מחזיר הצלחה
    }
    return Promise.reject("Book not found"); // מחזיר שגיאה אם הספר לא נמצא
  },
};
