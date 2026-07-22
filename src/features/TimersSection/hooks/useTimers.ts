import type {ITimer} from "@/common/types/timer"
import {useEffect, useState} from "react"

const STORAGE_KEY = "app_timers"

export const useTimers = () => {
  const [timers, setTimers] = useState<ITimer[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch {
        return []
      }
    }
    return []
  })

  const [titleInput, setTitleInput] = useState("")

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timers))
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

  const addTimer = (e: React.FormEvent) => {
    e.preventDefault()
    if (!titleInput.trim()) return

    const newTimer: ITimer = {
      id: crypto.randomUUID(),
      title: titleInput.trim(),
      seconds: 0,
      isRunning: true
    }

    setTimers(prev => [...prev, newTimer])
    setTitleInput("")
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
    titleInput,
    setTitleInput,
    addTimer,
    toggleTimer,
    deleteTimer
  }
}
