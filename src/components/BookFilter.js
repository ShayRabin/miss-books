// BookFilter.js
import React from "react";

function BookFilter({ filterBooks, categories }) {
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    filterBooks(value); // סינון לפי קטגוריה
  };

  return (
    <div>
      <label>סנן לפי קטגוריה:</label>
      <select onChange={handleCategoryChange}>
        <option value="">בחר קטגוריה</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BookFilter;
