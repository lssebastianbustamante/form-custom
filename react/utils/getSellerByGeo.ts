type GetSellerByGeoResponse = {
  id: string
  sellers: Array<{
    id: string
    name: string
    logo: string
  }>
}

type Coordinates = {
  latitud: number
  longitud: number
}

export async function getSellerByGeo(
  geo: Coordinates,
  country: string
): Promise<{ sellerId: string; sellerName: string }> {
  try {
    const response = await fetch(
      `/api/checkout/pub/regions?country=${country}&geoCoordinates=${geo.longitud};${geo.latitud}`
    )
    const data = (await response.json()) as GetSellerByGeoResponse[]

    const first = data?.[0]
    const seller = first?.sellers?.[0]

    if (seller) {
      return {
        sellerId: seller.id,
        sellerName: seller.name,
      }
    }

    throw new Error('Sin distribuidor en la dirección ingresada.')
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error('Sin distribuidor en la dirección ingresada.')
  }
}
