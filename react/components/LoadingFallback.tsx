import type React from 'react'
import { memo } from 'react'

import { Spinner } from 'vtex.styleguide'

const LoadingFallback = memo(() => (
  <div
  style={{
    padding: '20px',
    width: '100%',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
>
  <Spinner height="48" width="48" />
</div>
))

export default LoadingFallback
