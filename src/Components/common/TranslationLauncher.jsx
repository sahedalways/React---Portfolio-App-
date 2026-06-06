import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const TranslationLauncher = () => {
    const { i18n } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);

    const toggleLanguage = () => {
        if (!i18n || typeof i18n.changeLanguage !== 'function') {
            console.warn('i18next is not initialized. Check your i18n.js config.');
            return;
        }
        const nextLang = i18n.language === 'en' ? 'bn' : 'en';
        i18n.changeLanguage(nextLang);
    };

    const label = useMemo(() => {
        return i18n?.language === 'en' ? 'বাংলা' : 'English';
    }, [i18n?.language]);

    return (
        <div
            style={styles.container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                style={{
                    ...styles.tooltip,
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                }}
            >
                {i18n?.language === 'en' ? 'Switch to Bengali' : 'English এ পরিবর্তন করুন'}
                <div style={styles.tooltipArrow} />
            </div>

            {/* Main Button */}
            <button
                onClick={toggleLanguage}
                aria-label="Toggle Language"
                style={{
                    ...styles.button,
                    transform: isHovered ? 'scale(1.08) translateY(-2px)' : 'scale(1)',
                }}
            >
                <span style={styles.icon}>🌐</span>
                <span style={styles.text}>{label}</span>
            </button>
        </div>
    );
};

const styles = {
    container: {
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: '#0f5685b6',
        color: '#ffffff',
        padding: '12px 24px',
        borderRadius: '12px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '14px',
        boxShadow: '0 10px 20px rgba(0, 122, 204, 0.3)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    },
    tooltip: {
        position: 'absolute',
        top: '100%',
        marginTop: '12px',
        backgroundColor: '#007ACC',
        color: '#fff',
        padding: '8px 14px',
        borderRadius: '6px',
        fontSize: '12px',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        fontWeight: '500',
    },
    tooltipArrow: {
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        borderWidth: '6px',
        borderStyle: 'solid',
        borderColor: 'transparent transparent #007ACC transparent',
    },
    icon: {
        fontSize: '18px',
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
    },
    text: {
        letterSpacing: '0.5px',
    },
};

export default TranslationLauncher;
