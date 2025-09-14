import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'

import { Lexend } from "next/font/google";


const lexend = Lexend({ subsets: ["latin"], weight: ["400", "600"] });

const Navbar = () => {

  const { router } = useAppContext()

  return (
 <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b dark:bg-gray-800'>
  {/* Light mode logo */}
  <Image
    onClick={() => router.push('/')}
    className='w-28 lg:w-32 cursor-pointer block dark:hidden'
    src={assets.logo}
    alt="QuickCart Logo Light"
  />

  {/* Dark mode logo */}
  <div className="hidden dark:flex items-center">
    <Image
      src="/favicon.png"
      alt="QuickCart Logo Dark"
      width={34}
      height={34}
    />
    <span
      className={`${lexend.className} ml-0 text-2xl font-semibold tracking-tight dark:text-white`}
    >
      uickCart
    </span>
  </div>
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar