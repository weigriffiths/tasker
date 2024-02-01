import React, { useEffect, useState } from "react";
import { ExtendedTaskDetails, TaskModalProps } from "../types";

const TaskModal = ({ onClose }: TaskModalProps) => {
  // Fetch tasks from the backend or file storage
  const [tasks, setTasks] = useState<ExtendedTaskDetails[]>([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((response) => response.json())
      .then(setTasks)
      .catch(console.error);
  }, []);

  return (
    <div style={modalStyle}>
      <button onClick={onClose}>Close</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.description} - {task.file}:{task.line}
            {/* Display other task details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

const modalStyle: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // ... other styles
};

export default TaskModal;
