import * as faceapi from 'face-api.js'

// export const detectAllFaces = async (faceapi, image) => {
//   const results = await faceapi.detectAllFaces(image)
//   return results
// }

export const getFaceapi = async () => {
  // load models

  // await faceapi.nets.ageGenderNet.loadFromUri('/models')

  if (!faceapi.nets.ssdMobilenetv1.isLoaded) {
    console.log('loading ssdMobilenetv1')
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
  }

  // await faceapi.nets.tinyFaceDetector.loadFromUri('/models')

  if (!faceapi.nets.faceRecognitionNet.isLoaded) {
    console.log('loading faceRecognitionNet')
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models')
  }

  if (!faceapi.nets.faceExpressionNet.isLoaded) {
    console.log('loading faceExpressionNet')
    // await faceapi.nets.faceExpressionNet.loadFromUri('/models')
  }

  if (!faceapi.nets.faceLandmark68Net.isLoaded) {
    console.log('loading faceLandmark68Net')
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
  }
  // await faceapi.nets.faceLandmark68TinyNet.loadFromUri('/models')

  return faceapi
}
