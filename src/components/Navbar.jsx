import React from 'react'
import { useState } from 'react'
import menuH from '../assets/menu.svg'
import close from '../assets/close.svg'

export const Navbar = () => {
    const [menu, setMenu] = useState(false)


    const toggleMenu = () => {
        setMenu(!menu)
    }


    console.log('Se renderizó el Navbar')

    return (
        <>
            <header className='bg-[#334255]'>
                <nav className='wrapper h-20 flex items-center justify-between'>
                    <a className='w-1/3 max-w-[140px]' >
                        <h1 className='text-white font-bold text-xl'>logo</h1>
                    </a>
    
                    <button onClick={toggleMenu} className='z-10 md:hidden'>
                        <img className='max-w-[50px]' src={menu ? close : menuH} alt="Menu" />
                    </button>
    
                    <div className={`fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 transition-transform duration-300 transform ${menu ? 'translate-x-0' : 'translate-x-full'} md:static md:translate-x-0 md:bg-none`}>
                        <ul className='absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-6 shadow-2xl font-medium md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static md:text-white'>
                            <li>
                                <a className='cursor-pointer '>cursos</a>
                            </li>
                            <li>
                                <a className='cursor-pointer ' >cursos</a>
                            </li>
                            <li>
                                <a className='cursor-pointer '>cursos</a>
                            </li>
                            <li>
                                <a className='cursor-pointer '>cursos</a>
                            </li>
                            <li>
                                <a className='cursor-pointer '>cursos</a>
                            </li>
                        </ul>
                    </div>
                    <button className=" hidden lg:block bg-[#2274EA] p-2 px-4 text-white rounded-md font-semibold" >Request Demo</button>
                </nav>
            </header>
        </>
    )
}

