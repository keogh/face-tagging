import { getFaceapi } from "../../faceApi"
import { FaceMatcher } from "../../faceApi/FaceMatcher"

export const processImages = (files, { labeledDescriptors = [] }) => {
  const processPromises = []
  for (let i = 0; i < files.length; i++) {
    processPromises.push(readImage(files[i]))
  }

  return new Promise((resolve, reject) => {
    Promise
      .all(processPromises)
      .then(
        items =>
          detectFaces({ items, labeledDescriptors, resolve, reject })
      )
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

async function detectFaces({ items, labeledDescriptors, resolve, reject }) {
  const processedImages = []
  try {
    console.log('Getting faceapi')
    const faceapi = await getFaceapi()
    let faceMatcher = await FaceMatcher({ labeledDescriptors })

    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      const { name, src } = item
      const image = new Image()
      image.src = src
  
      console.log('detecting faces for image ', i)
      const results = await faceapi
        .detectAllFaces(image)
        .withFaceLandmarks()
        .withFaceDescriptors()
      console.log('already detected faces')
      console.log('Result: ', results)

      const faces = results.map(r => {
        const { detection, descriptor } = r
        let face = {
          detection,
          label: null,
          distance: null,
          descriptor,
        }

        const { label, distance } = faceMatcher.add(face)
        face = {...face, label, distance }

        return face
      })
      
      processedImages.push({
        name,
        src,
        faceapi: results,
        faces,
      })
    }

    resolve({ images: processedImages, labeledDescriptors: faceMatcher.labeledDescriptors })
  } catch (err) {
    console.log('Error detecting faces')
    reject(err)
  }
}