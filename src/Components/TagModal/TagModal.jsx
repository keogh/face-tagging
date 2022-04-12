import React, { useCallback, useContext } from 'react'
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
  }
}

const TagModal = () => {
  const { isOpenTagModal, setIsOpenTagModal } = useContext(ImagesDataContext)

  const handleClickCancel = useCallback(
    () => setIsOpenTagModal(false),
    []
  )

  const handleClickSave = useCallback(
    () => {},
    []
  )

  return (
    <Modal
      isOpen={isOpenTagModal}
      style={customStyles}
    >
      <div className="flex bg-white p-5">
        <div className="w-[328px]">
          <label>
            <span>Face Name</span>
            <div className="mt-2">
              <input
                type="text"
                className={`
                  form-input
                  rounded
                  w-full
                  border-neutral
                  focus:border-secondary
                  focus:ring-0
                `}
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
              onClick={handleClickSave}
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
              onClick={handleClickCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default TagModal
