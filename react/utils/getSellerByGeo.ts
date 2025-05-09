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

export function getSellerByGeo(
  geo: Coordinates,
  country: string
): Promise<{ sellerId: string; sellerName: string }> {

  return new Promise((res, rej) => {
    fetch(
      `/api/checkout/pub/regions?country=${country}&geoCoordinates=${geo.longitud};${geo.latitud}`
    )
      .then((r) => r.json())
      .then((d: GetSellerByGeoResponse[]) => {
        if (d[0].sellers.length > 0)
          res({
            sellerId: d[0]?.sellers[0].id,
            sellerName: d[0]?.sellers[0].name
          })

        rej({
          error: 'Sin distribuidor en la dirección ingresada.'
        })
      })
  })
}
