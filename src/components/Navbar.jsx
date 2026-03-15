import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'
            }`} style={{
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
                borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
            }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#home" style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-signature)'
                }}>
                    {portfolioData.header.firstName} <span style={{ color: 'var(--primary)' }}>{portfolioData.header.lastName}</span>
                </a>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{ fontWeight: '500', color: 'var(--text-secondary)' }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div style={{ display: 'none' }} className="mobile-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="glass" style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    padding: '1rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    borderTop: 'none',
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{ fontWeight: '500', color: 'var(--text-secondary)', fontSize: '1.2rem' }}
                            onClick={() => setIsMenuOpen(false)}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
