import type {ITimer} from "@common/types/timer"

export const getElapsedSeconds = (timer: ITimer): number => {
  if (!timer.isRunning || !timer.lastStartedAt) {
    return timer.seconds
  }

  const now = Date.now()
  const additionalSeconds = Math.floor((now - timer.lastStartedAt) / 1000)

  return timer.seconds + additionalSeconds
}
