import type {ITimer} from "@common/types/timer"
import {useEffect, useState} from "react"
import {getSavedTimers, saveTimers} from "../utils/storage"
import {getElapsedSeconds} from "../utils/timerUtils"

export const useTimers = () => {
  const [timers, setTimers] = useState<ITimer[]>(getSavedTimers)

  useEffect(() => {
    saveTimers(timers)
  }, [timers])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prev => [...prev])
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const addTimer = (title: string) => {
    const now = Date.now()
    const newTimer: ITimer = {
      id: crypto.randomUUID(),
      title,
      seconds: 0,
      isRunning: true,
      lastStartedAt: now
    }

    setTimers(prev => [newTimer, ...prev])
  }

  const toggleTimer = (id: string) => {
    const now = Date.now()

    setTimers(prev =>
      prev.map(timer => {
        if (timer.id !== id) return timer

        if (timer.isRunning) {
          return {
            ...timer,
            seconds: getElapsedSeconds(timer),
            isRunning: false,
            lastStartedAt: null
          }
        } else {
          return {
            ...timer,
            isRunning: true,
            lastStartedAt: now
          }
        }
      })
    )
  }

  const deleteTimer = (id: string) => {
    setTimers(prev => prev.filter(timer => timer.id !== id))
  }

  return {
    timers,
    addTimer,
    toggleTimer,
    deleteTimer
  }
}
