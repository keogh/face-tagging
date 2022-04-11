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
      const faceapi = await getFaceapi()

      const resizedFaceBoxes = faceapi.resizeResults(selectedItem.faces, { width, height })
      setBoxesResized(resizedFaceBoxes)
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
          const { label, distance } = face
          return (
            <FaceBox
              key={`face-box-${i}`}
              top={top}
              left={left}
              width={width}
              height={height}
              label={label}
              distance={distance}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ImageNavigator
