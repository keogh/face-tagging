import React, { useMemo, useState } from 'react'
import './App.css';

import ImageNavigator from './Components/ImageNavigator/ImageNavigator';
import FilesUploader from './Components/FilesUploader';
import { ImagesDataContext } from './Components/ImagesDataContext';

function App() {
  const [items, setItems] = useState([])
  const contextValue = useMemo(
    () => ({
      items,
      setItems,
    }),
    [items]
  )

  return (
    <ImagesDataContext.Provider value={contextValue}>
      <div className="container px-4">
        <div className="p-4">
          <FilesUploader />
        </div>
        
        <ImageNavigator />
      </div>
    </ImagesDataContext.Provider>
  );
}

export default App;
