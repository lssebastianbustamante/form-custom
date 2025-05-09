export const schemaForm = {
  title: 'Registro de leads',
  description: 'Formulario para registro de no-clientes',
  type: 'object',
  properties: {
    backgroundContainer: {
      title: 'Background color for container',
      type: 'string',
      widget: {
        "ui:widget": "color"
      }
    },
    titleBlock: {
      title: 'Titulo del bloque',
      type: 'string',
    },
    subTitleBlock: {
      title: 'subtitulo del bloque',
      type: 'string',
    },
    textButton: {
      title: 'Texto del botón',
      type: 'string'
    },
    dataEntity: {
      title: 'Acrónimo o nombre de entidad',
      type: 'string'
    },
    canonicalUrl: {
      title: 'Url Canonica',
      type: 'string',
      description: 'Ingrese la url canonica del formulario',
      default: ''
    },
    tiposDeNegocio: {
      title: 'Tipos de negocio',
      type: 'string',
      description: 'Tipos de negocio ej: "Kiosco, Almacén, Supermercado, etc"',
      default: 'Kiosco, Almacén, Supermercado, otros'
    }
  }
}
