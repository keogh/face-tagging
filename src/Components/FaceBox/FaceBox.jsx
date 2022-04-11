import React, { useMemo } from 'react'

const FaceBox = ({ top, left, width, height, className = '' }) => {
  const styleValues = useMemo(
    () => ({
      top,
      left,
      width,
      height,
    }),
    [top, left, width, height]
  )

  return <div
    className={`
      absolute
      border
      border-2
      border-primary
      hover:border-secondary
      rounded-md
      hover:cursor-pointer
      hover:scale-105
      ${className}
    `}
    style={styleValues}
  />
}

export default FaceBox
