
import { useGoogleMapsState } from '../hook/useGoogleMapsState'
import { GoogleMapsService } from '../services/googleMapsService'
import type { GeocodingResult } from '../typings/googleMaps'

export const useGeocodeAddress = () => {
  const { apiKey, loading } = useGoogleMapsState()
  const mapsService = GoogleMapsService.getInstance()

  const geocode = async (address: string): Promise<GeocodingResult> => {
    mapsService.setApiKey(apiKey)
    return mapsService.geocodeAddress(address)
  }

  return { geocode, loading }
}