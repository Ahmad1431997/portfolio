//style
import './App.css';

//Components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <br/><br/><br/><br/>
      <Home/>
      <br/><br/><br/>
      <Education/>
      <br/><br/><br/>
      <Skills/>
      <br/><br/><br/>
      <Experience/>
      <br/><br/><br/>
      <Projects/>
      <br/><br/><br/>
      <Footer/>

    </div>
  );
}

export default App;
