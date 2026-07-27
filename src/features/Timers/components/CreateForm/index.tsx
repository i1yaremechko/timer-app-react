import React, { useState } from "react";
import { getDefaultTimerTitle } from "./utils";
import "./index.scss";

interface CreateFormProps {
  onAddTimer: (title: string) => void;
}

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