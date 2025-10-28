import type React from 'react'


import { useCssHandles } from '../hook/useCssHandles'


interface ContainerFormProps {
  backgroundContainer: string
  titleBlock: string
  subTitleBlock: string
  textButton: string
  handleOpen: () => void

}

const CSS_HANDLES = [
  'formLeadBannerContainerArg',
  'containerBlockInfoForm',
  'titleInfoForm',
  'subTitleInfoForm',
  'buttonOpenModal'
]

const ContainerForm: React.FC<ContainerFormProps> = ({
  backgroundContainer,
  titleBlock,
  subTitleBlock,
  textButton,
  handleOpen
}) => { 
  
          const {handles} = useCssHandles(CSS_HANDLES)
  
  return (
  <div
    className={handles.formLeadBannerContainerArg}
    style={{ backgroundColor: backgroundContainer }}
  >
    <div className={handles.containerBlockInfoForm}>
      <p className={handles.titleInfoForm}>
        {titleBlock}
      </p>
      <p className={handles.subTitleInfoForm}>
        {subTitleBlock}
      </p>
      <button
        type="button"
        className={handles.buttonOpenModal}
        onClick={handleOpen}
      >
        {textButton}
      </button>
    </div>
  </div>
)
}
export default ContainerForm