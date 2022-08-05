import { useState } from 'react'

export function useLocalStorage<T = unknown>(key: string) {
  const [data] = useState<T | null>(() => {
    const storedValue = localStorage.getItem(key)

    if (storedValue) {
      return JSON.parse(storedValue)
    }

    return undefined
  })

  return { data }
}
