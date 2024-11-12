"use client"
import React from 'react'
import { motion } from 'framer-motion'

import Link from 'next/link'

import { links } from '@/lib/data'

const Header = () => {
  return (
    <header className="z-[999] relative">
        <motion.div
            className="fixed top-0 left-1/2 h-[4.5rem] w-full 
            rounded-none border border-white bg-white bg-opacity-80 shadow-lg shadow-black/[0.08] backdrop-blur-[0.5rem] 
            sm:top-6 sm:h-12 sm:w-[36rem] sm:rounded-full"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>

        <nav 
            className='fixed top-[0.15rem] left-1/2 h-[4.35rem] -translate-x-1/2 w-full
            sm:top-6 sm:py-0 sm:h-12 sm:w-[36rem]'
        >
            <ul 
                className="flex flex-wrap items-center justify-center
                w-[20rem] mx-auto h-full 
                font-medium text-sm text-gray-500
                sm:flex-nowrap sm:gap-6"
            >
                {links.map((link) => (
                    <motion.li 
                        key={link.hash}
                        className="flex items-center justify-center"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <Link 
                            href={link.hash}
                            className="flex items-center justify-center
                            w-full px-[0.8rem] 
                            hover:text-gray-950 transition" 
                        >
                            {link.name}
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Header