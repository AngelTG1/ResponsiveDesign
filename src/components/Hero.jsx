import React from 'react'
import man from '../assets/man.png'


function Hero() {
  return (
    <>  
    
        <section className='wrapper grid items-center text-white grid-cols-1 md:grid-cols-2 py-20'>
        <img className='  md:order-1' src={man} alt="" />

            <article className=' text-center md:text-start flex flex-col md:items-start  md:justify-normal gap-5' >
                <h1 className=' max-w-lg font-bold text-3xl md:text-4xl'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>

                <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad aspernatur ullam! Ipsum et illo ullam obcaecati nemo perspiciatis similique culpa eveniet.</p>
                <p>TAGUA GONZALEZ</p>

                <div className='flex w-full flex-col md:flex-row gap-4'>
                    <button className='bg-[#2274EA] w-full md:w-auto text-sm md:text-base  p-4 px-4 text-white rounded-md font-semibold' >Request Demo</button>
                    <button className='bg-[#334255] w-full md:w-auto text-sm md:text-base  p-4 px-4 text-white rounded-md font-semibold' >Explore Product</button>
                </div>
            </article>
 
  
        </section>
    </>
  )
}

export default Hero