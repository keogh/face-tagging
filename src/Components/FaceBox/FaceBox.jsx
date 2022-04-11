import React, { useCallback, useMemo, useState } from 'react'
import { Popover } from 'react-tiny-popover'

import FaceLabel from './FaceLabel'

const FaceBox = ({ top, left, width, height, className = '' }) => {
  const [isHover, setIsHover] = useState(false)

  const styleValues = useMemo(
    () => ({
      top,
      left,
      width,
      height,
    }),
    [top, left, width, height]
  )

  const handleMouseEnter = useCallback(() => setIsHover(true), [])
  const handleMouseLeave = useCallback(() => setIsHover(false), [])
  console.log(isHover)

  return (
    <div
      className={`
        absolute
        hover:cursor-pointer
        hover:scale-105
      `}
      style={styleValues}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Popover
        isOpen
        positions={['top']}
        padding={-1}
        align="start"
        content={(
          <FaceLabel
            text="test"
            className={`${isHover ? 'bg-secondary' : 'bg-primary'}`}
          />
        )}
      >
        <div
          className={`
            border
            border-2
            border-primary
            hover:border-secondary
            rounded-md
            w-full
            h-full
            ${className}
          `}
        />
      </Popover>
    </div>
  )
}

export default FaceBox
