import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 500 }}>
                            I am a passionate and versatile developer with expertise in Python, Machine Learning/AI, and Web Development.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            I specialize in building dynamic web applications using Flask and enjoy creating efficient, scalable solutions that solve real-world problems.
                            Additionally, I have experience with Vibe Code, enabling me to deliver interactive and engaging user experiences.
                        </p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            I thrive at the intersection of data and development, combining technical skills with creativity to bring innovative ideas to life.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass"
                        style={{ padding: '3rem', position: 'relative' }}
                    >
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <StatItem label="Projects" value="10+" />
                            <StatItem label="Years Exp" value="Entry" />
                            <StatItem label="Skills" value="12+" />
                            <StatItem label="Design" value="UI/UX" />
                        </div>

                        {/* Background Glow */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            height: '100%',
                            background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                            zIndex: -1,
                            opacity: 0.3
                        }}></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const StatItem = ({ label, value }) => (
    <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '0.2rem' }}>{value}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</p>
    </div>
);

export default About;
