// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import BookIndex from "./pages/BookIndex";
import BookDetails from "./pages/BookDetails";
import BookEdit from "./pages/BookEdit";
import NavBar from "./components/NavBar"; // ייבוא רכיב הניווט

function App() {
  return (
    <Router>
      <NavBar /> {/* הוספת רכיב הניווט */}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/book" exact component={BookIndex} />
        <Route path="/book/:bookId" component={BookDetails} />
        <Route path="/book/edit" component={BookEdit} />
      </Switch>
    </Router>
  );
}

export default App;
