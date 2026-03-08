import React from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Database,
    Palette,
    Layers,
    Layout,
    BarChart,
    Monitor,
    Cpu
} from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming & Web',
            icon: <Code />,
            skills: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'AI & Machine Learning',
            icon: <Cpu />,
            skills: ['Machine Learning', 'AI Models', 'Data Processing']
        },
        {
            title: 'Graphics Design',
            icon: <Palette />,
            skills: ['Figma', 'Adobe Illustrator', 'Corel Draw', 'UI/UX Design']
        },
        {
            title: 'Professional Tools',
            icon: <Monitor />,
            skills: ['MS Office', 'Graphic Design', 'Figma', 'Technical Writing']
        }
    ];

    return (
        <section id="skills" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass"
                            style={{ padding: '2rem', borderTop: '4px solid var(--primary)' }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(59, 130, 246, 0.1)',
                                borderRadius: '12px',
                                color: 'var(--primary)',
                                marginBottom: '1.5rem'
                            }}>
                                {cat.icon}
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{cat.title}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                                {cat.skills.map(skill => (
                                    <span
                                        key={skill}
                                        style={{
                                            padding: '0.3rem 0.8rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            color: 'var(--text-secondary)',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
