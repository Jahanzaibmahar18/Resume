import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Home1 from "./Pages/Home";
import Services1 from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import Samples from "./Pages/Samples";
import Works from "./Pages/work";
import Process1 from "./Pages/process";
import Fqs from "./Pages/Fqs";
import Footer from "./Components/Common/Footer";
import Checkout from "./Components/Checkout/Checkout";
import ScrollToTop from "./Pages/ScrollToTop";

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/services" element={<Services1 />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/samples" element={<Samples />} />
        <Route path="/work" element={<Works />} />
        <Route path="/process" element={<Process1 />} />
        <Route path="/fqs" element={<Fqs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      <Footer />
    </Router>
  );
}