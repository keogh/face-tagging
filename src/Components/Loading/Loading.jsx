import React from 'react'

const Loading = ({ isOpen = false }) => {
  if (!isOpen) return null

  return (
    <div
      className={`
        absolute
        w-screen
        h-screen
        bg-gray-900
        z-10
        opacity-90
      `}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div
            className={`
              animate-spin
              h-24
              w-24
              border
              rounded-full
              border
              border-t-0
              border-r-0
              border-l-2
              border-secondary
            `}
          />
          <div className="mt-7 text-secondary text-2xl animate-bounce">
            Processing
          </div>
          <div className="mt-7 text-secondary text-base animate-pulse">
            (Sorry, it takes a while)
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
