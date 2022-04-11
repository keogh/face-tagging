import React from 'react'

import ImageItem from './ImageItem'

const ImagesList = ({ images = [] }) => {
  return images.map((image, i) => (
    <div className="flex flex-col px-4" key={`image-item-${i}`}>
      <ImageItem image={image} index={i} />
    </div>
  ))
}

export default ImagesList
