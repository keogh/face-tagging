import React, { useEffect, useState } from 'react'

import * as faceapi from 'face-api.js'

const useFaceapi = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function loadModels() {
      setIsLoading(true)
      
      // load models
      // await faceapi.nets.ageGenderNet.loadFromUri('/models')
      await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
      // await faceapi.nets.tinyFaceDetector.loadFromUri('/models')
      await faceapi.nets.faceRecognitionNet.loadFromUri('/models')
      await faceapi.nets.faceExpressionNet.loadFromUri('/models')
      await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
      // await faceapi.nets.faceLandmark68TinyNet.loadFromUri('/models')
      
      setIsLoading(false)
    }
    loadModels()
  }, [])

  return [faceapi, isLoading]
}

export default useFaceapi
