import type { StylesConfig } from 'react-select'

export const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: '#f0eef2',
    borderRadius: '10px',
    border: 'none',
    textAlign: 'left',
    color: '#4f2170',
    padding: '0px 2px',
    marginTop: '10px',
    fontSize: '16px',
    lineHeight: '18.3px',
    fontWeight: '700',
    height: '40px',
    cursor: 'pointer'
  }),
  placeholder: (styles) => ({
    ...styles,

    color: '#4f2170'
  }),

  indicatorsContainer: (styles) => ({
    ...styles,
    '& svg': {
      fill: '#4f2170'
    }
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: 'none'
  }),
  singleValue: (styles) => ({
    ...styles,
    color: '#4f2170'
  }),
  input: (styles) => ({ ...styles, color: '#4f2170' }),
  option: (styles, state) => ({
    ...styles,
    color: state.isSelected ? 'white' : '#4f2170',
    textAlign: 'left',
    backgroundColor: state.isSelected ? '#4f2170' : 'white',
    ':hover': {
      backgroundColor: state.isSelected ? 'white' : '#4f2170',
      color: state.isSelected ? '#4f2170' : 'white'
    }
  })
}
