import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <h1>אודות</h1>
      <p>אפליקציה לניהול ספרים הכוללת אפשרויות חיפוש, צפייה, עריכה והוספה.</p>
      <Link to="/">חזרה לדף הבית</Link>
    </div>
  );
}

export default AboutUs;
