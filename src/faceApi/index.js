export const detectAllFaces = async (faceapi, image) => {
  const results = await faceapi.detectAllFaces(image)
  return results
}

