import './App.css';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
