import type {ITimer} from "@common/types/timer"
import {STORAGE_KEY} from "../constants"

export const getSavedTimers = (): ITimer[] => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (!saved) return []

  try {
    return JSON.parse(saved) as ITimer[]
  } catch {
    return []
  }
}

export const saveTimers = (timers: ITimer[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(timers))
}
