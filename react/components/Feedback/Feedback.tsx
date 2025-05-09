import type React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'

import { IOMessage } from 'vtex.native-types'
import { Close } from '../icons'

import { useCssHandles } from 'vtex.css-handles'

 const messages = defineMessages({
  feedbackTitle: {
    id: 'store/form.feedback.title',  
    defaultMessage: 'Title'
  },
  feedbackText: {
    id: 'store/form.feedback.text',
    defaultMessage: 'Subtitle'
  },
      })

interface FeedbackProps {
  handleClose: () => void
  title: string
  text: string
}
const CSS_HANDLES = [
  'containerBlockFeedback',
  'fallbackLeadTitle',
  'formLeadButtonClose',
  'feedbackLeadSubtitle',
  'buttonFeedback'
]
const Feedback: React.FC<FeedbackProps> = ({ 
  handleClose, 
  text = messages.feedbackText.id,
  title = messages.feedbackTitle.id, 
   }) => {
  const { handles } = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.containerBlockFeedback}>
      <h2 className={handles.fallbackLeadTitle}>
        <IOMessage id={title} />
      </h2>
      <button
        type="button"
        className={handles.formLeadButtonClose}
        onClick={handleClose}
        aria-label="Cerrar modal"
      >
        <Close color="#EAAB5E" />
      </button>
      <p className={handles.feedbackLeadSubtitle}>
        <IOMessage id={text} />
      </p>
      <button
        type="button"
        onClick={handleClose}
        className={handles.buttonFeedback}
      >
        <FormattedMessage
          id="store/form.feedback.button"
          defaultMessage="CONFIRMAR"
        />
      </button>
    </div>
  )
}
export default Feedback
