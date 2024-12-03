// bookService.js
const books = [
  {
    id: "1",
    title: "ספר ראשון",
    description: "תיאור של הספר הראשון",
    listPrice: { amount: 100, currencyCode: "ILS" },
    authors: ["מחבר 1"],
    thumbnail: "http://ca.org/books-photos/20.jpg",
  },
  {
    id: "2",
    title: "ספר שני",
    description: "תיאור של הספר השני",
    listPrice: { amount: 150, currencyCode: "ILS" },
    authors: ["מחבר 2"],
    thumbnail: "http://ca.org/books-photos/21.jpg",
  },
];

export const bookService = {
  query() {
    return Promise.resolve(books); // מחזיר את כל הספרים
  },
  getById(bookId) {
    const book = books.find((b) => b.id === bookId);
    return Promise.resolve(book);
  },
  createBook(book) {
    const newBook = { ...book, id: (books.length + 1).toString() };
    books.push(newBook);
    return Promise.resolve(newBook);
  },
  updateBook(bookId, updatedBook) {
    const index = books.findIndex((b) => b.id === bookId);
    if (index !== -1) {
      books[index] = { ...books[index], ...updatedBook };
      return Promise.resolve(books[index]);
    }
    return Promise.reject("Book not found");
  },
};
