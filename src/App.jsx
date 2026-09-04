import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Experience from "./pages/Experience/Experience.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/habilidades" element={<Skills />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/experiencia" element={<Experience />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
