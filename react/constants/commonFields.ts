export const COMMON_FIELDS = {
    nombre: {
        name: 'nombre',
        type: 'text',
        label: 'store/form.label.nombre',
        required: true,
        pattern: '[a-zA-Z ]*',
        minLength: 5,
        maxLength: 50
    },
    email: {
        name: 'email',
        type: 'email',
        label: 'store/form.label.email',
        required: true,
    },
    provincia: {
        name: 'provincia',
        type: 'select',
        label: 'store/form.label.provincia',
        required: true,
        minLength: 5,
        maxLength: 50
    },
    tyc: {
        name: 'tyc',
        type: 'checkbox',
        label: 'store/form-terms',
        required: true
    }
}
