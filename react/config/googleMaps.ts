import type { Libraries } from '@react-google-maps/api'

export const GOOGLE_MAPS_CONFIG = {
    libraries: ['places'] as Libraries,
    version: 'weekly',
    region: 'AR',
    language: 'es-419',
    geocoding: {
        region: 'ar'
    }
} as const

export const GOOGLE_MAPS_ERRORS = {
    NO_API_KEY: 'API key no disponible',
    GEOCODING_ERROR: 'Error en geocodeAddress:',
    LOAD_ERROR: 'Error al cargar el mapa'
} as const