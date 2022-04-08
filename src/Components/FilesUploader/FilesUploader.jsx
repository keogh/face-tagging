import React, { useCallback, useContext } from 'react'
import { connect } from 'react-redux'

import { setItems as setItemsAction } from '../../slices/imagesSlice'
import { processImages } from './processImages'
import { ImagesDataContext } from '../ImagesDataContext';

const FilesUploader = ({}) => {
  const { setItems } = useContext(ImagesDataContext)

  const handleChange = useCallback(
    async (ev) => {
      const files = ev.target.files
      if (!files || files.length === 0) {
        return;
      }
      
      const images = await processImages(files)
      console.log('images', images)
      setItems(images)
    },
    [ setItems ]
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

export default connect(
  state => ({}),
  // { setItems: setItemsAction }
  {}
)(FilesUploader)
