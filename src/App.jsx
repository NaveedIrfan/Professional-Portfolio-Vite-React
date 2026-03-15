import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ProjectsPage from './components/ProjectsPage';
import AdminPanel from './components/AdminPanel';

function PortfolioHome() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Contact />
            <footer style={{
                padding: '2rem',
                textAlign: 'center',
                color: 'var(--text-secondary)',
                borderTop: '1px solid var(--glass-border)'
            }}>
                <p>© {new Date().getFullYear()} Naveed Irfan. Built with ❤️ and React.</p>
            </footer>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PortfolioHome />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
