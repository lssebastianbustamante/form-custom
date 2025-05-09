import type { ProvinciaData } from "../typings/interfaces"


export const mapProvincias = (arrayProvincias: ProvinciaData) => {


  const listadoProvincias = arrayProvincias.provincias.map((provincia) => ({
    value: provincia.nombre.toLowerCase(),
    label: provincia.nombre
  }))

  return listadoProvincias
}

export const mapDistritos = (arrayProvincias: ProvinciaData, provinciaSelected: string) => {

  const listadoDistritos = arrayProvincias?.provincias.filter((provincia) => {
    return provincia.nombre.toLowerCase() === provinciaSelected.toLowerCase()
  })[0]?.distritos?.map((distrito: string) => ({
    value: distrito.toLowerCase(),
    label: distrito
  })) ?? []

  return listadoDistritos
}