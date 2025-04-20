import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='py-7 bg-emerald-500 text-white flex  items-center justify-between'>
            
            <h2 className='text-2xl'>Anand <input type="text" className='bg-white text-black' /> </h2>
            {/* <div className='flex gap-10 '>
                <a  className='text-xl underline ' href="/">Home</a>
                <a className='text-xl underline ' href="/about">About</a>
                <a className='text-xl underline ' href="/contact">Contact</a>
                <a className='text-xl underline ' href="/product">Product</a>
            </div> */}

            
            <div className='flex gap-10 '>
                <Link   className='text-xl underline 'to="/">Home</Link>
                <Link  className='text-xl underline ' to="/about">About</Link>
                <Link  className='text-xl underline ' to="/contact">Contact</Link>
                <Link  className='text-xl underline ' to="/product">Product</Link>
            </div>
        </div>
    )
}
export default Header
