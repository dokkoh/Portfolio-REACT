import HeaderNav from "../HeaderNav";
import Intro from "../Intro";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import Plan from "../Plan";
import Legal from "../Legal";
import Footer from "../Footer";
import Error from "../Error/error";
import { BrowserRouter as Router, Routes, Route, Link, createBrowserRouter } from "react-router-dom";
import { useTheme } from "../ThemeContext";

function App() {

  const { isDarkMode } = useTheme();

  return (
    <Router>
      <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
        <HeaderNav />
      <main>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/plan' element={<Plan />} />
          <Route path='/legal-notice' element={<Legal />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;

