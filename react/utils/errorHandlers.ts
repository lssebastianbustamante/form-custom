import type { FormErrors } from '../typings/interfaces'

export const updateFieldError = (
    prev: FormErrors,
    fieldName: string,
    errorMessage: string
): FormErrors => {
    const { [fieldName]: _, ...rest } = prev;
    return {
        ...rest,
        error: prev.error,
        message: prev.message,
        [fieldName]: errorMessage
    };
};