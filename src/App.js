import React, { useRef } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const inputRef = useRef()

  const handleChange = e => {
    console.log(e.target.files)

    // One way to get image to put in img
    console.log(URL.createObjectURL(e.target.files[0]))

    // Second way to get the image this gets the base64 string
    console.log('Ref files', inputRef.current.files)
    const reader = new FileReader();
    console.log('reader result', reader.result)
    console.log(reader.readAsDataURL(e.target.files[0]))
    console.log('reader result', reader.result)
    reader.addEventListener('load', () => {
      console.log('load')
      console.log('reader result', reader.result)
    }, false)
  }

  return (
    <div>
      <div>
        <input ref={inputRef} type="file" multiple onChange={handleChange}/>
      </div>
      <div>Panel</div>
    </div>
  );
}

export default App;
