import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        {/* left */}
        <div>
        <img className='mb-5 w-40'src={assets.logo} alt="" />
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis non dicta fugiat quas rerum, explicabo maxime aut vel quia quaerat debitis deserunt distinctio eaque et dolore? Distinctio quis hic quisquam.</p>
        </div>
        {/* center */}
        <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>privacy policy</li>
        </ul>     
        </div>
        {/* right */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91-630558854
                    2
                </li>
                <li>rakeshduppelli11@gmail.com</li>
            </ul>
        </div>

      </div>
      {/* copyrighttext */}
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
