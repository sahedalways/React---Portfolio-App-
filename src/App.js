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
import TranslationLauncher from './Components/common/TranslationLauncher';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [email, setEmail] = useState('');
    const [isChatAllowed, setIsChatAllowed] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const handleStartChat = () => {
        if (!email.includes('@')) {
            alert('Valid email required');
            return;
        }
        const savedEmail = localStorage.getItem('chat_email');

        if (savedEmail) {
            setEmail(savedEmail);
            setIsChatAllowed(true);
        }

        setShowChat(true);
    };

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

    return (
        <>
            {loading ? (
                <HashLoader color="#007ACC" loading={loading} className="override" size={100} />
            ) : (
                <>
                    {/* <TranslationLauncher /> */}

                    <ChatLauncher onClick={() => setShowChat(true)} />
                    <Router>
                        <div style={{ overflow: 'hidden' }}>
                            <Navbar />

                            <Routes>
                                <Route exact path="/" element={<Home />} />

                                <Route exact path="/about" element={<About />} />
                                <Route exact path="/experience" element={<Experience />} />
                                <Route exact path="/services" element={<Services />} />
                                <Route exact path="/portfolio" element={<Portfolio />} />
                                <Route exact path="/testimonial" element={<Testimonial />} />
                                <Route exact path="/contact" element={<Contact />} />

                                <Route exact path="/projects" element={<SeeMore />} />
                                <Route exact path="/blogs" element={<SeeMoreBlogs />} />

                                <Route exact path="/blog-details/:id" element={<BlogDetails />} />

                                <Route
                                    exact
                                    path="/project-details/:id"
                                    element={<ProjectDetails />}
                                />

                                <Route exact path="*" element={<Home />} />
                            </Routes>
                            <Footer />
                        </div>
                    </Router>
                </>
            )}

            {showChat && !isChatAllowed && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white p-5 rounded-lg w-80">
                        <h2 className="text-lg font-semibold mb-3">
                            Enter your email to start chat
                        </h2>

                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full border p-2 mb-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            className="bg-blue-500 text-white w-full p-2 rounded"
                            onClick={handleStartChat}
                        >
                            Start Chat
                        </button>
                    </div>
                </div>
            )}

            {showChat && (
                <div className="fixed bottom-20 right-6 w-80 max-w-full z-50 shadow-lg">
                    <ChatContainer isOpen={showChat} setIsOpen={setShowChat} email={email} />
                </div>
            )}
        </>
    );
};

export default App;
