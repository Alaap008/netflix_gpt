import React from 'react'
import { Play, Info } from 'lucide-react';

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="flex items-center my-4 md:m-0">
        <button className="flex items-center bg-white text-black py-2 md:py-3 px-4 md:px-8 text-xl rounded-lg hover:bg-opacity-80">
          <Play size={20} className="mr-1" /> Play
        </button>
        <button className="hidden md:flex items-center ml-4 bg-gray-500/50 text-white py-2 md:py-3 px-4 md:px-8 text-xl rounded-lg">
          <Info size={20} className="mr-1" />
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
