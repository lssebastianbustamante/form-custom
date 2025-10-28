import { COMMON_FIELDS } from './commonFields'

export const REQUIRED_FIELDS_ARG = [
    'nombre',
    'cuit',
    'tipoNegocio',
    'calle',
    'altura',
    'codigoPostal',
    'localidad',
    'provincia',
    'telefono',
    'email',
    'tyc'
] as const;
export const REQUIRED_FIELDS_COL = [
    'nombre',
    'document',
    'pdv',
    'direccion',
    'provincia',
    'celular',
    'email',
    'tyc'
] as const;
export const REQUIRED_FIELDS_PE = [
    'nombre',
    'document',
    'pdv',
    'direccion',
    'provincia',
    'distrito',
    'celular',
    'email',
    'tyc'
] as const;
export const ERROR_DEFAULT = {
    message: '',
    error: ''
} as const;

export const FORM_FIELDS_ARG = [
    COMMON_FIELDS.nombre,
    {
        name: 'cuit',
        type: 'text',
        label: 'store/form.label.cuit',
        required: true,
        pattern: '\\d{2}-\\d{8}-\\d{1}[0-9]*',
        minLength: 13,
        maxLength: 13
    },
    {
        name: 'tipoNegocio',
        type: 'select',
        label: 'store/form.label.tipoNegocio',
        required: true,
        minLength: 5,
    },
    {
        name: 'calle',
        type: 'text',
        label: 'store/form.label.calle',
        required: true,
        pattern: '[a-zA-Z 0-9]*',
        minLength: 5,
        maxLength: 50
    },
    {
        name: 'altura',
        type: 'number',
        label: 'store/form.label.altura',
        pattern: '\\d*',
        required: true,
        minLength: 1,
        maxLength: 4
    },
    {
        name: 'entreCalles',
        type: 'text',
        label: 'store/form.label.entreCalles',
        pattern: '[a-zA-Z 0-9]*',
        minLength: 5,
        maxLength: 50
    },
    {
        name: 'codigoPostal',
        type: 'number',
        label: 'store/form.label.codigoPostal',
        pattern: '\\d{4}',
        required: true,
        minLength: 1000,
        maxLength: 9999
    },
    {
        name: 'localidad',
        type: 'text',
        label: 'store/form.label.localidad',
        required: true,
        pattern: '[a-zA-Z 0-9]*',
        minLength: 5,
        maxLength: 50
    },

    COMMON_FIELDS.provincia,
    {
        name: 'telefono',
        type: 'number',
        label: 'store/form.label.telefono',
        required: true,
        pattern: '\\d{10}',
        maxLength: 9999999999,
        minLength: 1000000000
    },
    COMMON_FIELDS.email,
    COMMON_FIELDS.tyc
]

export const FORM_FIELDS_COL = [
    COMMON_FIELDS.nombre,

    {
        name: 'document',
        type: 'number',
        label: 'store/form.label.document',
        required: true,
        pattern: '\\d*',

    },
    {
        name: 'pdv',
        type: 'text',
        label: 'store/form.label.pdv',
        required: true,
        pattern: '[a-zA-Z 0-9]*',
        minLength: 5,
        maxLength: 50
    },
    {
        name: 'celular',
        type: 'number',
        label: 'store/form.label.telefono',
        required: true,
        pattern: '\\d{9}',
        maxLength: 999999999,
        minLength: 100000000
    },
    COMMON_FIELDS.email,
    COMMON_FIELDS.provincia,
    COMMON_FIELDS.tyc
]

export const FORM_FIELDS_PE = [
    COMMON_FIELDS.nombre,

    {
        name: 'document',
        type: 'number',
        label: 'store/form.label.document',
        required: true,
        pattern: '\\d*',
        minLength: 10000,
        maxLength: 999999999
    },
    {
        name: 'pdv',
        type: 'text',
        label: 'store/form.label.pdv',
        required: true,
        pattern: '[a-zA-Z 0-9]*',
        minLength: 5,
        maxLength: 50
    },
    {
        name: 'celular',
        type: 'number',
        label: 'store/form.label.telefono',
        required: true,
        pattern: '\\d{9}',
        maxLength: 999999999,
        minLength: 100000000
    },
    COMMON_FIELDS.email,

    {
        name: 'direccion',
        type: 'text',
        label: 'store/form.label.direccion',
        required: true,
        pattern: '[a-zA-Z 0-9]*',
        minLength: 5,
        maxLength: 50
    },
    COMMON_FIELDS.provincia,
    {
        name: 'distrito',
        type: 'select',
        label: 'store/form.label.distrito',
        required: true,
        minLength: 5,
    },
    COMMON_FIELDS.tyc
]