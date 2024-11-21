import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Navbar from './Component/Navbar/Navbar';
import Project from './Component/Project/Project';
import Skill from './Component/Skill/Skill';
import Contact from './Component/Contact/Contact';
import Header from './Component/Header/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
