import type { Props, ActionMeta, GroupBase } from 'react-select';

// Tipos
export type InputMode = 'text' | 'email' | 'tel' | 'numeric'
export type FieldType =
  | 'text'
  | 'email'
  | 'select'
  | 'checkbox'
  | 'number'

export type ErrorType = FormErrors

export interface FormFieldConfig {
  name: string;
  type: FieldType;
  label: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
}

export interface InputClickHandlers {
  handleInputClick: (name: string) => (e: React.MouseEvent<HTMLInputElement>) => void;
}
// Props
export interface FormFieldProps {
  label: string
  name: string
  type: FieldType
  value: string
  error?: ErrorType['message']
  onChange?: {
    inputchange: (e: React.ChangeEvent<HTMLInputElement>) => void
    selectchange: (option: SelectOption) => void
    handleInvalid: (e: React.InvalidEvent<HTMLInputElement>) => void
  }
  onSelect?: SelectOption
  options?: SelectOption[]
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  onBlur?: any
  onClick?: {
    handleInputClick: (name: string) => (e: React.MouseEvent<HTMLInputElement>) => void
  };
  onInvalid?: (e: React.FormEvent<HTMLInputElement>) => void
  pattern?: string
  required?: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  placeholder?: string
}
export interface CssHandles {
  [key: string]: string;
}

export interface SelectOption {
  label?: string;
  value?: string;
  distrito?: string[];
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  styles?: any;
  disabled?: boolean;
}

export interface BaseFormData {
  nombre?: string;
  email?: string;
  provincia?: string;
  tyc?: string; // Cambiado de boolean a string
}

export interface ArgentinaFormData extends BaseFormData {
  cuit?: string;
  tipoNegocio?: string;
  telefono?: string;
  entreCalles?: string;
  calle?: string;
  altura?: string;
  codigoPostal?: string;
  localidad?: string;
}

export interface ColombiaFormData extends BaseFormData {
  celular?: string;
  ciudad?: string;
  calle?: string;
}

export interface PeruFormData extends BaseFormData {
  distrito?: string;
  celular?: string;
  calle?: string;

}

export type FormData = ArgentinaFormData | ColombiaFormData | PeruFormData;

export interface SelectChangeEvent {
  label: string;
  value: string;
}

export type OnSelectChange = (
  newValue: SelectChangeEvent,
  actionMeta: ActionMeta<SelectOption>
) => void;

export type SelectProps = Props<SelectOption, false, GroupBase<SelectOption>>;

export interface LeadRegisterPropsArg {
  country?: string;
  dataEntity: string;
  backgroundContainer?: string;
  titleBlock?: string;
  subTitleBlock?: string;
  textButton?: string;
  canonicalUrl?: string;
  tiposDeNegocio?: string;
}

export type DataLeadsArg = {
  nombre: string;
  cuit: string;
  tipoNegocio: string;
  calle: string;
  altura: string;
  entreCalles: string;
  codigoPostal: string;
  localidad: string;
  provincia: string;
  telefono: string;
  email: string;
  tyc: boolean;
};

export interface ProvinciaData {
  provincias: ProvinciaProps[];
}

export interface ProvinciaProps {
  nombre: string;
  id?: string;
  distritos?: string[];
}

export interface FormErrors {
  error: string;
  message: string;
  [key: string]: string;
}

export enum STATUS {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  FINISH = 'FINISH',
  ERROR = 'ERROR'
}

export interface FormState {
  isSubmitting: boolean;
  hasSubmitted: boolean;
  isOpen: boolean;
  status: STATUS;
}