import React, { useState, useEffect, useRef } from "react";
import { FiSend, FiX } from "react-icons/fi";
import "./AIChat.css";

export default function AIChat({ onClose }) {
  const [messages, setMessages] = useState([
    { role: "bot", text: "👋 Hi! Ask me anything about Sahed!" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    {
      question: "How to get started?",
      answer:
        "🚀 To start, an advance payment is required. Then payments follow project milestones.",
    },

    {
      question: "What technologies do you use?",
      answer:
        "🛠️ I primarily work with Next.js, Laravel (PHP), and React Native for mobile app development technologies.",
    },

    {
      question: "How do you ensure project quality?",
      answer:
        "✅ I follow best coding practices, test thoroughly, and maintain clear documentation.",
    },

    {
      question: "About Payment Terms",
      answer:
        "💰 Payment Terms:\n- 35% advance before starting.\n- 35% after 50% completion.\n- Remaining 30% after final delivery.",
    },
  ];

  // Scroll chat to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];

    const reply = getBotReply(input);
    newMessages.push({ role: "bot", text: reply });

    setMessages(newMessages);
    setInput("");
  };

  const getBotReply = (question) => {
    const lower = question.toLowerCase().trim();

    // Greetings (including slang)
    if (
      lower === "hi" ||
      lower === "hello" ||
      lower === "hey" ||
      lower === "hiya" ||
      lower === "yo" ||
      lower === "sup" ||
      lower === "hiya there" ||
      lower === "hey there" ||
      lower === "hi there" ||
      lower === "hello there"
    )
      return "👋 Hello! How can I help you today?";

    if (
      lower.includes("how are you") ||
      lower.includes("how's it going") ||
      lower.includes("wassup") ||
      lower.includes("sup") ||
      lower.includes("whats up") ||
      lower.includes("how u doin") ||
      lower.includes("how you doin")
    )
      return "🙂 I'm just a bot, but I'm here to help you! How can I assist?";

    // Farewell (including slang)
    if (
      lower === "bye" ||
      lower === "goodbye" ||
      lower === "see you" ||
      lower === "peace" ||
      lower === "laters" ||
      lower === "catch you later" ||
      lower === "cya" ||
      lower === "bye bye"
    )
      return "👋 Goodbye! Feel free to chat anytime.";

    // Thanks (including slang)
    if (
      lower.includes("thank you") ||
      lower.includes("thanks") ||
      lower.includes("thx") ||
      lower.includes("ty") ||
      lower.includes("much appreciated") ||
      lower.includes("cheers")
    )
      return "🙏 You’re welcome! Feel free to ask if you have more questions.";

    // Help requests (slang & informal)
    if (
      lower.includes("help") ||
      lower.includes("assist") ||
      lower.includes("can u") ||
      lower.includes("pls help") ||
      lower.includes("need some help") ||
      lower.includes("hook me up") ||
      lower.includes("got a sec")
    )
      return "🤝 I’m here to help! Ask me anything about my skills, projects, pricing, or process.";

    // Farewell
    if (lower === "bye" || lower === "goodbye" || lower === "see you")
      return "👋 Goodbye! Feel free to chat anytime.";

    // Skills and experience
    if (
      lower.includes("skill") ||
      lower.includes("technology") ||
      lower.includes("tech")
    )
      return "💡 I’m a Full-Stack Software Developer with over 4 years of experience specializing in JavaScript, Next.js, Laravel, PHP, and React Native.";

    if (
      lower.includes("project") ||
      lower.includes("work") ||
      lower.includes("experience")
    )
      return "📁 I’ve worked on 90+ projects including e-commerce platforms, POS systems, news portals, NFC-based mobile apps, cleaning service apps, MLM systems, matrimony sites, trading platforms, and job portals.";

    // Contact info
    if (
      lower.includes("contact") ||
      lower.includes("email") ||
      lower.includes("reach")
    )
      return "📧 You can contact me at ssahed65@gmail.com or WhatsApp at +8801616516753.";

    // Payment terms
    if (
      lower.includes("payment") ||
      lower.includes("terms") ||
      lower.includes("price")
    )
      return "💰 Payment Terms: 35% advance before starting, 35% after 50% completion, and remaining 30% after final delivery.";

    // Project timeline
    if (
      lower.includes("timeline") ||
      lower.includes("duration") ||
      lower.includes("how long")
    )
      return "⏳ Project timelines depend on the scope. After discussing requirements, I provide an estimated schedule.";

    // Revisions
    if (
      lower.includes("revision") ||
      lower.includes("change") ||
      lower.includes("update")
    )
      return "🔄 Revisions are included within agreed milestones. Additional changes might affect timeline and cost.";

    // Support and maintenance
    if (
      lower.includes("support") ||
      lower.includes("maintenance") ||
      lower.includes("after delivery")
    )
      return "🛡️ Yes, I offer post-launch support and maintenance packages to keep your app running smoothly.";

    // Communication
    if (
      lower.includes("communication") ||
      lower.includes("progress") ||
      lower.includes("update")
    )
      return "📞 I provide regular updates via email, chat, or calls based on your preference.";

    // Services offered
    if (
      lower.includes("service") ||
      lower.includes("offer") ||
      lower.includes("what do you do")
    )
      return "💼 I develop scalable web and mobile applications using React, Next.js, Laravel, PHP, and React Native.";

    // Pricing details
    if (
      lower.includes("cost") ||
      lower.includes("price") ||
      lower.includes("charge") ||
      lower.includes("fee")
    )
      return "💵 Pricing depends on project requirements. After reviewing your needs, I provide a detailed quote.";

    // NDA and confidentiality
    if (
      lower.includes("nda") ||
      lower.includes("confidential") ||
      lower.includes("privacy")
    )
      return "🔐 I respect your privacy and can sign an NDA to ensure your project's confidentiality.";

    // Tools and methodologies
    if (
      lower.includes("methodology") ||
      lower.includes("process") ||
      lower.includes("tools")
    )
      return "🛠️ I follow Agile methodologies using tools like Jira and Git for version control to ensure smooth project delivery.";

    // Platform expertise
    if (
      lower.includes("mobile") ||
      lower.includes("app") ||
      lower.includes("android") ||
      lower.includes("ios")
    )
      return "📱 I build cross-platform mobile apps using React Native for both Android and iOS.";

    if (
      lower.includes("web") ||
      lower.includes("website") ||
      lower.includes("web app")
    )
      return "🌐 I develop modern, responsive web applications using React and Next.js.";

    // Deployment and hosting
    if (
      lower.includes("deployment") ||
      lower.includes("host") ||
      lower.includes("server")
    )
      return "🚀 I handle deployment and hosting setup on platforms like Vercel, AWS, and DigitalOcean.";

    // Project management
    if (
      lower.includes("project management") ||
      lower.includes("manage project") ||
      lower.includes("tracking")
    )
      return "📋 I use project management tools to keep you updated on milestones, progress, and timelines.";

    // Demo or portfolio
    if (
      lower.includes("demo") ||
      lower.includes("portfolio") ||
      lower.includes("examples")
    )
      return "🎯 You can check out my portfolio showcasing past projects on my website or ask me to share specific examples.";

    // Onboarding process
    if (
      lower.includes("start") ||
      lower.includes("begin") ||
      lower.includes("onboard")
    )
      return "🚀 To get started, we discuss your requirements and goals, then I provide a project plan and quote.";

    // Testing and QA
    if (
      lower.includes("testing") ||
      lower.includes("qa") ||
      lower.includes("quality")
    )
      return "✔️ I perform thorough testing and quality assurance to ensure your app runs smoothly and bug-free.";

    // Collaboration
    if (
      lower.includes("collaborate") ||
      lower.includes("team") ||
      lower.includes("work with")
    )
      return "🤝 I collaborate closely with clients and teams to make sure the product meets expectations.";

    // Timezone / Availability
    if (
      lower.includes("timezone") ||
      lower.includes("available") ||
      lower.includes("working hours")
    )
      return "🕒 I’m available mostly during GMT+6 timezone hours but flexible to arrange meetings as needed.";

    // Learning and growth
    if (
      lower.includes("learning") ||
      lower.includes("improve") ||
      lower.includes("grow")
    )
      return "📚 I’m always learning new tech and improving my skills to deliver the best results.";

    // Fallback for thanks
    if (lower.includes("thank you") || lower.includes("thanks"))
      return "🙏 You’re welcome! Feel free to ask if you have more questions.";

    if (lower.includes("help") || lower.includes("assist"))
      return "🤝 I’m here to help! Ask me anything about my skills, projects, pricing, or process.";

    // Default fallback
    return "🤖 Sorry, I didn't understand. Try asking about my skills, projects, payment terms, or contact info.";
  };

  // This triggers on quick question click
  const handleQuickQuestionClick = (answer) => {
    console.log("Quick question clicked:", answer); // Debug
    setMessages((prev) => [...prev, { role: "bot", text: answer }]);
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
      <div className="ai-chat-messages" style={{ overflowY: "auto", flex: 1 }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.role === "user" ? "message-user" : "message-bot"}
          >
            {msg.text.split("\n").map((line, idx) => (
              <p key={idx} style={{ margin: 0 }}>
                {line}
              </p>
            ))}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="ai-chat-input-area">
        <input
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="ai-chat-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          style={{ color: "black" }}
        />
        <button
          onClick={handleSend}
          className="ai-chat-send-btn"
          aria-label="Send message"
        >
          <FiSend size={18} />
        </button>
      </div>
    </div>
  );
}
