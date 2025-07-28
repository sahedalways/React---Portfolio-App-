// ChatContainer.jsx
import React, { useState } from "react";
import AIChat from "./AIChat";
import { FiMessageCircle } from "react-icons/fi";

export default function ChatContainer({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Chat launcher button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Chat"
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "1.5rem",
            backgroundColor: "#2563eb",
            color: "white",
            padding: "0.75rem",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            boxShadow:
              "0 10px 15px -3px rgba(59,130,246,0.5), 0 4px 6px -4px rgba(59,130,246,0.3)",
            zIndex: 1000,
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
          }}
        >
          <FiMessageCircle />
        </button>
      )}

      {/* Chat box */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "1.5rem",
            width: "320px",
            maxWidth: "90vw",
            height: "450px",
            boxShadow:
              "0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -4px rgba(0,0,0,0.2)",
            borderRadius: "12px",
            zIndex: 1000,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AIChat onClose={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}
