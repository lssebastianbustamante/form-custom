import React from 'react'

export const GoogleMapsProvider = React.lazy(() => import('./GoogleMapsProvider'))
export const ContainerForm = React.lazy(() => import('./ContainerForm'))
export const FormFields = React.lazy(() => import('./FormFields'))
export const Feedback = React.lazy(() => import('../components/Feedback/Feedback'))
export const FormLeadsModal = React.lazy(() => import('../components/FormLeadsModal'))
export const LoadingFallback = React.lazy(() => import('./LoadingFallback'))
export const GoogleErrorMessage = React.lazy(() => import('./GoogleErrorMessage'))
export const FormField = React.lazy(() => import('./FormField'))
export const SelectField = React.lazy(() => import('./SelectField/SelectField'))
export const BaseInput = React.lazy(() => import('./BaseInput/BaseInput'))
export const TermsCheckbox = React.lazy(() => import('./TermsCheckbox/TermsCheckbox'))