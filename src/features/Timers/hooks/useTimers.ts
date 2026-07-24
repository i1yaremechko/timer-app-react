import type {ITimer} from "@common/types/timer"
import {useEffect, useState} from "react"
import {getSavedTimers, saveTimers} from "../utils/storage"

export const useTimers = () => {
  const [timers, setTimers] = useState<ITimer[]>(getSavedTimers)

  useEffect(() => {
    saveTimers(timers)
  }, [timers])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prevTimers =>
        prevTimers.map(timer =>
          timer.isRunning ? {...timer, seconds: timer.seconds + 1} : timer
        )
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const addTimer = (title: string) => {
    const newTimer: ITimer = {
      id: crypto.randomUUID(),
      title,
      seconds: 0,
      isRunning: true
    }

    setTimers(prev => [...prev, newTimer])
  }

  const toggleTimer = (id: string) => {
    setTimers(prev =>
      prev.map(timer =>
        timer.id === id ? {...timer, isRunning: !timer.isRunning} : timer
      )
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
