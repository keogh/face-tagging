import React, { useCallback, useContext, useEffect, useState } from 'react'
import Modal from 'react-modal'

import { ImagesDataContext } from '../ImagesDataContext'

Modal.setAppElement('#root')

const customStyles = {
  content: {
    width: 'auto',
    inset: 'auto',
    padding: 0,
  },
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 12,
  }
}

const updateFacesLabels = ({ items, previousLabel, newLabel }) => {
  const newItems = [...items]

  newItems.forEach(item => {
    if (!item.faces) return

    item
      .faces
      .filter(face => face.label === previousLabel)
      .forEach(face => face.label = newLabel)
  })

  return newItems
}
const updateBoxesResizedLabels = ({ items, previousLabel, newLabel }) => {
  const newItems = [...items]

  newItems
    .filter(face => face.label === previousLabel)
    .forEach(face => face.label = newLabel)

  return newItems
}

const TagModal = ({ faceLabel = ''}) => {
  const [value, setValue] = useState('')
  const {
    items,
    setItems,
    boxesResized,
    setBoxesResized,
    isOpenTagModal,
    closeTagModal,
  } = useContext(ImagesDataContext)

  useEffect(
    () => {
      if (faceLabel.match(/^Face \d*$/) !== null) {
        return
      }

      setValue(faceLabel)
    },
    [faceLabel]
  )

  const handleChangeInput = useCallback(
    ev => setValue(ev.target.value),
    []
  )

  const handleFocusInput = useCallback(
    ev => ev.currentTarget.select(),
    []
  )

  const handleSubmit = useCallback(
    ev => {
      ev.preventDefault()
      console.log('submit faceLabel', faceLabel)
      console.log('submit value', value)
      console.log('items', items)
      
      const newItems = updateFacesLabels({ items, previousLabel: faceLabel, newLabel: value })
      setItems([...newItems])

      const newBoxesResized = updateBoxesResizedLabels({
        items: boxesResized,
        previousLabel: faceLabel,
        newLabel: value,
      })
      setBoxesResized([...newBoxesResized])

      closeTagModal()
    },
    [
      faceLabel,
      value,
      items,
      setItems,
      boxesResized,
      setBoxesResized,
      closeTagModal,
    ]
  )

  const handleClickCancel = useCallback(
    () => {
      setValue('')
      closeTagModal()
    },
    [closeTagModal]
  )

  return (
    <Modal
      isOpen={isOpenTagModal}
      style={customStyles}
    >
      <div className="flex bg-white p-5">
        <form onSubmit={handleSubmit}>
          <div className="w-[328px]">
            <label>
              <span>Face Name</span>
              <div className="mt-2">
                <input
                  type="text"
                  value={value}
                  className={`
                    form-input
                    rounded
                    w-full
                    border-neutral
                    focus:border-secondary
                    focus:ring-0
                  `}
                  autoFocus
                  onFocus={handleFocusInput}
                  onChange={handleChangeInput}

                />
              </div>
            </label>
            <div className="mt-2 flex justify-between">
              <button
                className={`
                  p-2
                  bg-secondary
                  w-1/4
                  rounded
                  text-white
                `}
                type="submit"
              >
                Save
              </button>
              <button
                className={`
                  p-2
                  bg-neutral
                  w-1/4
                  rounded
                  text-black
                `}
                type="button"
                onClick={handleClickCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default TagModal
