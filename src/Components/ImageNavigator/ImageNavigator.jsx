import React from 'react'

import ImagesList from './ImagesList'

const ImageNavigator = () => {
  return (
    <div className="box-border flex flex-row">
      <div className="basis-1/4">
        <ImagesList images={[]} />
      </div>
      <div className="basis-3/4">Content</div>
    </div>
  )
}

export default ImageNavigator
