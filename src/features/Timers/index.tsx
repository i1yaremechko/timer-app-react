import React from "react";
import { useTimers } from "./hooks/useTimers";
import "./index.scss";
import { Timer } from "./components/Timer";

export const Timers: React.FC = () => {
  const {
    timers,
    titleInput,
    setTitleInput,
    addTimer,
    toggleTimer,
    deleteTimer,
  } = useTimers();

  return (
    <section className="timers">
      <h2 className="timers__title">
        <b>Why</b> do we use it?
      </h2>
      <p className="timers__description">
        This sounded nonsense to Alice, so she said nothing, but set off at
        once toward the Red Queen. To her surprise, she lost sight of her in a
        moment.
      </p>

      <div className="timers__content">
        <form className="timers__form" onSubmit={addTimer}>
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

        <span className="timers__line"></span>

        <ul className="timers__list">
          {timers.map((timer) => (
            <Timer
              key={timer.id}
              timer={timer}
              onToggle={toggleTimer}
              onDelete={deleteTimer}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};