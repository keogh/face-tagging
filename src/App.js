import React, { useRef, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

import useFaceapi from './hooks/useFaceapi';
import { detectAllFaces } from './faceApi/index.js'

function App() {
  const inputRef = useRef()
  // console.log(faceapi.nets)

  const [faceapi, isLoadingModels] = useFaceapi()

  const handleChange = e => {
    console.log(e.target.files)

    // One way to get image to put in img
    console.log(URL.createObjectURL(e.target.files[0]))

    // Second way to get the image this gets the base64 string
    console.log('Ref files', inputRef.current.files)
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.addEventListener('load', () => {
      console.log('load')
      
      const image = new Image()
      image.src = reader.result
      faceapi
        .detectAllFaces(image)
        .withFaceLandmarks()
        .withFaceDescriptors()
        .then(result => console.log('faces', result))
    }, false)
  }

  return (
    <div>
      {isLoadingModels && (
        <div>
          <strong>Loading models....</strong>
        </div>
      )}
      <div>
        <input ref={inputRef} type="file" multiple onChange={handleChange}/>
      </div>
      <div>Panel</div>
    </div>
  );
}

export default App;
