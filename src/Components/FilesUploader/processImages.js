import { getFaceapi } from "../../faceApi"

export const processImages = files => {
  const processPromises = []
  for (let i = 0; i < files.length; i++) {
    processPromises.push(readImage(files[i]))
  }

  return new Promise((resolve, reject) => {
    Promise.all(processPromises).then(values => detectFaces(values, resolve, reject))
  })
}

function readImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    
    const onLoad = () => {
      resolve({
        name: file.name,
        src: reader.result
      })
    }

    reader.addEventListener('load', onLoad)
    reader.addEventListener('error', reject)
    reader.readAsDataURL(file)
  })
}

async function detectFaces(items, resolve, reject) {
  const processedImages = []
  try {
    console.log('Getting faceapi')
    const faceapi = await getFaceapi()
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      const { name, src } = item
      const image = new Image()
      image.src = src
  
      console.log('detecting faces for image ', i)
      const result = await faceapi
        .detectAllFaces(image)
        .withFaceLandmarks()
        .withFaceDescriptors()
      console.log('already detected faces')
      
      processedImages.push({
        name,
        src,
        faceapi: result,
      })
    }

    resolve(processedImages)
  } catch (err) {
    console.log('Error detecting faces')
    reject(err)
  }
}