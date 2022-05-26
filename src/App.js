import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Resume from './components/resume'
import Cards from './components/cards';
import About from './components/aboutMe'
import Projects from './components/projects'
import Contact from './components/contact'
function App() {
    return (
    <Router>
        <Header />
        <Routes>
              <Route 
                path="/about" 
                element={<About />} 
              />
              </Routes>

              <Routes>
              <Route 
                path="/resume" 
                element={<Resume />} 
              />
              </Routes>

              <Routes>
              <Route 
                path="/projects" 
                element={<Projects />} 
              />
              </Routes>

              <Routes>
              <Route 
                path="/contact" 
                element={<Contact />} 
              />
              </Routes>


        <Main />
                
    
    
    {/* <Cards /> */}
   <Footer />
    </Router>
        
     
    );
}

export default App;
//hello