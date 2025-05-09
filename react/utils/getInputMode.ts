import type { FieldType, InputMode } from "../typings/interfaces"

export const getInputMode = (type: FieldType): InputMode => {
  switch (type) {
    case 'email':
      return 'text'
    case 'number':
      return 'numeric'
    case 'checkbox':
      return 'text'
    default:
      return 'text'
  }
}