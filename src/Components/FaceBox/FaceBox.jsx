import React, { useCallback, useMemo, useState } from 'react'
import { Popover } from 'react-tiny-popover'

import FaceLabel from './FaceLabel'

const FaceBox = ({
  top,
  left,
  width,
  height,
  className = '',
  label,
  distance,
  onClick = null,
}) => {
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
  const handleClick = useCallback(
    () => {
      if (onClick) {
        onClick(label)
      }
    },
    [onClick, label]
  )

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
      onClick={handleClick}
    >
      <Popover
        isOpen
        positions={['top']}
        padding={-1}
        align="start"
        content={(
          <FaceLabel
            text={label}
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
