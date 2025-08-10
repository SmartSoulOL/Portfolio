import logo from './logo.svg';
import './App.css';
import Header from './components/Banner';
import SkillCards from "./components/SkillCards";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio"; 
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SkillCards />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
    </div>
  );
}

export default App;
