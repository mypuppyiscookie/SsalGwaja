import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MyPage from "./pages/MyPage";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/pages/Cart" element={<Cart />} />
        <Route path="/pages/MyPage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;

