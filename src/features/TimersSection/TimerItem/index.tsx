import deleteTimer from "@/assets/images/timers/delete.png";
import pause from "@/assets/images/timers/pause.png";
import run from "@/assets/images/timers/run.png";
import type { ITimer } from "@/common/types/timer";
import { formatTime } from "@/common/utils/formatTime";
import React from "react";
import "./index.scss";

interface TimerItemProps {
  timer: ITimer;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TimerItem: React.FC<TimerItemProps> = ({
  timer,
  onToggle,
  onDelete,
}) => {
  return (
    <li className="timer">
      <div className="timer__title">
        {timer.title}
        <span className="timer__tooltip">{timer.title}</span>
      </div>

      <div
        className={`timer__value ${!timer.isRunning ? 'timer__value_paused' : ''
          }`}
      >
        {formatTime(timer.seconds)}
      </div>

      <button
        type="button"
        aria-label={timer.isRunning ? "Pause timer" : "Start timer"}
        className={`timer__toggle-button ${!timer.isRunning ? "timer__toggle-button_paused" : ""
          }`}
        onClick={() => onToggle(timer.id)}
      >
        {timer.isRunning ? (
          <img
            alt="pause"
            src={pause}
          />
        ) : (
          <img
            alt="run"
            src={run}
          />
        )}
      </button>

      <button
        type="button"
        aria-label="Delete timer"
        className="timer__delete-button"
        onClick={() => onDelete(timer.id)}
      >
        <img
          alt="delete"
          src={deleteTimer}
        />
      </button>
    </li>
  );
};