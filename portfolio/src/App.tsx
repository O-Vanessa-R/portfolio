import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from "./pages/Skills";
import CV from "./pages/CV";
import Home from "./pages/Home";

function App() {

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/competences" element={<Skills />} />
      <Route path="/projets" element={<Projects />} />
      <Route path="/CV" element={<CV />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
