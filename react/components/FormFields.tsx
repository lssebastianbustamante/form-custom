import type React from 'react'
import { FormattedMessage } from 'react-intl'


import type {
  FieldType,
  FormFieldConfig,
  InputClickHandlers,
  SelectOption
} from '../typings/interfaces'
import * as LazyComponents from './lazyComponents'

import {  listadoTipoDeNegocios, mapProvincias } from '../utils'
import { mapDistritos } from '../utils/mapProvincias'
import { useCssHandles } from 'vtex.css-handles'
import LoadingFallback from './LoadingFallback'
import { FORM_FIELDS_ARG, FORM_FIELDS_COL, FORM_FIELDS_PE } from '../constants'

// Agregar después de las importaciones existentes
type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void
type SelectChangeHandler = (option: SelectOption) => void
type HandleInvalid = (e: React.InvalidEvent<HTMLInputElement>) => void

export interface FieldChangeHandlers {
  inputchange: InputChangeHandler
  selectchange: SelectChangeHandler
  handleInvalid: HandleInvalid
}

export interface FormFieldsProps {
  formData: Record<string, string>
  errors: Record<string, string>
  tiposDeNegocio: string
  createChangeHandlers: (fieldName: string) => FieldChangeHandlers
  createInputClickHandler: (fieldName: string) => InputClickHandlers
  handleBlur: (
    fieldName: string
  ) => (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  isValidFormToSubmit: () => boolean
  formState: {
    isSubmitting: boolean
  }
  country: string
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  dataDistricts: any
}

// Definir las claves posibles para los campos
type FieldName = 'tipoNegocio' | 'provincia' | 'distrito'



// Type guard para validar nombres de campo
const isValidFieldName = (name: string): name is FieldName => {
  return ['tipoNegocio', 'provincia', 'distrito'].includes(name)
}

const CSS_HANDLES = [
  'formLeadForm',
  'formLeadSubmitBtn',
  'formLeadError',
  'formLeadErrorGeneral'
]

const FormFields: React.FC<FormFieldsProps> = ({
  formData,
  errors,
  createChangeHandlers,
  createInputClickHandler,
  handleSubmit,
  isValidFormToSubmit,
  formState,
  country,
  tiposDeNegocio,
  dataDistricts
}) => {

      const {handles} = useCssHandles(CSS_HANDLES)

  const memoizedOptions = () => {
    return {
      tipoNegocio: listadoTipoDeNegocios(tiposDeNegocio),
      provincia: dataDistricts ? mapProvincias(dataDistricts) : undefined,
      distrito:
        country === 'PER' && formData.provincia && dataDistricts
          ? mapDistritos(dataDistricts, formData.provincia)
          : undefined
    }
  }

  // Conditional render para estado de carga
  if (formState.isSubmitting) {
    return <LoadingFallback />
  }

  const fields: FormFieldConfig[] = country === 'ARG'
    ? FORM_FIELDS_ARG.map(field => ({ ...field, type: field.type as FieldType }))
    : country === 'COL'
      ? FORM_FIELDS_COL.map(field => ({ ...field, type: field.type as FieldType }))
      : country === 'PER'
        ? FORM_FIELDS_PE.map(field => ({ ...field, type: field.type as FieldType }))
        : FORM_FIELDS_ARG.map(field => ({ ...field, type: field.type as FieldType }))

  return (
    <form className={handles.formLeadForm} onSubmit={handleSubmit}>
      {fields.map((field: FormFieldConfig) => {
        const fieldOptions =
          field.type === 'select' && isValidFieldName(field.name)
            ? memoizedOptions()[field.name]
            : undefined

        return (
          <LazyComponents.FormField
            key={field.name}
            {...field}
            value={formData[field.name]}
            error={errors[field.name]}
            onChange={createChangeHandlers(field.name)}
            maxLength={field.maxLength}
            minLength={field.minLength}
            required={field.required}
            min={field.type === 'number' ? field.minLength : undefined}
            max={field.type === 'number' ? field.maxLength : undefined}
            pattern={field.pattern}
            onClick={createInputClickHandler(field.name)}
            onBlur={createChangeHandlers(field.name).handleInvalid}
            options={fieldOptions}
          />
        )
      })}

      <button
        type="submit"
        className={handles.formLeadSubmitBtn}
        disabled={!isValidFormToSubmit()}
      >
        <FormattedMessage id="store/form-submit" defaultMessage="CONFIRMAR" />
      </button>

      {errors.submit && (
        <p
          className={`${handles.formLeadError} ${handles.formLeadErrorGeneral}`}
        >
          {errors.submit}
        </p>
      )}
    </form>
  )
}

export default FormFields
