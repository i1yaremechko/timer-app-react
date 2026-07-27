import type {Timer as TimerType} from "@common/types/Timer"

export const getElapsedSeconds = (timer: TimerType): number => {
  if (!timer.isRunning || !timer.lastStartedAt) {
    return timer.seconds
  }

  const now = Date.now()
  const additionalSeconds = Math.floor((now - timer.lastStartedAt) / 1000)

  return timer.seconds + additionalSeconds
}
