import * as React from 'react'

function Icon({ color = '#EAAB5E' }) {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="15" cy="14.7177" rx="12" ry="11.2978" fill={color} />
      <path
        d="M17.8965 19.7822L12.1339 14.3568L17.8965 8.93139"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14.5" cy="14.5" r="14.5" fill={color} />
      <path
        d="M18 21L11.0368 14.0368L18 7.07366"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14.5" cy="14.5" r="14.5" fill={color} />
      <path
        d="M9 8.00002L21.7742 20.7742M9 20.7742L21.7742 8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Icon
