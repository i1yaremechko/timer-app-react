import {useEffect, useState} from "react"
import {getSavedTimers, saveTimers} from "@features/Timers/gateways"
import {getElapsedSeconds} from "@features/Timers/utils"
import type {Timer as TimerType} from "@common/types/Timer"

export const useTimers = () => {
  const [timers, setTimers] = useState<TimerType[]>(getSavedTimers)

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
    const newTimer: TimerType = {
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
