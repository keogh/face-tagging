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
  const [isOpenTagModal, setIsOpenTagModal] = useState(false)
  const [tagModalProps, setTagModalProps] = useState({})
  const [labeledDescriptors, setLabeledDescriptors] = useState([])

  const appendItems = useCallback(
    values => {
      setItems([ ...items, ...values ])
    },
    [items]
  )

  const openTagModal = useCallback(
    (props = {}) => {
      setTagModalProps(props)
      setIsOpenTagModal(true)
    },
    []
  )

  const closeTagModal = useCallback(
    (props = {}) => {
      setTagModalProps({})
      setIsOpenTagModal(false)
    },
    []
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
      openTagModal,
      closeTagModal,
      labeledDescriptors,
      setLabeledDescriptors
    }),
    [
      items,
      appendItems,
      selectedItem,
      boxesResized,
      isProcessing,
      isOpenTagModal,
      openTagModal,
      closeTagModal,
      labeledDescriptors,
    ]
  )

  return (
    <ImagesDataContext.Provider value={contextValue}>
      <TagModal {...tagModalProps} />
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
