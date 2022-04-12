import React, { useMemo, useState } from 'react'
import './App.css';

import ImageNavigator from './Components/ImageNavigator/ImageNavigator';
import FaceThubmnails from './Components/FaceThumbnails';
import FilesUploader from './Components/FilesUploader';
import { ImagesDataContext } from './Components/ImagesDataContext';

function App() {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [boxesResized, setBoxesResized] = useState([])

  const contextValue = useMemo(
    () => ({
      items,
      setItems,
      selectedItem,
      setSelectedItem,
      boxesResized,
      setBoxesResized,
    }),
    [items, selectedItem, boxesResized]
  )

  return (
    <ImagesDataContext.Provider value={contextValue}>
      <div className="container px-4">
        <div className="p-4">
          <FilesUploader />
        </div>
        
        <div className="p-4">
          <FaceThubmnails />
        </div>

        <ImageNavigator />
      </div>
    </ImagesDataContext.Provider>
  );
}

export default App;
