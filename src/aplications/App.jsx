import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop";
import Navbar from "../components/Navbar";
import '../syles/styles.css'
import Contacto from "../pages/Contacto";

function App() {

  return (
    <div>

      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Contacto />} path="/contacto" />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      
    </div>
  )
}

export default App
