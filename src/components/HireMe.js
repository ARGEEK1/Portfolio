import React from 'react'
import { CircularText, WhatsappIcon } from './Icons'

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-48 flex items-center justify-center relative">
        <CircularText className="fill-dark animate-spin-slow" />
        <a href="https://wa.link/e759qs" target="_blank" className="flex items-center justify-center
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light
        shadow-md border border-solid border-dark w-16 h-16 p-2 rounded-full hover:bg-light hover:text-dark
        duration-300">
          <WhatsappIcon className={"m-1"}/>
        </a>
      </div>
    </div>
  )
}

export default HireMe