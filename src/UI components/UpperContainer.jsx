import React from 'react'
import Pot from "../assets/Pot_101.png"
import Counter from "../components/Counter.jsx"
import Circle from "../assets/Font circle.png"

const UpperContainer = () => {
  return (
    <div>
        <div className='grid grid-cols-2 justify-between'>
          <div className='bg-[#F2F2F2] rounded-br-[300px] space-y-15 px-20 py-30'>
          <div className='space-y-12'>
            <div className='text-6xl space-y-3 font-bold'>
              <h1 className=''>Bring  <span className='text-[#437223]'>GREEN</span> to your home</h1>
              
              <p>make you feel  <span className='text-[#437223]'>BETTER</span></p>
            </div>
            <p className='text-2xl pr-50'>Plants are essential for life on Earth, providing oxygen, food, and shelter. They thrive through photosynthesis, converting sunlight into energy</p>
          </div>
          <div className='grid grid-cols-3 text-2xl space-x-2  mr-45'>
            <Counter end={123} duration={1000} />
            <Counter end={126} duration={1000} />
            <Counter end={76} duration={1000} />
          </div>
          <button className='bg-[#437223] text-amber-50 px-18 py-5 text-2xl rounded-full'>Find your plant</button>
          </div>
          <div className='absolute right-55 top-55'>
            <img src={Pot} alt="" className=''/>
          </div>
          <div className='absolute right-55 top-45'>
            <img src={Circle} alt="" />
          </div>
        </div>
      
    </div>
  )
}

export default UpperContainer
