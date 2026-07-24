import React, { useState } from "react";
import "./index.scss";

interface CreateFormProps {
  onAddTimer: (title: string) => void;
}

const getDefaultTimerTitle = (): string => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `From ${hours}:${minutes}`;
};

export const CreateForm: React.FC<CreateFormProps> = ({ onAddTimer }) => {
  const [titleInput, setTitleInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTitle = titleInput.trim() || getDefaultTimerTitle();
    if (!trimmedTitle) return;

    onAddTimer(trimmedTitle);
    setTitleInput("");
  };

  return (
    <form className="timers__form" onSubmit={handleSubmit}>
      <input
        placeholder="Timer Name"
        type="text"
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <button className="timers__submit-button button" type="submit">
        Create Timer
      </button>
    </form>
  );
};