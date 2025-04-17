import React from 'react'
import MainButton from '../common/MainButton'

function HeroSection() {
  return (
    <div>
        <div>
              <div  className="  ">
                 <div className=" ">
                    <p className="text-h1   font-medium  text-primary ml-96 pt-40">
                      Packgine - Simplifying Sustainable Packaging
                      <br />
                       <span className='text-center'></span>
                    </p>
                  </div>
                    <p className='text-secondary ml-6 pt-24 text-center' >
                    Empowering brands to adopt sustainable practices while inspiring consumers to make responsible choices for a better future. 
                    </p>
                    <div className='flex justify-center gap-[20px] xl:gap-[50px] pt-5 pb-5'>
                    <MainButton text="watch video" />
                    <MainButton text="Request a quoute" />
                    </div>
                    <div className='w-10 h-10 mx-auto mb-2 -pt-4'>
                   
                    </div>
                    <div className='ml-72'>
                      <img src="/images/Heroimg.png" alt="logo" />
                    </div>
              </div>
        
        </div>
        
    </div>
  )
}

export default HeroSection
