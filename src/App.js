import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MyPage from "./pages/my/MyPage";
import "./App.css";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/pages/Cart" element={<Cart />} />
        <Route path="/pages/my/MyPage" element={<MyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

