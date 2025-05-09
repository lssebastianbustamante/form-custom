export const listadoTipoDeNegocios = (listaDeNegocios: string) => {

  const listaDeNegociosArray = listaDeNegocios.split(',').map((negocio) => negocio.trim()).map((negocio) => ({
    value: negocio.toLowerCase(),
    label: negocio
  }))

  return listaDeNegociosArray
}
