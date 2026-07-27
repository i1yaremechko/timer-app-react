import type {Timer as TimerType} from "@common/types/Timer"
import {STORAGE_KEY} from "../constants"

export const getSavedTimers = (): TimerType[] => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (!saved) return []

  try {
    return JSON.parse(saved) as TimerType[]
  } catch {
    return []
  }
}

export const saveTimers = (timers: TimerType[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(timers))
}
