import React, { useState, useEffect, useRef } from 'react';
import { FiSend, FiX } from 'react-icons/fi';
import './AIChat.css';

export default function AIChat({ onClose }) {
    const [isTyping, setIsTyping] = useState(false);

    const [messages, setMessages] = useState([
        {
            role: 'bot',
            text: '👋 Hello! I’m here to help you with Sahed’s services. Ask anything.',
        },
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const quickQuestions = [
        {
            question: 'How to get started?',
            answer: '🚀 To start, an advance payment is required. Then payments follow project milestones.',
        },

        {
            question: 'What technologies do you use?',
            answer: '🛠️ I primarily work with Next.js, Laravel (PHP), and React Native for mobile app development technologies.',
        },

        {
            question: 'How do you ensure project quality?',
            answer: '✅ I follow best coding practices, test thoroughly, and maintain clear documentation.',
        },

        {
            question: 'About Payment Terms',
            answer: '💰 Payment Terms:\n- 35% advance before starting.\n- 35% after 50% completion.\n- Remaining 30% after final delivery.',
        },
    ];

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSend = async () => {
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
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await res.json();

            setIsTyping(false);

            setMessages((prev) => [...prev, { role: 'bot', text: data.reply }]);
        } catch (err) {
            setIsTyping(false);

            setMessages((prev) => [...prev, { role: 'bot', text: 'Something went wrong' }]);
        }
    };

    // This triggers on quick question click
    const handleQuickQuestionClick = (answer) => {
        console.log('Quick question clicked:', answer);
        setMessages((prev) => [...prev, { role: 'bot', text: answer }]);
    };

    return (
        <div className="ai-chat-container">
            {/* Header */}
            <div className="ai-chat-header">
                <h2>AI Assistant</h2>
                <button onClick={onClose}>
                    <FiX size={20} />
                </button>
            </div>

            {/* Quick Questions */}
            <div className="quick-questions">
                {quickQuestions.map(({ question, answer }, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleQuickQuestionClick(answer)}
                        className="quick-question-btn"
                        type="button"
                    >
                        {question}
                    </button>
                ))}
            </div>

            {/* Messages */}
            <div className="ai-chat-messages" style={{ overflowY: 'auto', flex: 1 }}>
                {messages.map((msg, i) => (
                    <div key={i} className={msg.role === 'user' ? 'message-user' : 'message-bot'}>
                        {msg.text.split('\n').map((line, idx) => (
                            <p key={idx} style={{ margin: 0 }}>
                                {line}
                            </p>
                        ))}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {isTyping && (
                <div className="message-bot typing">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span> AI is typing...</span>
                </div>
            )}

            {/* Input */}
            <div className="ai-chat-input-area">
                <input
                    type="text"
                    placeholder="Type your question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="ai-chat-input"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSend();
                    }}
                    style={{ color: 'black' }}
                />
                <button onClick={handleSend} className="ai-chat-send-btn" aria-label="Send message">
                    <FiSend size={18} />
                </button>
            </div>
        </div>
    );
}
