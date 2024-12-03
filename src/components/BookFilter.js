import React from "react";

function BookFilter({ filterBooks }) {
  const handleFilterChange = (e) => {
    const value = e.target.value;
    filterBooks(value); // מעביר את הערך החדש לסינון
  };

  return (
    <div>
      <label>חפש לפי שם המחבר או מחיר:</label>
      <input type="text" onChange={handleFilterChange} />
    </div>
  );
}

export default BookFilter;
