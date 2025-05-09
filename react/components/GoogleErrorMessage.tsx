import type { FC } from "react";

const ErrorMessage: FC<{ message: string }> = ({ message }) => (
    <div 
      style={{ 
        color: 'red', 
        width: '100%', 
        height: '150px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}
    >
      <h1>{message}</h1>
    </div>
  )

  export default ErrorMessage;