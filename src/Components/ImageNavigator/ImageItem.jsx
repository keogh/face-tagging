import React, { useCallback, useContext } from 'react'
import { ImagesDataContext } from '../ImagesDataContext'

const ImageItem = ({ image, active = false }) => {
  const { setSelectedItem } = useContext(ImagesDataContext)

  const handleClick = useCallback(
    () => setSelectedItem(image),
    [setSelectedItem, image]
  )

  return (
    <div
      onClick={handleClick}
      className={`
        p-3
        my-1
        border
        border-gray-600
        rounded
        cursor-pointer
        bg-${active ? 'primary' : 'white'}
        text-${active ? 'white' : 'black'}
        text-sm
      `}
    >
      {image.name}
    </div>
  )
}

export default ImageItem
