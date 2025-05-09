import { FormattedMessage } from "react-intl"
import Select from 'react-select'
import { IOMessage } from "vtex.native-types"
import { usePlaceholderMessage } from "../../hook/usePlaceholderMessage"
import type { FormFieldProps, SelectOption } from "../../typings/interfaces"
import { colourStyles } from "../../utils"
import { useCssHandles } from "vtex.css-handles"



const CSS_HANDLES = [
  'formLeadLabel',
  'formLeadinputWrapper',
  'formLeadError'
]


const SelectField: React.FC<FormFieldProps> = ({
    name,
    value,
    error,
    onChange,
    required,
    label,
    options
  }) => {

          const {handles} = useCssHandles(CSS_HANDLES)

    if (!options?.length && name !== 'distrito') {
      return (
        <div className={handles.formLeadError}>
          <FormattedMessage
            id="store/form-select.noOptions"
            defaultMessage="No hay opciones disponibles"
          />
        </div>
      )
    }
  
    // Encontrar la opción seleccionada
    const selectedOption = options?.find((option) => option.value === value)
  
  
  
  
  
    return (
      <div className={handles.formLeadinputWrapper}>
        <label className={handles.formLeadLabel} htmlFor={name}>
          <IOMessage id={label} />
        </label>
        <Select
          styles={colourStyles}
          options={options}
          value={selectedOption || null}
          onChange={(option) => {
            onChange?.selectchange(option as SelectOption)
          }}
          onBlur={onChange?.handleInvalid}
          placeholder={usePlaceholderMessage(name)}
          required={required}
          key={`${name}-${value}`} // Forzar re-render cuando cambia el valor
        />
        {error && <p className={handles.formLeadError}>{error}</p>}
      </div>
    )
  }

  export default SelectField