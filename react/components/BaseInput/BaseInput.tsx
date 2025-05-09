import { IOMessage } from "vtex.native-types"
import { usePlaceholderMessage } from "../../hook/usePlaceholderMessage"
import {  getInputMode } from "../../utils"
import type {  FormFieldProps } from "../../typings/interfaces"
import { useCssHandles } from "vtex.css-handles"
import { defineMessages } from "react-intl"

// import { defineMessages } from "react-intl"

// const messages = defineMessages({
//   inputLabel: {
//     id: "store/form.input.label",
//     defaultMessage: "Ingrese su {name}",
//   },
//   inputPlaceholder: {
//     id: "store/form.input.placeholder",
//     defaultMessage: "Ingrese su {name}",
//   },
// })
const CSS_HANDLES = [
  'formLeadinputWrapper',
  'formLeadLabel',
  'formLeadInput',
  'formLeadInputError',
  'formLeadError'
]

      const messages = defineMessages({
        nombre: {
          id: 'store/form.label.nombre',
          defaultMessage: 'Title',
        },
        cuit: {
          id: 'store/form.label.cuit',
          defaultMessage: 'Subtitle',
        },
        email: {
          id: 'store/form.label.email',
          defaultMessage: 'Subtitle',
        },
        telefono: {
          id: 'store/form.label.telefono',
          defaultMessage: 'Subtitle',
        },
        provincia: {
          id: 'store/form.label.provincia',
          defaultMessage: 'Subtitle',
        },
        distrito: {
          id: 'store/form.label.distrito',
          defaultMessage: 'Subtitle',
        },
        tipoNegocio: {
          id: 'store/form.label.tipoNegocio',     
          defaultMessage: 'Subtitle', 
        },
        direccion: {
          id: 'store/form.label.direccion',
          defaultMessage: 'Subtitle',
        },
        document: {
          id: 'store/form.label.document',
          defaultMessage: 'Subtitle',
        },
        pdv: {
          id: 'store/form.label.pdv',
          defaultMessage: 'Subtitle',
        },
        localidad: {
          id: 'store/form.label.localidad',
          defaultMessage: 'Subtitle',
        },
        codigoPostal: {
          id: 'store/form.label.codigoPostal',
          defaultMessage: 'Subtitle',
        },
        altura: {
          id: 'store/form.label.altura',
          defaultMessage: 'Subtitle',
        },
        calle: {
          id: 'store/form.label.calle',
          defaultMessage: 'Subtitle',
        },
        entreCalles: {
          id: 'store/form.label.entreCalles',
          defaultMessage: 'Subtitle',
        },
        celular: {
          id: 'store/form.label.celular',
          defaultMessage: 'Subtitle',
        },
      })

const BaseInput: React.FC<FormFieldProps> = (props) => {
    const {
      name,
      type,
      value,
      error,
      onChange,
      onClick,
      pattern,
      required,
      minLength,
      maxLength,
      label = messages,
    } = props
      const {handles} = useCssHandles(CSS_HANDLES) 
    return (
      <div className={handles.formLeadinputWrapper}>
        <label className={handles.formLeadLabel} htmlFor={name}>
          <IOMessage id={label} />
        </label>
        <input
          className={`${handles.formLeadInput} ${
            error ? handles.formLeadInputError : ''
          }`}
          id={name}
          name={name}
          type={type}
          pattern={pattern}
          value={value}
          onChange={
            onChange
              ? (e) => {
                  onChange.inputchange(e as React.ChangeEvent<HTMLInputElement>)
                }
              : undefined
          }
          onClick={onClick?.handleInputClick(name)}
          onBlur={onChange?.handleInvalid}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          min={type === 'number' ? minLength : undefined}
          max={type === 'number' ? maxLength : undefined}
          placeholder={usePlaceholderMessage(name)}
          inputMode={getInputMode(type)}
        />
        {error && <p className={handles.formLeadError}>{error}</p>}
      </div>
    )
  }

  export default BaseInput