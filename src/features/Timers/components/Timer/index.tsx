import type { ITimer } from "@common/types/timer";
import { formatTime } from "@common/utils/formatTime";
import React from "react";
import "./index.scss";
import { getElapsedSeconds } from "@features/Timers/utils/timerUtils";

interface TimerProps {
  timer: ITimer;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const Timer: React.FC<TimerProps> = ({
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
        {formatTime(getElapsedSeconds(timer))}
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
            src="images/timers/pause.png"
          />
        ) : (
          <img
            alt="run"
            src="images/timers/run.png"
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
          src="images/timers/delete.png"
        />
      </button>
    </li>
  );
};