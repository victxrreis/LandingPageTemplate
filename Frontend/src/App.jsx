import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";

/* --- LAYOUT COMPONENTS --- */
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

/* --- PAGES --- */
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Security from "./pages/Security";
import Status from "./pages/Status";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* --- UTILS: SCROLL RESTORATION --- */}
      <ScrollToTop />

      <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
        {/* --- GLOBAL: NAVBAR --- */}
        <Navbar />

        {/* --- MAIN CONTENT AREA --- */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/seguranca" element={<Security />} />
            <Route path="/status" element={<Status />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>

        {/* --- GLOBAL: FOOTER --- */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
