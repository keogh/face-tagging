import React, { useCallback, useContext } from 'react'

import { processImages } from './processImages'
import { ImagesDataContext } from '../ImagesDataContext';

const FilesUploader = () => {
  const {
    appendItems,
    selectedItem,
    setSelectedItem,
    setIsProcessing,
    labeledDescriptors,
    setLabeledDescriptors,
  } = useContext(ImagesDataContext)

  const handleChange = useCallback(
    async (ev) => {
      const files = ev.target.files
      if (!files || files.length === 0) {
        return;
      }
      
      console.log('labeledDescriptors', labeledDescriptors)
      setIsProcessing(true)
      const {
        images,
        labeledDescriptors: newLabeledDescriptors
      } = await processImages(files, { labeledDescriptors })
      appendItems(images)
      setLabeledDescriptors(newLabeledDescriptors)
      setIsProcessing(false)
      if (!selectedItem) {
        setSelectedItem(images[0])
      }
    },
    [
      appendItems,
      labeledDescriptors,
      setLabeledDescriptors,
      selectedItem,
      setSelectedItem,
      setIsProcessing,
    ]
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
