import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About.jsx";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/users/:userId"
          element={
            <Suspense fallback={<p>User doesnt exist</p>}>
              <UserDetails />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
