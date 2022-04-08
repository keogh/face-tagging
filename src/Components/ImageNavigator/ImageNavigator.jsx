import React, { useContext } from 'react'
import { ImagesDataContext } from '../ImagesDataContext'

import ImagesList from './ImagesList'

const ImageNavigator = () => {
  const { items } = useContext(ImagesDataContext)

  return (
    <div className="box-border flex flex-row">
      <div className="basis-1/4">
        <ImagesList images={items} />
      </div>
      <div className="basis-3/4">{!!items[0] && items[0].name}</div>
    </div>
  )
}

export default ImageNavigator
