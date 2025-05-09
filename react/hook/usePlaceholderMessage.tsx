import { defineMessages, useIntl } from 'react-intl'

const messages = defineMessages({
  placeHolderName: {
    id: 'store/form.placeholder.nombre',
    defaultMessage: 'Nombre'
  },
  placeHolderCuit: {
    id: 'store/form.placeholder.cuit',
    defaultMessage: 'CUIT'
  },
  placeHolderBusinessType: {
    id: 'store/form.placeholder.tipoNegocio',
    defaultMessage: 'Tipo de negocio'
  },
  placeHolderStreet: {
    id: 'store/form.placeholder.calle',
    defaultMessage: 'Calle'
  },
  placeHolderHeight: {
    id: 'store/form.placeholder.altura',
    defaultMessage: 'Altura'
  },
  placeHolderBetweenStreets: {
    id: 'store/form.placeholder.entreCalles',
    defaultMessage: 'Entre calles'
  },
  placeHolderPostalCode: {
    id: 'store/form.placeholder.codigoPostal',
    defaultMessage: 'Código postal'
  },
  placeHolderProvince: {
    id: 'store/form.placeholder.provincia',
    defaultMessage: 'Provincia'
  },
  placeHolderCity: {
    id: 'store/form.placeholder.localidad',
    defaultMessage: 'Localidad'
  },
  placeHolderPhone: {
    id: 'store/form.placeholder.telefono',
    defaultMessage: 'Teléfono'
  },
  placeHolderEmail: {
    id: 'store/form.placeholder.email',
    defaultMessage: 'Email'
  },
  placeHolderDireccion: {
    id: 'store/form.placeholder.direccion',
    defaultMessage: 'Dirección'
  },
  placeHolderDocument: {
    id: 'store/form.placeholder.document',
    defaultMessage: 'Número de documento'
  },
  placeHolderPdv: {
    id: 'store/form.placeholder.pdv',
    defaultMessage: 'Ingrese su punto de venta'
  },
  placeHolderDistrito: {
    id: 'store/form.placeholder.distrito',
    defaultMessage: 'Distrito'
  },
  placeHolderCelphone: {
    id: 'store/form.placeholder.celular',
    defaultMessage: 'Celular'
  }
})

export const usePlaceholderMessage = (fieldName: string) => {
  const intl = useIntl()
  if (!fieldName) return ''
  switch (fieldName) {
    case 'nombre':
      return intl.formatMessage(messages.placeHolderName)
    case 'cuit':
      return intl.formatMessage(messages.placeHolderCuit)
    case 'tipoNegocio':
      return intl.formatMessage(messages.placeHolderBusinessType)
    case 'calle':
      return intl.formatMessage(messages.placeHolderStreet)
    case 'altura':
      return intl.formatMessage(messages.placeHolderHeight)
    case 'entreCalles':
      return intl.formatMessage(messages.placeHolderBetweenStreets)
    case 'codigoPostal':
      return intl.formatMessage(messages.placeHolderPostalCode)
    case 'provincia':
      return intl.formatMessage(messages.placeHolderProvince)
    case 'localidad':
      return intl.formatMessage(messages.placeHolderCity)
    case 'telefono':
      return intl.formatMessage(messages.placeHolderPhone)
    case 'email':
      return intl.formatMessage(messages.placeHolderEmail)
    case 'direccion':
      return intl.formatMessage(messages.placeHolderDireccion)
    case 'document':
      return intl.formatMessage(messages.placeHolderDocument)
    case 'pdv':
      return intl.formatMessage(messages.placeHolderPdv)
    case 'celular':
      return intl.formatMessage(messages.placeHolderCelphone)
    case 'distrito':
      return intl.formatMessage(messages.placeHolderDistrito)
    default:
      return ''
  }
}