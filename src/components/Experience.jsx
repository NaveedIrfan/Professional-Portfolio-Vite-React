import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
    const items = [
        {
            type: 'education',
            title: 'Bsc in Information Technology',
            organization: 'University of Swat',
            date: 'Completed',
            description: 'Focused on core IT principles, software development, and modern technologies. Developed a strong foundation in computer science and problem-solving.'
        }
    ];

    return (
        <section id="experience">
            <div className="container">
                <h2 className="section-title">Education & Experience</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass"
                            style={{
                                padding: '2rem',
                                marginBottom: '2rem',
                                display: 'flex',
                                gap: '2rem',
                                alignItems: 'flex-start',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                background: 'var(--primary)',
                                padding: '1rem',
                                borderRadius: '12px',
                                color: 'white'
                            }}>
                                {item.type === 'education' ? <GraduationCap size={24} /> : <Briefcase size={24} />}
                            </div>

                            <div>
                                <span style={{
                                    color: 'var(--primary)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase'
                                }}>{item.date}</span>
                                <h3 style={{ margin: '0.5rem 0', fontSize: '1.4rem' }}>{item.title}</h3>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', opacity: 0.8 }}>{item.organization}</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
