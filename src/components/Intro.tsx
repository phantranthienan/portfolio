"use client"

import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import TypingEffect from '@/components/common/TypingEffect'

import { BsArrowRight } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Intro = () => {
  return (
    <section className="max-w-[40rem] text-center">
      <div className="flex items-center justify-center text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
          }}
        >
            <Image 
                src="/ThienAnPortrait.jpg" 
                alt="Thien An Portrait"
                width={200}
                height={200}
                quality="90"
                priority={true}
                className="h-32 w-32 rounded-full object-cover
                border-[0.4rem] border-white shadow-xl"
            />
        </motion.div>
      </div>

      <motion.p 
        className="mb-4 mt-4 px-4 text-sm font-geist-mono sm:text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          Hello, I'm Tran Thien An PHAN,
        </span> currently a {" "}
        <span className="font-bold">
          4th-year engineering student
        </span> at {" "}
        <a 
          href='https://insa-centrevaldeloire.fr/fr/'
          className="italic underline decoration-dashed underline-offset-2"
        >
          INSA Centre Val de Loire. 
        </a> 
        <br />
        I'm seeking {" "}
        <TypingEffect 
          texts={["a 4-month internship starting April 2025", "an apprenticeship for 2025-2026"]}
          delay={500}
        /> 
        <br />
        with a focus on {" "}
        <span className="font-bold"> Front-End </span> or {" "}
        <span className="font-bold">Full-Stack Development.</span>        
        <br />
        My core technical stack includes {" "}
        <span className="font-bold">
          React
        </span> and {" "}
        <span className="font-bold">
          Node.js
        </span>
      </motion.p>

      <motion.div 
        className="flex flex-col items-center justify-center sm:flex-row 
        gap-x-3 gap-y-1 px-4 text-xs sm:text-base font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          deplay: 0.1
        }}
      >
        <Link 
          href="#contact"
          className="group flex items-center gap-2
          bg-gray-900 px-5 py-2 text-white rounded-full outline-none
          hover:scale-110 active:scale-105 transition"
        >
          Contact me here <BsArrowRight className="group-hover:translate-x-1 transition"/>
        </Link>
        <a 
          href="/CV.pdf"
          download
          className="group flex items-center gap-2
          bg-white px-5 py-2 rounded-full border border-black/10 outline-none cursor-pointer
          hover:scale-110 active:scale-105 transition"
        >
          Download my CV <HiDownload className="group-hover:translate-y-1 transition"/>
        </a>
        <div className="flex gap-3">
          <a 
            href="https://www.linkedin.com/in/tran-thien-an-phan-398090221/"
            target="_blank"
            className="flex items-center gap-2
            bg-white p-3 rounded-full border border-black/10 cursor-pointer
            hover:scale-[1.15] active:scale-105 transition"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/phantranthienan"
            target="_blank"
            className="flex items-center gap-2
            bg-white p-3 rounded-full border border-black/10 cursor-pointer
            hover:scale-[1.15] active:scale-105 transition"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Intro