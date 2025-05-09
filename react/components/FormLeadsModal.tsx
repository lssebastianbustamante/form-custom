import type React from 'react'
import { IOMessage } from 'vtex.native-types'
import { Close } from './icons'

import { useCssHandles } from 'vtex.css-handles'
import { defineMessages } from 'react-intl'

interface FormLeadsModalProps {
  children: React.ReactNode
  isOpen: boolean
  handleClose: () => void
  onModalClose: () => void
}

const CSS_HANDLES = [
  'popupContentContainer',
  'popupContentHeader',
  'formLeadTitle',
  'formLeadButtonClose',
  'formLeadSubtitle'
]



      const messages = defineMessages({
        modalTitle: {
          id: 'store/modal.title',
          defaultMessage: 'Title',
        },
        modalSubtitle: {
          id: 'store/modal.subTitle',
          defaultMessage: 'Subtitle',
        },
      })

const FormLeadsModal: React.FC<FormLeadsModalProps> = ({
  children,
  isOpen,
  handleClose
}) => {
  const { handles } = useCssHandles(CSS_HANDLES)
  if (!isOpen) return null

  return (
    <div className={handles.popupContentContainer}>
      <div className={handles.popupContentHeader}>
        <h2 className={handles.formLeadTitle}>
          <IOMessage id={messages.modalTitle.id} />
        </h2>
        <button
          type="button"
          className={handles.formLeadButtonClose}
          onClick={handleClose}
          aria-label="Cerrar modal"
        >
          <Close color="#EAAB5E" />
        </button>
        <p className={handles.formLeadSubtitle}>
          <IOMessage id={messages.modalSubtitle.id} />
        </p>
      </div>

      {children}
    </div>
  )
}

export default FormLeadsModal
