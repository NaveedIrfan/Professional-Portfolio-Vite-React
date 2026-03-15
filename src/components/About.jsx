import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData.json';

const About = () => {
    const { about } = portfolioData;

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
                        {about.description.map((paragraph, index) => (
                            <p key={index} style={{
                                fontSize: index === 0 ? '1.2rem' : '1rem',
                                color: index === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                                marginBottom: '1.5rem',
                                fontWeight: index === 0 ? 500 : 400
                            }}>
                                {paragraph}
                            </p>
                        ))}
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
                            {about.stats.map((stat, index) => (
                                <StatItem key={index} label={stat.label} value={stat.value} />
                            ))}
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
