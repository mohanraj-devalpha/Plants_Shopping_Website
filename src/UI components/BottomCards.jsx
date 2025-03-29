import React from 'react'
import Ellipse_1 from "../assets/Ellipse_101.png"
import Ellipse_2 from "../assets/Ellipse_102.png"
import Ellipse_3 from "../assets/Ellipse_103.png"

const BottomCards = () => {
  return (
    <div>
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
        </div>
      
    </div>
  )
}

export default BottomCards
