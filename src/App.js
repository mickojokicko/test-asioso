import React from "react";
import Navbar from "./components/navbar/Navbar";
import AsiosoFocus from "./components/AsiosoFokus/AsiosoFocus";
import "./App.module.css";
import Impressing from "./components/ImpressingCustomers/Impressing/Impressing";
import { News } from "./components/News/News";
import { Newsletter } from "./components/NewsLetter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <AsiosoFocus />
      <Impressing />
      <News />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
