import React from 'react'
import Image from 'next/image'

import BentoCard from '@/components/common/BentoCard'
import flagForFrance from '@iconify-icons/twemoji/flag-for-france'

const About = () => {
  return (
    <section className="max-w-[50rem]">
      <h2
        className="text-2xl sm:text-4xl font-bold uppercase 
        tracking-widest text-center mb-8" 
      >
        about me
      </h2>
      <div
        className="grid grid-cols-2 gap-3 sm:grid-cols-3
        w-full sm:0-8"
      >
        <BentoCard colSpan={2}>
          <p className="text-sm text-justify font-geist-mono">
            A young {""}
            <span className="font-bold">Vietnamese</span> programmer with a {" "}
            <span className="font-bold">deep love for software development, </span> I've embarked on a journey to France to pursue my dreams in technology. {" "}
            <span className="font-bold">Hardworking, meticulous, and full of enthusiasm, </span> 
            I’m committed to honing my skills and contribute to the field.
          </p>
        </BentoCard>

        <BentoCard>
          Languages
        </BentoCard>

        <BentoCard colSpan={2}>
          <Image 
            src="/Logo_INSACVL.png"
            alt="INSA Centre Val de Loire"
            width={400}
            height={100}
            quality="100"
            priority={true}
            className="w-full object-contain"
          />
        </BentoCard>

        <BentoCard>
          Hobbies
        </BentoCard>

        <BentoCard>
          Song I Like
        </BentoCard>

        <BentoCard colSpan={2} className="flex flex-col items-center space-y-2">
          <p className="italic font-geist-mono text-center font-medium text-gray-700">
            &quot;People think that computer science is the art of geniuses 
            but the actual reality is the opposite, 
            just many people doing things that build on each other, 
            like a wall of mini stones.&quot;
          </p>
          <div className="flex items-center justify-center space-x-2 tracking-wider">
            <p className="text-gray-800">Donald Knuth</p>
            <span className='text-gray-500'>|</span>
            <p className='text-gray-800'>Computer Scientist</p>
          </div>
        </BentoCard>

      </div>
    </section>
  )
}

export default About