import React from "react";
import { Timer } from "./components/Timer";
import { CreateForm } from "./components/CreateForm";
import { useTimers } from "./hooks/useTimers";
import "./index.scss";

export const Timers: React.FC = () => {
  const { timers, addTimer, toggleTimer, deleteTimer } = useTimers();

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
        <CreateForm onAddTimer={addTimer} />

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