import React from 'react'
import { NavPart2 } from './NavPart2'

export const Navbar = () => {
    return (
        <nav className="flex bg-emerald-600  py-5 items-center justify-between">
            <h2 className='text-2xl'>Anand raj Bind </h2>
            {/* a component inside <Navbar/> another component <NavPart2> */}
            <NavPart2 />
        </nav>)
}
