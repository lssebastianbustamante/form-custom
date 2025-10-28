import { useMemo } from 'react'
import type { GoogleMapsState } from '../typings/googleMaps'

export const useGoogleMapsState = (): GoogleMapsState => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
  const state = useMemo<GoogleMapsState>(() => ({
    apiKey,
    loading: false,
    error: apiKey ? undefined : new Error('Missing NEXT_PUBLIC_GOOGLE_MAPS_API_KEY')
  }), [apiKey])

  return state
}
