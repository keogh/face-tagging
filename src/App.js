import React from 'react'
import './App.css';

import ImageNavigator from './Components/ImageNavigator/ImageNavigator';
import FilesUploader from './Components/FilesUploader';

function App() {
  return (
    <div className="container px-4">
      <div className="p-4">
        <FilesUploader />
      </div>
      
      <ImageNavigator />
    </div>
  );
}

export default App;
