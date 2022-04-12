import React, { useCallback, useMemo, useState } from 'react'
import './App.css';

import ImageNavigator from './Components/ImageNavigator/ImageNavigator';
import FaceThubmnails from './Components/FaceThumbnails';
import FilesUploader from './Components/FilesUploader';
import { ImagesDataContext } from './Components/ImagesDataContext';
import Loading from './Components/Loading/Loading';
import TagModal from './Components/TagModal/TagModal';

function App() {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [boxesResized, setBoxesResized] = useState([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [isOpenTagModal, setIsOpenTagModal] = useState(true)

  const appendItems = useCallback(
    values => setItems([ ...items, ...values ]),
    [items]
  )

  const contextValue = useMemo(
    () => ({
      items,
      setItems,
      appendItems,
      selectedItem,
      setSelectedItem,
      boxesResized,
      setBoxesResized,
      isProcessing,
      setIsProcessing,
      isOpenTagModal,
      setIsOpenTagModal,
    }),
    [items, selectedItem, boxesResized, appendItems, isOpenTagModal]
  )

  return (
    <ImagesDataContext.Provider value={contextValue}>
      <TagModal />
      <Loading isOpen={isProcessing} />
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
