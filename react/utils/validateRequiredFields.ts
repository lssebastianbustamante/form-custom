interface ValidationResult {
    isValid: boolean
    message?: string
}

// Función para validar campos requeridos
export const validateRequiredFields = (
    formData: Record<string, string>,
    requiredFields: string[]
): ValidationResult => {
    const emptyFields = requiredFields.filter(field => !formData[field])

    if (emptyFields.length > 0) {
        return {
            isValid: false,
            message: `Los siguientes campos son requeridos: ${emptyFields.join(', ')}`
        }
    }

    return { isValid: true }
}