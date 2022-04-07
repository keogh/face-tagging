import React from 'react'

import ImageItem from './ImageItem'

const ImagesList = ({ images = [] }) => {
  return images.map((image, i) => (
    <div className="flex flex-col">
      <ImageItem key={`image-item-${i}`} index={i} />
    </div>
  ))
}

export default ImagesList
