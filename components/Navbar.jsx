"use client"
import React from "react";
import { assets} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import ThemeToggle from '@/components/ThemeToggle';


const lexend = Lexend({ subsets: ["latin"], weight: ["400", "600"] });

const Navbar = () => {

  const { isSeller, router } = useAppContext();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700 dark:text-gray-200 dark:border-gray-600 dark:bg-black">
      <Image
        className="cursor-pointer w-28 md:w-32 block dark:hidden"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <Image
        src="/favicon-dark.ico" // optional dark version if you have it
        alt="QuickCart Logo Q Dark"
        width={34}
        height={34}
        className="hidden dark:block"
      />

      {/* Rest of the word */}
      <span
        className={`${lexend.className} ml-1 text-2xl font-semibold tracking-tight hidden dark:block`}
      >
        uickCart
      </span>
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}

         <ThemeToggle />
      </div>

      <ul className="hidden md:flex items-center gap-4">
        {/* Search Icon */}
        <div className="relative w-4 h-4">
          <Image
            src={assets.search_icon}
            alt="search icon light"
            className="w-4 h-4 block dark:hidden"
          />
          <Image
            src={assets.search_dark}
            alt="search icon dark"
            className="w-4 h-4 hidden dark:block"
          />
        </div>

        {/* User Icon + Text */}
        <button className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-300 transition">
          <div className="relative w-4 h-4">
            <Image
              src={assets.user_icon}
              alt="user icon light"
              className="w-4 h-4 block dark:hidden"
            />
            <Image
              src={assets.user_dark}
              alt="user icon dark"
              className="w-4 h-4 hidden dark:block"
            />
          </div>
          Account
        </button>
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        <button className="flex items-center gap-2 hover:text-gray-900 transition">
           <Image
              src={assets.user_icon}
              alt="user icon light"
              className="w-4 h-4 block dark:hidden"
            />
            <Image
              src={assets.user_dark}
              alt="user icon dark"
              className="w-4 h-4 hidden dark:block"
            />
          Account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;