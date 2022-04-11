import React, { useCallback, useEffect, useContext } from 'react'

import { ImagesDataContext } from '../ImagesDataContext'
import { getFaceapi } from '../../faceApi'
import ImagesList from './ImagesList'
import FaceBox from '../FaceBox'

const ImageNavigator = () => {
  const {
    items,
    selectedItem,
    boxesResized,
    setBoxesResized,
  } = useContext(ImagesDataContext)

  const handleLoadImage = useCallback(
    async (ev) => {
      const { width, height } = ev.target
      console.log(ev.target.width, ev.target.height)
      const faceapi = await getFaceapi()
      const resizedResults = faceapi.resizeResults(selectedItem.faceapi, { width, height })
      console.log('resizedResults', resizedResults)
      setBoxesResized(resizedResults)
    },
    [selectedItem]
  )

  return (
    <div className="box-border flex flex-row">
      <div className="basis-1/4">
        <ImagesList images={items} />
      </div>
      <div className={`
        relative
        basis-3/4
        border
        rounded
        border-gray-500
        h-[860px]
        max-h-[860px]
        overflow-hidden
      `}>
        {!!selectedItem && (
          <img
            src={selectedItem.src}
            className="h-[860px]"
            onLoad={handleLoadImage}
          />
        )}

        {!!boxesResized && boxesResized.map((face, i) => {
          const { top, left, width, height } = face.detection.box
          return (
            <FaceBox
              key={`face-box-${i}`}
              top={top}
              left={left}
              width={width}
              height={height}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ImageNavigator
