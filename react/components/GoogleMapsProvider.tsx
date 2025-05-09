import type { ReactNode, FC } from 'react'
import { memo, useState, useCallback, useEffect } from 'react'
import { LoadScript } from '@react-google-maps/api'
import ErrorMessage from './GoogleErrorMessage'
import { GOOGLE_MAPS_CONFIG, GOOGLE_MAPS_ERRORS } from '../config/googleMaps'
import { useGoogleMapsState } from '../hook/useGoogleMapsState'
import LoadingFallback from './LoadingFallback'

interface GoogleMapsProviderProps {
  children: ReactNode
}

const GoogleMapsProvider: FC<GoogleMapsProviderProps> = memo(({ children }) => {
  const { apiKey, loading, error } = useGoogleMapsState()
  const [scriptLoaded, setScriptLoaded] = useState(false)

  // Verificar si Google Maps ya está disponible
  useEffect(() => {
    if (window.google?.maps) {
      setScriptLoaded(true)
    }
  }, [])

  // Manejar la carga del script
  const handleLoad = useCallback(() => {
    setScriptLoaded(true)
  }, [])

  // Manejar errores de carga
  const handleError = useCallback((error: Error) => {
    console.error('Error cargando Google Maps:', error)
    setScriptLoaded(false)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <LoadingFallback />
      </div>
    )
  }

  if (error) {
    return <ErrorMessage message={GOOGLE_MAPS_ERRORS.LOAD_ERROR} />
  }

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
      {...GOOGLE_MAPS_CONFIG}
      onLoad={handleLoad}
      onError={handleError}
      loadingElement={
        !scriptLoaded ? (
          <div className="flex items-center justify-center w-full h-full">
            <LoadingFallback />
          </div>
        ) : null
      }
    >
      {scriptLoaded ? children : null}
    </LoadScript>
  )
})

GoogleMapsProvider.displayName = 'GoogleMapsProvider'

export default GoogleMapsProvider
