import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

import About from './Components/About/About';
import BlogDetails from './Components/Blog/BlogDetails';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Nav';
import Portfolio from './Components/Portfolio/Portfolio';
import Home from './Components/Screens/Home/Home';
import ProjectDetails from './Components/Screens/Project_Details/ProjectDetails';
import SeeMore from './Components/Screens/See_More/SeeMore';
import SeeMoreBlogs from './Components/Screens/See_More_Blogs/SeeMoreBlogs';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';

import ChatLauncher from './Components/common/ChatLauncher';
import ChatContainer from './Components/common/ChatContainer';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [email, setEmail] = useState('');
    const [isChatAllowed, setIsChatAllowed] = useState(false);

    // ========================
    // INIT (loading + localStorage check)
    // ========================
    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);

        const savedEmail = localStorage.getItem('chat_email');

        if (savedEmail) {
            setEmail(savedEmail);
            setIsChatAllowed(true);
        }
    }, []);

    // ========================
    // START CHAT (save email)
    // ========================
    const handleStartChat = () => {
        if (!email || !email.includes('@')) {
            alert('Valid email required');
            return;
        }

        localStorage.setItem('chat_email', email);
        setIsChatAllowed(true);
    };

    // ========================
    // OPEN CHAT
    // ========================
    const handleOpenChat = () => {
        console.log('Opening chat...');
        const savedEmail = localStorage.getItem('chat_email');

        if (savedEmail) {
            setEmail(savedEmail);
            setIsChatAllowed(true);
        } else {
            setIsChatAllowed(false);
        }

        setShowChat(true);
    };

    return (
        <>
            {loading ? (
                <HashLoader color="#007ACC" loading={loading} className="override" size={100} />
            ) : (
                <>
                    {/* Chat Launcher */}
                    <ChatLauncher onClick={handleOpenChat} />

                    <Router>
                        <div style={{ overflow: 'hidden' }}>
                            <Navbar />

                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/experience" element={<Experience />} />
                                <Route path="/services" element={<Services />} />
                                <Route path="/portfolio" element={<Portfolio />} />
                                <Route path="/testimonial" element={<Testimonial />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/projects" element={<SeeMore />} />
                                <Route path="/blogs" element={<SeeMoreBlogs />} />
                                <Route path="/blog-details/:id" element={<BlogDetails />} />
                                <Route path="/project-details/:id" element={<ProjectDetails />} />
                                <Route path="*" element={<Home />} />
                            </Routes>

                            <Footer />
                        </div>
                    </Router>
                </>
            )}

            {/* =========================
                EMAIL GATE MODAL
            ========================= */}
            {showChat && !isChatAllowed && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '1.5rem',
                        right: '1.5rem',
                        width: '320px',
                        height: '450px',
                        borderRadius: '12px',
                        zIndex: 2000,
                        backgroundColor: 'white',
                        boxShadow:
                            '0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -4px rgba(0,0,0,0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            padding: '12px',
                            background: '#007acc',
                            color: 'white',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>AI Assistant</span>

                        <button
                            onClick={() => setShowChat(false)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                fontSize: '18px',
                                cursor: 'pointer',
                                lineHeight: 1,
                            }}
                            aria-label="Close Chat"
                        >
                            ✕
                        </button>
                    </div>

                    <div style={{ padding: '20px', flex: 1 }}>
                        <h3 style={{ marginBottom: '10px', color: 'black' }}>
                            Enter your email to start chat
                        </h3>

                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '6px',
                                marginBottom: '10px',
                            }}
                        />

                        <button
                            onClick={handleStartChat}
                            style={{
                                width: '100%',
                                padding: '10px',
                                backgroundColor: '#007acc',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                            }}
                        >
                            Start Chat
                        </button>
                    </div>
                </div>
            )}
            {/* =========================
                CHAT UI
            ========================= */}
            {showChat && isChatAllowed && (
                <div className="fixed bottom-20 right-6 w-80 max-w-full z-50 shadow-lg">
                    <ChatContainer isOpen={showChat} setIsOpen={setShowChat} email={email} />
                </div>
            )}
        </>
    );
};

export default App;
