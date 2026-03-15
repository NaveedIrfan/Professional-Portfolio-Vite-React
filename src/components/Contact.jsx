import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

const Contact = () => {
    const { contact } = portfolioData;

    return (
        <section id="contact" style={{ paddingBottom: '120px' }}>
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>{contact.subtitle}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                            {contact.description}
                        </p>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <ContactInfo icon={<Mail size={20} />} label="Email" value={contact.info.email} />
                            <ContactInfo
                                icon={<Linkedin size={20} />}
                                label="LinkedIn"
                                value={contact.info.linkedinLabel}
                                link={contact.info.linkedin}
                            />
                            <ContactInfo icon={<MapPin size={20} />} label="Location" value={contact.info.location} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ContactInfo = ({ icon, label, value, link }) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50%',
            color: 'var(--primary)'
        }}>
            {icon}
        </div>
        <div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{label}</p>
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: '500' }}>{value}</a>
            ) : (
                <p style={{ fontWeight: '500' }}>{value}</p>
            )}
        </div>
    </div>
);



export default Contact;
