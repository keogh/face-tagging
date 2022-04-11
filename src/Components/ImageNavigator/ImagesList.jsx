import React, { useContext } from 'react'

import { ImagesDataContext } from '../ImagesDataContext'
import ImageItem from './ImageItem'

const ImagesList = ({ images = [] }) => {
  const { selectedItem } =  useContext(ImagesDataContext)

  return images.map((image, i) => (
    <div className="flex flex-col px-4" key={`image-item-${i}`}>
      <ImageItem image={image} index={i} active={image === selectedItem} />
    </div>
  ))
}

export default ImagesList
