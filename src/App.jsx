import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
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

export default App;
