import type { IntlShape } from 'react-intl'
import { defineMessages, useIntl } from 'react-intl'
import { useCallback } from 'react'

// Tipos de error posibles
export type ValidationErrorType =
  | 'required'
  | 'pattern'
  | 'minLength'
  | 'maxLength'
  | 'typeMismatch'
  | 'rangeOverflow'
  | 'rangeUnderflow'
  | 'termAndConditions'
  | 'selectEmpty'

// Mensajes genéricos de validación
const validationMessages = defineMessages({
  required: {
    id: 'store/form.error.required',
    defaultMessage: 'El campo {fieldName} no puede estar vacío'
  },
  termAndConditions: {
    id: 'store/form.error.tyc',
    defaultMessage: 'Debe aceptar los términos y condiciones'
  },
  minLength: {
    id: 'store/form.error.minLength',
    defaultMessage: 'El campo {fieldName} debe tener al menos {min} caracteres'
  },
  maxLength: {
    id: 'store/form.error.maxLength',
    defaultMessage:'El campo {fieldName} debe tener como máximo {max} caracteres'
  },

  rangeOverflowAltura: {
    id: 'store/form.error.altura.rangeOverflow',
    defaultMessage: 'El campo {fieldName} debe tener un valor entre {min} y {max}'
  },
  rangeUnderflowAltura: {
    id: 'store/form.error.altura.rangeUnderflow',
    defaultMessage: 'El campo {fieldName} debe tener un valor minimo {min}'
  },
  rangeOverflowCodigoPostal: {
    id: 'store/form.error.codigoPostal.rangeOverflow',
    defaultMessage: 'El campo {fieldName} no puede tener mas de 4 caracteres'
  },
  rangeUnderflowCodigoPostal: {
    id: 'store/form.error.codigoPostal.rangeUnderflow',
    defaultMessage: 'El campo {fieldName} debe tener 4 caracteres'
  },
  rangeUnderflowTelefono: {
    id: 'store/form.error.telefono.rangeUnderflow',
    defaultMessage: 'El campo {fieldName} debe 10 caracteres'
  },
  rangeOverflowTelefono: {
    id: 'store/form.error.telefono.rangeOverflow',
    defaultMessage: 'El campo {fieldName} no puede tener mas de 10 caracteres'
  }
})

// Mensajes específicos por campo
const fieldMessages = defineMessages({
  errorMessageName: {
    id: 'store/form.error.nombre',
    defaultMessage: 'El campo {fieldName} no puede estar vacío'
  },
  errorMessageCuit: {
    id: 'store/form.error.cuit',
    defaultMessage: 'El campo {fieldName} no puede estar vacío'
  },
  errorMessageBusinessType: {
    id: 'store/form.error.tipoNegocio',
    defaultMessage: 'El campo {fieldName} no puede estar vacío'
  },
  errorMessageStreet: {
    id: 'store/form.error.calle',
    defaultMessage: 'El campo {fieldName} no puede estar vacío'
  },
  errorMessageHeight: {
    id: 'store/form.error.altura',
    defaultMessage: 'El campo {fieldName} no puede estar vacío'
  },
  errorMessagePostalCode: {
    id: 'store/form.error.codigoPostal',
    defaultMessage: 'El campo {fieldName} no puede estar vacío'
  },
  errorMessageProvince: {
    id: 'store/form.error.provincia',
    defaultMessage: 'El campo {fieldName} no puede estar vacío'
  },
  errorMessageCity: {
    id: 'store/form.error.localidad',
    defaultMessage: 'El campo {fieldName} no puede estar vacío'
  },
  errorMessagePhone: {
    id: 'store/form.error.telefono',
    defaultMessage: ' El campo {fieldName} no puede estar vacío'
  },
  errorMessageEmail: {
    id: 'store/form.error.email',
    defaultMessage: ' El campo {fieldName} no es un email válido'
  },
  errorMessageTyc: {
    id: 'store/form.error.tyc',
    defaultMessage: 'Debe aceptar los términos y condiciones'
  },
  errorMessageDocument: {
    id: 'store/form.error.document',
    defaultMessage: 'El campo Documento no puede estar vacío'
  },
  errorMessagePdv: {
    id: 'store/form.error.pdv',
    defaultMessage: ' El campo Punto de venta no puede estar vacío'
  }
})

