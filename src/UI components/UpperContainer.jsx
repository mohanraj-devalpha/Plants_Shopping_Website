import React from 'react'
import Pot from "../assets/Pot_101.png"
import Counter from "../components/Counter.jsx"
import Circle from "../assets/Font circle.png"

const UpperContainer = () => {
  return (
    <div className="relative px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="bg-[#F2F2F2] rounded-br-[200px] lg:rounded-br-[300px] space-y-10 px-8 md:px-16 lg:px-20 py-14">
          <div className="space-y-6">
            <div className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <h1>Bring <span className="text-[#437223]">GREEN</span> to</h1>
              <span>your home and</span>
              <p>make you feel <span className="text-[#437223]">BETTER</span></p>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl pr-6">
              Plants are essential for life on Earth, providing oxygen, food, and shelter. 
              They thrive through photosynthesis, converting sunlight into energy.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-lg md:text-2xl max-[400px]:grid-cols-1 ">
            <Counter end={123} duration={1000} />
            <Counter end={126} duration={1000} />
            <Counter end={76} duration={1000} />
            </div>

          <button className="bg-[#437223] text-amber-50 px-6 md:px-10 py-3 md:py-4 text-lg md:text-2xl rounded-full">
            Find your plant
          </button>
        </div>

        {/* Right Content (Images) */}
        <div className="relative flex justify-center">
          <img 
            src={Pot} 
            alt="Plant Pot" 
            className="w-3/4 md:w-2/3 lg:w-1/2 max-w-xs md:max-w-sm lg:max-w-md"
          />
          <img 
            src={Circle} 
            alt="Decorative Circle" 
            className="absolute top-5 md:top-10 right-5 md:right-10 w-1/3 md:w-1/4 lg:w-1/5 opacity-70"
          />
        </div>
      </div>
    </div>
  )
}

export default UpperContainer
