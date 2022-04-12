import React, { useContext } from 'react'

import FaceImage from './FaceImage'
import { ImagesDataContext } from '../ImagesDataContext'

const formatItems = items => {
  const faces = {}
  items
    .forEach(item => {
      item.faces.forEach(face => {
        if (!faces[face.label]) {
          faces[face.label] = []
        }

        faces[face.label].push({
          ...face,
          src: item.src,
        })
      })
    })
  return faces
}

const FaceThubmnails = () => {
  const { items } = useContext(ImagesDataContext)
  const faces = formatItems(items)
  console.log('faces: ', faces)

  return (
    <div className="flex flex-row p-4">
      {Object.keys(faces).map((faceLabel, i) => {
        const face = faces[faceLabel][0]
        
        return (
          <div
            key={`face-thumbnail-${i}`}
            className={`
              w-20
              ml-4
              text-sm
            `}
          >
            <div className="flex flex-col items-center">
              <FaceImage src={face.src} box={face.detection.box} />
              <div className="text-center">
                {face.label}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FaceThubmnails
