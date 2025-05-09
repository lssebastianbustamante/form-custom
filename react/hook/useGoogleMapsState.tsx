import { useState, useEffect } from 'react'
import { useQuery } from 'react-apollo'
import GET_API_KEY from '../queries/getApiKey.gql'
import type { GoogleMapsState, GoogleMapsKeyData } from '../typings/googleMaps'

export const useGoogleMapsState = (): GoogleMapsState => {
  const [state, setState] = useState<GoogleMapsState>({
    apiKey: '',
    loading: true,
    error: undefined
  })

  const { data, loading, error } = useQuery<GoogleMapsKeyData>(GET_API_KEY)

  useEffect(() => {
    setState({
      apiKey: data?.logistics?.googleMapsKey || '',
      loading,
      error: error as Error | undefined
    })
  }, [data, loading, error])

  return state
}
