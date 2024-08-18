import './App.css';
import Education from './Components/Education/Education';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Education/>
      <Skills/>
    </div>
  );
}

export default App;