export const useErrorMessage = () => {
  const intl = useIntl()

  const getErrorMessage = useCallback(
    (
      fieldName: string,
      errorType?: ValidationErrorType,
      params?: { min?: number; max?: number; value?: string }
    ): string => {
      if (!fieldName || !errorType) return ''
      if (errorType) {
        switch (errorType) {
          case 'required': {
            if (fieldName === 'tyc') {
              return intl.formatMessage(validationMessages.termAndConditions)
            }
            if (fieldName === 'pdv') {
              return intl.formatMessage(fieldMessages.errorMessagePdv)
            }
            return intl.formatMessage(validationMessages.required, {
              fieldName: fieldName
            })
          }
          case 'minLength':
            return intl.formatMessage(validationMessages.minLength, {
              fieldName: fieldName,
              min: params?.min
            })
          case 'maxLength':
            return intl.formatMessage(validationMessages.maxLength, {
              fieldName: fieldName,
              max: params?.max
            })

          case 'pattern':
            return getFieldErrorMessage(fieldName, intl)
          case 'rangeOverflow': {
            if (fieldName === 'altura') {
              return intl.formatMessage(
                validationMessages.rangeOverflowAltura,
                {
                  fieldName: intl.formatMessage({
                    id: 'store/form.label.altura',
                    defaultMessage: 'El campo {fieldName} no puede estar vacío'
                  }),
                  min: params?.min,
                  max: params?.max
                }
              )
            }

            if (fieldName === 'codigoPostal') {
              return intl.formatMessage(
                validationMessages.rangeOverflowCodigoPostal
                
              )
            }
            if (fieldName === 'telefono') {
              return intl.formatMessage(
                validationMessages.rangeOverflowTelefono
                
              )
            }
            return ''
          }
          case 'rangeUnderflow': {
            if (fieldName === 'altura') {
              return intl.formatMessage(
                validationMessages.rangeUnderflowAltura
                
              )
            }
            if (fieldName === 'codigoPostal') {
              return intl.formatMessage(validationMessages.rangeUnderflowCodigoPostal)
              
            }
            if (fieldName === 'telefono') {
              return intl.formatMessage(validationMessages.rangeUnderflowTelefono)
            }
            return ''
          }
          case 'selectEmpty': {
            return intl.formatMessage(validationMessages.required, {
              fieldName: fieldName
            })
          }

          default:
            return ''
        }
      }
      return ''
    },
    [intl]
  )

  return { getErrorMessage }
}

// Helper function para obtener mensajes específicos por campo
const getFieldErrorMessage = (fieldName: string, intl: IntlShape): string => {
  switch (fieldName) {
    case 'nombre':
      console.log('typeMismatch', intl)
      return intl.formatMessage(fieldMessages.errorMessageName)
    case 'cuit':
      return intl.formatMessage(fieldMessages.errorMessageCuit, {
        fieldName: fieldName.toUpperCase()
      })
    case 'tipoNegocio':
      return intl.formatMessage(fieldMessages.errorMessageBusinessType)
    case 'calle':
      return intl.formatMessage(fieldMessages.errorMessageStreet)
    case 'altura':
      return intl.formatMessage(fieldMessages.errorMessageHeight)
    case 'codigoPostal':
      return intl.formatMessage(fieldMessages.errorMessagePostalCode)
    case 'provincia':
      return intl.formatMessage(fieldMessages.errorMessageProvince)
    case 'localidad':
      return intl.formatMessage(fieldMessages.errorMessageCity)
    case 'telefono':
      return intl.formatMessage(fieldMessages.errorMessagePhone)
    case 'email':
      return intl.formatMessage(fieldMessages.errorMessageEmail)
    case 'tyc':
      return intl.formatMessage(fieldMessages.errorMessageTyc)
    case 'document':
      return intl.formatMessage(fieldMessages.errorMessageDocument)
    case 'pdv':
      return intl.formatMessage(fieldMessages.errorMessagePdv)

    default:
      return ''
  }
}
