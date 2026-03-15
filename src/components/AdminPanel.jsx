import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, ArrowLeft, Code, Plus, Trash2 } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

const AdminPanel = () => {
    const [data, setData] = useState(portfolioData);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');
    const [rawMode, setRawMode] = useState(false);
    const [rawJsonError, setRawJsonError] = useState('');

    const handleSave = async () => {
        setSaving(true);
        setMessage('');
        try {
            const response = await fetch('/api/saveData', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                setMessage('Successfully saved! Changes are live locally.');
            } else {
                setMessage('Failed to save. Ensure you are running locally via `npm run dev`.');
            }
        } catch (e) {
            setMessage('Error: ' + e.message);
        }
        setSaving(false);
        setTimeout(() => setMessage(''), 4000);
    };

    const handleRawChange = (e) => {
        try {
            const parsed = JSON.parse(e.target.value);
            setData(parsed);
            setRawJsonError('');
        } catch (err) {
            setRawJsonError('Invalid JSON format.');
        }
    };

    const renderDynamicForm = (obj, path = []) => {
        return (
            <div style={{ marginLeft: path.length ? '20px' : '0px', padding: '10px 0' }}>
                {Object.entries(obj).map(([key, value]) => {
                    const currentPath = [...path, key];

                    const handleChange = (e) => {
                        const newVal = e.target.value;
                        const newData = { ...data };
                        let curr = newData;
                        for (let i = 0; i < currentPath.length - 1; i++) {
                            curr = curr[currentPath[i]];
                        }
                        curr[currentPath[currentPath.length - 1]] = typeof value === 'number' ? Number(newVal) : newVal;
                        setData(newData);
                    };

                    if (typeof value === 'string' || typeof value === 'number') {
                        return (
                            <div key={key} style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.4rem', textTransform: 'capitalize' }}>
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                </label>
                                {typeof value === 'string' && value.length > 50 ? (
                                    <textarea
                                        value={value}
                                        onChange={handleChange}
                                        style={inputStyle(true)}
                                    />
                                ) : (
                                    <input
                                        type={typeof value === 'number' ? 'number' : 'text'}
                                        value={value}
                                        onChange={handleChange}
                                        style={inputStyle(false)}
                                    />
                                )}
                            </div>
                        );
                    } else if (Array.isArray(value)) {
                        return (
                            <div key={key} style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <h4 style={{ color: 'var(--primary)', margin: 0, textTransform: 'capitalize' }}>{key}</h4>
                                    <button
                                        onClick={() => {
                                            const newData = { ...data };
                                            let curr = newData;
                                            for (let i = 0; i < currentPath.length; i++) curr = curr[currentPath[i]];
                                            let newItem = '';
                                            if (curr.length > 0) {
                                                const template = curr[curr.length - 1];
                                                if (typeof template === 'object' && template !== null) {
                                                    const emptyClone = JSON.parse(JSON.stringify(template));
                                                    const clearValues = (obj) => {
                                                        for (let k in obj) {
                                                            if (typeof obj[k] === 'string') obj[k] = '';
                                                            else if (typeof obj[k] === 'number') obj[k] = Math.floor(Math.random() * 10000);
                                                            else if (Array.isArray(obj[k])) obj[k] = [];
                                                            else if (typeof obj[k] === 'object' && obj[k] !== null) clearValues(obj[k]);
                                                        }
                                                    };
                                                    clearValues(emptyClone);
                                                    newItem = emptyClone;
                                                }
                                            }
                                            curr.push(newItem);
                                            setData(newData);
                                        }}
                                        style={{ background: 'rgba(59, 130, 246, 0.2)', border: 'none', color: 'var(--primary)', cursor: 'pointer', padding: '0.4rem 0.8rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem' }}
                                    >
                                        <Plus size={14} /> Add Item
                                    </button>
                                </div>
                                {value.map((item, idx) => (
                                    <div key={idx} style={{ position: 'relative', marginBottom: '1rem', borderLeft: '2px solid rgba(59, 130, 246, 0.4)', background: 'rgba(0,0,0,0.1)', padding: '1rem 3rem 1rem 1.5rem', borderRadius: '0 8px 8px 0' }}>
                                        <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10 }}>
                                            <button
                                                onClick={() => {
                                                    const newData = { ...data };
                                                    let curr = newData;
                                                    for (let i = 0; i < currentPath.length; i++) curr = curr[currentPath[i]];
                                                    curr.splice(idx, 1);
                                                    setData(newData);
                                                }}
                                                title="Remove Item"
                                                style={{ background: 'rgba(239, 68, 68, 0.1)', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.4rem', borderRadius: '4px', display: 'flex' }}
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                        {typeof item === 'object' ? renderDynamicForm(item, [...currentPath, idx]) : (
                                            <input
                                                type="text"
                                                value={item}
                                                onChange={(e) => {
                                                    const newData = { ...data };
                                                    let curr = newData;
                                                    for (let i = 0; i < currentPath.length; i++) curr = curr[currentPath[i]];
                                                    curr[idx] = e.target.value;
                                                    setData(newData);
                                                }}
                                                style={inputStyle(false)}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        );
                    } else if (typeof value === 'object' && value !== null) {
                        return (
                            <div key={key} style={{ marginBottom: '1.5rem', background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', textTransform: 'capitalize' }}>
                                    {key} Section
                                </h3>
                                {renderDynamicForm(value, currentPath)}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        );
    };

    return (
        <div style={{ minHeight: '100vh', padding: '100px 20px 60px', position: 'relative' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button onClick={() => window.location.href = '/'} className="glass" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: '#fff', cursor: 'pointer' }}>
                            <ArrowLeft size={20} />
                        </button>
                        <div>
                            <h2 style={{ fontSize: '2rem', color: 'var(--primary)', margin: 0 }}>Admin Panel</h2>
                            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Edit your portfolio information directly.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button
                            onClick={() => setRawMode(!rawMode)}
                            className="glass"
                            style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            <Code size={18} /> {rawMode ? 'Form UI' : 'Raw JSON'}
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="glass"
                            style={{ padding: '0.8rem 1.5rem', background: 'var(--primary)', border: 'none', color: '#fff', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}
                        >
                            <Save size={18} /> {saving ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </motion.div>

                {message && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '1rem', background: message.includes('Success') ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)', color: message.includes('Success') ? '#10b981' : '#ef4444', border: `1px solid ${message.includes('Success') ? '#10b981' : '#ef4444'}`, borderRadius: '8px', marginBottom: '2rem', textAlign: 'center' }}>
                        {message}
                    </motion.div>
                )}

                <div className="glass" style={{ padding: '2rem', borderRadius: '16px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    {rawMode ? (
                        <div>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Directly edit the JSON representation of your portfolio. Be careful with the syntax!</p>
                            {rawJsonError && <p style={{ color: '#ef4444', marginBottom: '1rem' }}>{rawJsonError}</p>}
                            <textarea
                                defaultValue={JSON.stringify(data, null, 2)}
                                onChange={handleRawChange}
                                style={{ width: '100%', minHeight: '600px', padding: '1rem', fontFamily: 'monospace', fontSize: '0.9rem', background: 'rgba(0,0,0,0.5)', color: '#10b981', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                            />
                        </div>
                    ) : (
                        <div>
                            {renderDynamicForm(data)}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const inputStyle = (isTextArea) => ({
    width: '100%',
    padding: '0.8rem 1rem',
    background: 'rgba(0,0,0,0.3)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '6px',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border 0.3s ease',
    minHeight: isTextArea ? '100px' : 'auto',
    fontFamily: isTextArea ? 'inherit' : 'inherit',
    resize: isTextArea ? 'vertical' : 'none'
});

export default AdminPanel;
