import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

const Contact = () => {
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
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Let's discuss your next project</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                            I am currently open for new opportunities and collaborations. Feel free to reach out through any of the channels below!
                        </p>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <ContactInfo icon={<Mail size={20} />} label="Email" value="naveedirfan890@gmail.com" />
                            <ContactInfo
                                icon={<Linkedin size={20} />}
                                label="LinkedIn"
                                value="Naveed Irfan"
                                link="https://www.linkedin.com/in/naveed-irfan-110a37251"
                            />
                            <ContactInfo icon={<MapPin size={20} />} label="Location" value="Swat, Pakistan" />
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
