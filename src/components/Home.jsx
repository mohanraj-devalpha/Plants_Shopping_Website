import React from 'react'
import Circle from "../assets/Font circle.png"
import Ellipse_1 from "../assets/Ellipse_101.png"
import Ellipse_2 from "../assets/Ellipse_102.png"
import Ellipse_3 from "../assets/Ellipse_103.png"
import Pot from "../assets/Pot_101.png"
import Counter from "./Counter.jsx"
import BottomCards from '../UI components/BottomCards.jsx'
import UpperContainer from '../UI components/UpperContainer.jsx'

const Home = () => {
  return (
    <div className='flex flex-col space-y-10 border overflow-x-hidden'>
        <UpperContainer />
        <BottomCards />
    </div>
  )
}

export default Home
