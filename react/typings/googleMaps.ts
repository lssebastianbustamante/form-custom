export interface GoogleMapsKeyData {
  logistics: {
    googleMapsKey: string
  }
}

export interface UseGoogleMapsKeyReturn {
  apiKey: string
  loading: boolean
  error: Error | undefined
}

export interface GeocodingResult {
  latitud: number
  longitud: number
}

export interface GoogleMapsState {
  apiKey: string
  loading: boolean
  error?: Error
}