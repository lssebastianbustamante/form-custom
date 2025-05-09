import { FormattedMessage } from "react-intl"
import type { FormFieldProps } from "../../typings/interfaces"
import { useCssHandles } from "vtex.css-handles"



const CSS_HANDLES = [
  'formLeadCheckbox',
  'formLeadCheckboxContainer',
  'formLeadCheckmark',
  'formLeadCheckmarkError',
  'formLeadCheckboxText',
  'formLeadCheckboxLink',
  'formLeadError'
]

const TermsCheckbox: React.FC<FormFieldProps> = ({
  name,
  type,
  value,
  error,
  onChange,
  onClick,
  required
}) => {

        const {handles} = useCssHandles(CSS_HANDLES)
  return (
    <label className={handles.formLeadCheckbox}>
      <div className={handles.formLeadCheckboxContainer}>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onBlur={onChange?.handleInvalid}
          onClick={onClick?.handleInputClick(name)}
          required={required}
        />
        <span
          className={`${handles.formLeadCheckmark} ${
            error ? handles.formLeadCheckmarkError : ''
          }`}
        />
      </div>
      <div className={handles.formLeadCheckboxText}>
        <FormattedMessage
          id="store/form.text.tyc"
          defaultMessage="Acepto el tratamiento de mis Datos Personales de conformidad con la"
        />{' '}
        <a
          className={handles.formLeadCheckboxLink}
          href="/privacy-policy"
          target="_blank"
          rel="noreferrer"
        >
          <FormattedMessage
            id="store/form.privacyPolicy.tyc"
            defaultMessage="Política de Privacidad"
          />
        </a>{' '}
        <FormattedMessage id="store/form.and.tyc" defaultMessage="y los" />{' '}
        <a
          className={handles.formLeadCheckboxLink}
          href="/terms-and-conditions"
          target="_blank"
          rel="noreferrer"
        >
          <FormattedMessage
            id="store/form.termsAndConditions.tyc"
            defaultMessage="Términos de Uso"
          />
        </a>{' '}
        <FormattedMessage
          id="store/form.ofThePlatform.tyc"
          defaultMessage="de la plataforma."
        />
      </div>
      {error && <p className={handles.formLeadError}>{error}</p>}
    </label>
  )
}

export default TermsCheckbox