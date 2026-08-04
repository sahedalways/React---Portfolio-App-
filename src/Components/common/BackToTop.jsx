import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
                position: 'fixed',
                bottom: '1.5rem',
                left: '1.5rem',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: '#007acc',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -4px rgba(0,0,0,0.2)',
                opacity: visible ? 1 : 0,
                visibility: visible ? 'visible' : 'hidden',
                transform: visible ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.3s ease',
                zIndex: 900,
            }}
        >
            <FiArrowUp />
        </button>
    );
};

export default BackToTop;
