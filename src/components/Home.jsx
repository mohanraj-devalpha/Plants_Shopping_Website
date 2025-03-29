import React from 'react'
import Circle from "../assets/Font circle.png"
import Ellipse_1 from "../assets/Ellipse_101.png"
import Ellipse_2 from "../assets/Ellipse_102.png"
import Ellipse_3 from "../assets/Ellipse_103.png"
import Pot from "../assets/Pot_101.png"
import Counter from "./Counter.jsx"

const Home = () => {
  return (
<<<<<<< HEAD
    <div className='flex flex-col space-y-10 border px-10 py-10 w-full '>
        <div className='grid grid-cols-2 justify-between'>
          <div className='bg-[#F2F2F2] rounded-br-[300px] space-y-15 px-20 py-30'>
=======
    <div className='flex flex-col space-y-10 border w-full  px-4 md:px-10 lg:px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center relative justify-between'>
          <div className='bg-[rgb(242,242,242)]  rounded-br-[300px] space-y-15 px-20 py-30'>
>>>>>>> d12fc7c (Padding changes)
          <div className='space-y-12'>
            <div className='text-6xl space-y-3 font-bold'>
              <h1 className=''>Bring  <span className='text-[#437223]'>GREEN</span> to</h1>
              <p>Your home and</p>
              <p>make you feel  <span className='text-[#437223]'>BETTER</span></p>
            </div>
            <p className='text-2xl pr-50'>Plants are essential for life on Earth, providing oxygen, food, and shelter. They thrive through photosynthesis, converting sunlight into energy</p>
          </div>
          <div className='grid grid-cols-3 text-2xl space-x-2  mr-45'>
            <Counter end={123} duration={1000} />
            <Counter end={126} duration={1000} />
            <Counter end={76} duration={1000} />
<<<<<<< HEAD

          </div>
          <button className='bg-[#437223] text-amber-50 px-18 py-5 text-2xl rounded-full'>Find your plant</button>
          </div>
          <div className='absolute right-60 top-55'>
=======
          </div>
          <button className='bg-[#437223] text-amber-50 px-18 py-5 text-2xl rounded-full'>Find your plant</button>
          </div>
          <div className='absolute max-[1300px]:hidden right-55 top-55'>
>>>>>>> d12fc7c (Padding changes)
            <img src={Pot} alt="" />
          </div>
          <div className='absolute right-55 top-45'>
            <img src={Circle} alt="" />
          </div>
        </div>
        {/* bottom cards */}
        <div className='grid grid-cols-3 mx-auto gap-4 py-10 px-10'>
            <div className='flex flex-rows-2 border rounded-2xl py-5 px-'>
                <img src={Ellipse_3} alt="" className='px-10 '/>
                <p className='py-5 content-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus</p>
            </div>
            <div className='flex flex-rows-2 border rounded-2xl py-5 px-'>
                <img src={Ellipse_2} alt="" className='px-10 '/>
                <p className='py-5 content-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus</p>
            </div>
            <div className='flex flex-rows-2 border rounded-2xl py-5 px-3'>
                <img src={Ellipse_1} alt="" className='px-10 '/>
                <p className='py-5 content-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus</p>
            </div>
<<<<<<< HEAD

        </div>
        
      
=======
        </div>
>>>>>>> d12fc7c (Padding changes)
    </div>
  )
}

export default Home
