import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <h1>אודות</h1>
      <p>
        Miss Books היא אפליקציה לניהול ספרים. באפליקציה תוכלו לראות ספרים,
        להוסיף ספרים חדשים, לערוך ספרים קיימים ולצפות בפרטי הספר.
      </p>
      <Link to="/">חזרה לדף הבית</Link>
    </div>
  );
}

export default AboutUs;
