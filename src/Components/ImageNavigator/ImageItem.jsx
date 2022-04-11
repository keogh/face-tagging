import React, { useCallback, useContext } from 'react'
import { ImagesDataContext } from '../ImagesDataContext'

const ImageItem = ({ image, index }) => {
  const { setSelectedItem } = useContext(ImagesDataContext)

  const handleClick = useCallback(
    () => setSelectedItem(image),
    [setSelectedItem]
  )

  return (
    <div
      onClick={handleClick}
      className="p-4 my-1 border border-gray-600 rounded cursor-pointer"
    >
      {image.name}
    </div>
  )
}

export default ImageItem
