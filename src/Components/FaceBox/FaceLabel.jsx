import React from 'react'

const FaceLabel = ({ text, className = '' }) => (
  <div
    className={`
      px-2
      ml-2
      rounded-t
      text-sm
      text-neutral
      ${className}
    `}
  >
    {text}
  </div>
)

export default FaceLabel
