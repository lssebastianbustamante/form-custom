import type React from 'react'
import { Suspense, useState, useEffect } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useRuntime } from 'vtex.render-runtime'


import * as LazyComponents from './components/lazyComponents'
import type { LeadRegisterPropsArg } from './typings/interfaces'
import { STATUS } from './typings/interfaces'
import { useFormLead } from './hook/useFormLead'

import { schemaForm } from './schema/schemaForm'

import './FormLeads.css'
import FormContent from './components/FormContent'

import LoadingFallback from './components/LoadingFallback'
import { Feedback } from './components/lazyComponents'
import { CountryCode, DEFAULT_PROPS, loadDistricts } from './constants/initialState'



const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  try {
    return <>{children}</>
  } catch (error) {
    console.error('Error en FormLeads:', error)
    return <div>Error al cargar el formulario</div>
  }
}
const CSS_HANDLES = [
  'formLeadBannerContainerArg',
  'popupStyles',
  'popupContentStyles',
]
const FormLeads = ({
  dataEntity,
  backgroundContainer = DEFAULT_PROPS.backgroundContainer,
  titleBlock = DEFAULT_PROPS.titleBlock,
  subTitleBlock = DEFAULT_PROPS.subTitleBlock,
  textButton = DEFAULT_PROPS.textButton,
  canonicalUrl = DEFAULT_PROPS.canonicalUrl,
  tiposDeNegocio = DEFAULT_PROPS.tiposDeNegocio
}: LeadRegisterPropsArg) => {
  const { culture } = useRuntime()
  const country = culture.country
  const {handles} = useCssHandles(CSS_HANDLES)
  const formHook = useFormLead({canonicalUrl, dataEntity, country: country as CountryCode})
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [dataDistricts, setDataDistricts] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        setIsLoading(true)
        const districts = await loadDistricts(country)
        setDataDistricts(districts)
      } catch (error) {
        console.error('Error cargando distritos:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDistricts()
  }, [country])

  const renderContent = () => {
    if (formHook.formState.status === STATUS.FINISH) {
      return (
        <Feedback
          handleClose={formHook.handleClose}
          title="store/form.feedback.title"
          text="store/form.feedback.text"
        />
      )
    }

    if (isLoading) {
      return <LoadingFallback />
    }

    return country === 'ARG' ? (
      
      <LazyComponents.GoogleMapsProvider>
        <FormContent
          formHook={formHook}
          tiposDeNegocio={tiposDeNegocio}
          currentCountry={country}
          dataDistricts={dataDistricts}
        />
      </LazyComponents.GoogleMapsProvider>
    ) : (
      <FormContent
        formHook={formHook}

        tiposDeNegocio={tiposDeNegocio}
        currentCountry={country}
        dataDistricts={dataDistricts}
      />
    )
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className={handles.formLeadBannerContainerArg}>
        <Suspense fallback={<LoadingFallback />}>
          <LazyComponents.ContainerForm
            backgroundContainer={backgroundContainer}
            titleBlock={titleBlock}
            subTitleBlock={subTitleBlock}
            textButton={textButton}
            handleOpen={formHook.handleOpen}
          />
        </Suspense>

        {formHook.formState.isOpen && (
          <div className={handles.popupStyles}>
            <div className={handles.popupContentStyles}>
              <Suspense fallback={<LoadingFallback />}>
                <ErrorBoundary>{renderContent()}</ErrorBoundary>
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </Suspense>
  )
}

FormLeads.schema = schemaForm

export default FormLeads
