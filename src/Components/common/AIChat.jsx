import React, { useState, useEffect, useRef } from 'react';
import { FiSend, FiX } from 'react-icons/fi';
import { isLeadMessage } from './../../utils/isLeadMessage';
import './AIChat.css';

export default function AIChat({ onClose }) {
    const [isTyping, setIsTyping] = useState(false);

    const [email, setEmail] = useState('');
    const [isEmailCollected, setIsEmailCollected] = useState(false);

    const [messages, setMessages] = useState([
        {
            role: 'bot',
            text: '👋 Hello! Before starting, please enter your email to continue.',
        },
    ]);

    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    // Load saved email
    useEffect(() => {
        const savedEmail = localStorage.getItem('chat_email');
        if (savedEmail) {
            setEmail(savedEmail);
            setIsEmailCollected(true);

            setMessages([
                {
                    role: 'bot',
                    text: '👋 Welcome back! How can I help you?',
                },
            ]);
        }
    }, []);

    // auto scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // EMAIL submit
    const handleEmailSubmit = (value) => {
        const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

        if (!emailRegex.test(value)) {
            alert('Please enter a valid email');
            return;
        }

        setEmail(value);
        setIsEmailCollected(true);
        localStorage.setItem('chat_email', value);

        setMessages((prev) => [
            ...prev,
            { role: 'bot', text: '✅ Thanks! Now you can chat with me.' },
        ]);
    };

    // SEND MESSAGE
    const handleSend = async () => {
        if (!isEmailCollected) {
            setMessages((prev) => [
                ...prev,
                { role: 'bot', text: '👋 Please enter your email first to continue.' },
            ]);
            return;
        }

        if (!input.trim()) return;

        const userMessage = input;

        setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);

        setInput('');
        setIsTyping(true);

        try {
            const res = await fetch('/.netlify/functions/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage,
                    email,
                    timestamp: new Date().toISOString(),
                }),
            });

            const data = await res.json();

            const reply =
                typeof data?.reply === 'string' && data.reply.trim()
                    ? data.reply
                    : 'Sorry, I could not generate a response.';

            setMessages((prev) => [...prev, { role: 'bot', text: reply }]);

            // Lead detect
            if (isLeadMessage(userMessage)) {
                fetch('/.netlify/functions/lead', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        message: userMessage,
                        email,
                        timestamp: new Date().toISOString(),
                    }),
                });
            }
        } catch (err) {
            console.error(err);

            setMessages((prev) => [
                ...prev,
                { role: 'bot', text: 'Server error. Please try again.' },
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    // safe render helper (fix split crash)
    const renderMessage = (text) => {
        if (!text) return null;

        return text.split('\n').map((line, i) => (
            <p key={i} style={{ margin: 0 }}>
                {line}
            </p>
        ));
    };

    return (
        <div className="ai-chat-container">
            {/* HEADER */}
            <div className="ai-chat-header">
                <h2>AI Assistant</h2>
                <button onClick={onClose}>
                    <FiX size={20} />
                </button>
            </div>

            {/* EMAIL GATE */}
            {!isEmailCollected && (
                <div className="email-gate">
                    <input
                        type="email"
                        placeholder="Enter your email..."
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleEmailSubmit(e.target.value);
                            }
                        }}
                    />
                </div>
            )}

            {/* MESSAGES */}
            <div className="ai-chat-messages" style={{ overflowY: 'auto', flex: 1 }}>
                {messages.map((msg, i) => (
                    <div key={i} className={msg.role === 'user' ? 'message-user' : 'message-bot'}>
                        {renderMessage(msg.text)}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* TYPING */}
            {isTyping && (
                <div className="message-bot typing">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span> AI is typing...</span>
                </div>
            )}

            {/* INPUT */}
            <div className="ai-chat-input-area">
                <input
                    type="text"
                    placeholder={
                        isEmailCollected ? 'Type your question...' : 'Enter email first...'
                    }
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSend();
                    }}
                    style={{ color: 'black' }}
                />

                <button onClick={handleSend} className="ai-chat-send-btn">
                    <FiSend size={18} />
                </button>
            </div>
        </div>
    );
}
