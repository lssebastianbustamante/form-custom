import { GOOGLE_MAPS_ERRORS, GOOGLE_MAPS_CONFIG } from "../config"
import type { GeocodingResult } from "../typings/googleMaps"


export class GoogleMapsService {
    private static instance: GoogleMapsService
    private geocoder: google.maps.Geocoder | null = null
    private apiKey = ''

    private constructor() { }

    static getInstance(): GoogleMapsService {
        if (!GoogleMapsService.instance) {
            GoogleMapsService.instance = new GoogleMapsService()
        }
        return GoogleMapsService.instance
    }

    setApiKey(key: string): void {
        this.apiKey = key
    }

    private ensureGeocoder(): void {
        if (!this.geocoder && this.apiKey) {
            this.geocoder = new google.maps.Geocoder()
        }
    }

    async geocodeAddress(address: string): Promise<GeocodingResult> {
        if (!this.apiKey) {
            throw new Error(GOOGLE_MAPS_ERRORS.NO_API_KEY)
        }

        this.ensureGeocoder()

        try {
            const result = await this.geocodeAddressAsync(address)
            return result
        } catch (error) {
            console.error(GOOGLE_MAPS_ERRORS.GEOCODING_ERROR, error)
            throw error
        }
    }

    private geocodeAddressAsync(address: string): Promise<GeocodingResult> {
        return new Promise((resolve, reject) => {
            this.geocoder?.geocode(
                {
                    address,
                    ...GOOGLE_MAPS_CONFIG.geocoding
                },
                (results, status) => {
                    if (status === google.maps.GeocoderStatus.OK && results?.[0]) {
                        const location = results[0].geometry.location
                        resolve({
                            latitud: location.lat(),
                            longitud: location.lng()
                        })
                    } else {
                        reject(new Error(`${GOOGLE_MAPS_ERRORS.GEOCODING_ERROR} ${status}`))
                    }
                }
            )
        })
    }
}