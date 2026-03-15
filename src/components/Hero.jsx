import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

const Hero = () => {
    const { hero, header } = portfolioData;

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '100px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Abstract Background Element */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                zIndex: -1,
                filter: 'blur(60px)',
                opacity: 0.4
            }}></div>

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 600 }}>{hero.greeting}</h2>
                    <h1 style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                        I'm <span style={{ color: 'var(--secondary)' }}>{hero.name}</span>
                    </h1>
                    <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>
                        <span style={{ color: '#ef4444' }}>{hero.role}</span>
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px' }}>
                        {hero.description}
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <motion.button
                            onClick={() => window.location.href = "/projects"}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass"
                            style={{
                                padding: '1rem 2rem',
                                background: 'var(--primary)',
                                color: 'white',
                                border: 'none',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}
                        >
                            View My Work
                        </motion.button>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {hero.socialLinks?.linkedin && <SocialIcon icon={<Linkedin size={20} />} href={hero.socialLinks.linkedin} />}
                            {hero.socialLinks?.github && <SocialIcon icon={<Github size={20} />} href={hero.socialLinks.github} />}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                >
                    <div style={{
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'var(--secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        boxShadow: '0 0 40px rgba(245, 158, 11, 0.4)',
                        border: '8px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <img
                            src="/Avatar.png"
                            alt={hero.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => {
                                e.target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${header.firstName.trim()}`;
                            }}
                        />
                    </div>

                    {/* Decorative Floating Element */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '-20px',
                            padding: '1rem',
                            borderRadius: '1rem',
                            background: 'rgba(59, 130, 246, 0.2)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            fontWeight: '600',
                            fontSize: '0.9rem'
                        }}
                    >
                        🚀 Open for Opportunities
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const SocialIcon = ({ icon, href }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, color: 'var(--primary)' }}
        style={{
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            color: 'var(--text-primary)',
            border: '1px solid rgba(255,255,255,0.1)'
        }}
    >
        {icon}
    </motion.a>
);

export default Hero;
