import type React from 'react'

import type { FormFieldProps } from '../typings/interfaces'
import * as LazyComponents from './lazyComponents'







const FormField: React.FC<FormFieldProps> = (props) => {
  const { type } = props

  if (!type) {
    console.warn(`FormField: tipo no especificado para el campo ${props.name}`)
    return null
  }

  switch (type) {
    case 'select':
      return <LazyComponents.SelectField {...props} />
    case 'checkbox':
      return <LazyComponents.TermsCheckbox {...props} />
    case 'number':
      return <LazyComponents.BaseInput {...props} type="number" />
    case 'text':
      return <LazyComponents.BaseInput {...props} type="text" />
    case 'email':
      return <LazyComponents.BaseInput {...props} type="email" />

    default:
      return <LazyComponents.BaseInput {...props} />
  }
}

export default FormField
