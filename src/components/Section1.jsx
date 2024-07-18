import React from 'react'
import Navb from './Navb'
import '../components/Section1.css'

const Section1 = () => {
  return (
    <div className='Container1'>
        <Navb />
        <div className='box1'>
            <div className='Side1'>
                <h1 className='title1'> Introduce Your Product Quickly & Effectively </h1>
                <p className='paragraph1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                <button className='btn1'>Purchase UI Kit</button>
                <button className='btn2'>Learn More</button>
            </div>
            <div className='side2'>
             <img src="Assets/designer_1.png"></img>

            </div>

        </div>
      
    </div>
  )
}

export default Section1
