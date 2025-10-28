import { useMemo } from 'react'

export const useCssHandles = (handles: string[]) => {
  const map = useMemo(() => {
    return handles.reduce<Record<string, string>>((acc, key) => {
      acc[key] = key
      return acc
    }, {})
  }, [handles])

  return { handles: map }
}
