import * as faceapi from 'face-api.js'

// export const detectAllFaces = async (faceapi, image) => {
//   const results = await faceapi.detectAllFaces(image)
//   return results
// }

export const getFaceapi = async () => {
  // load models
  // await faceapi.nets.ageGenderNet.loadFromUri('/models')
  await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
  // await faceapi.nets.tinyFaceDetector.loadFromUri('/models')
  await faceapi.nets.faceRecognitionNet.loadFromUri('/models')
  await faceapi.nets.faceExpressionNet.loadFromUri('/models')
  await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
  // await faceapi.nets.faceLandmark68TinyNet.loadFromUri('/models')

  return faceapi
}
