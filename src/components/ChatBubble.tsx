import React, { useState } from "react";
import TaskModal from "./TaskModal";

const ChatBubble = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalOpen(true)} style={chatBubbleStyle}>
        Tasks
      </button>
      {isModalOpen && <TaskModal onClose={() => setModalOpen(false)} />}
    </>
  );
};

const chatBubbleStyle: React.CSSProperties = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  // Add more styling as needed
};

export default ChatBubble;
