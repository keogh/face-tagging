import React, { useCallback, useContext } from 'react'

import { processImages } from './processImages'
import { ImagesDataContext } from '../ImagesDataContext';

const FilesUploader = ({}) => {
  const {
    appendItems,
    selectedItem,
    setSelectedItem,
    setIsProcessing,
  } = useContext(ImagesDataContext)

  const handleChange = useCallback(
    async (ev) => {
      const files = ev.target.files
      if (!files || files.length === 0) {
        return;
      }
      
      setIsProcessing(true)
      const images = await processImages(files)
      appendItems(images)
      setIsProcessing(false)
      if (!selectedItem) {
        setSelectedItem(images[0])
      }
    },
    [appendItems]
  )

  return (
    <div>
      <label>
        Upload one or more photos:&nbsp;
        <input type="file" multiple onChange={handleChange} />
      </label>
    </div>
  )
}

export default FilesUploader
