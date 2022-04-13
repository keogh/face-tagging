import React, { useEffect, useState, useRef } from 'react'
import Cropper from 'cropperjs'

const generateImage = ({ src, box, ref }) => {
  return new Promise((resolve) => {
    const image = ref
    image.src = src

    image.onload = function () {
      const { top: y, left: x, width, height } = box

      const newHeight = parseInt(height, 10)
      const newWidth = newHeight
      const newX = x + (width / 2) - (newWidth / 2)
      const newY = y + (height / 2) - (newHeight / 2)

      new Cropper(image, {
        data: {
          x: newX,
          y: newY,
          width: newWidth,
          height: newHeight,
        },
        ready() {
          const canvas = this.cropper.getCroppedCanvas({
            width: 80,
            height: 80,
          })
      
          resolve(canvas.toDataURL())
        },
      })
    }
  })
}

const FaceImage = ({ src, box }) => {
  const [thumbImage, setThumbImage] = useState('#')
  const imgRef = useRef()

  useEffect(
    () => {
      (async () => {
        const thumbImage = await generateImage({ src, box, ref: imgRef.current })
        setThumbImage(thumbImage)
      })()
    },
    [src, box]
  )

  return (
    <div className="w-[64px] h-[64px]">
      <div className="w-0 h-0 overflow-hidden">
        <img ref={imgRef} alt="hidden tool for cropping the content" />
      </div>
      <div className="w-[64px] h-[64px] rounded-full overflow-hidden">
        <img src={thumbImage} alt="Face thubnail" />
      </div>
    </div>
  )
}

export default FaceImage
