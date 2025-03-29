import React from 'react';
import Ellipse_1 from "../assets/Ellipse_101.png";
import Ellipse_2 from "../assets/Ellipse_102.png";
import Ellipse_3 from "../assets/Ellipse_103.png";

const BottomCards = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 py-10 px-6'>
        <div className='flex flex-row border rounded-2xl p-5 items-center'>
          <img src={Ellipse_3} alt="" className='w-20 h-20 object-contain mr-4' />
          <p className='py-2 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus</p>
        </div>
        <div className='flex flex-row border rounded-2xl p-5 items-center'>
          <img src={Ellipse_2} alt="" className='w-20 h-20 object-contain mr-4' />
          <p className='py-2 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus</p>
        </div>
        <div className='flex flex-row border rounded-2xl p-5 items-center'>
          <img src={Ellipse_1} alt="" className='w-20 h-20 object-contain mr-4' />
          <p className='py-2 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus</p>
        </div>
      </div>
    </div>
  );
};

export default BottomCards;
