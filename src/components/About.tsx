import React from 'react'
import Image from 'next/image'

import BentoCard from '@/components/common/BentoCard'
import SectionHeading from './common/SectionHeading'
import { Icon } from '@iconify/react'

const About = () => {
  return (
    <section className="max-w-[52rem]">
      <SectionHeading>
        about me
      </SectionHeading>

      <div
        className="grid grid-cols-2 gap-3 sm:grid-cols-3
        w-full sm:0-8"
      >
        <BentoCard 
          className="col-span-2 flex items-center justify-center order-1"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-xs sm:text-sm font-geist-mono">
            A young {""}
            <span className="font-bold">Vietnamese</span> programmer with a {" "}
            <span className="font-bold">deep love for software development, </span> I&apos;ve embarked on a journey to France to pursue my dreams in technology. {" "}
            <span className="font-bold">Hardworking, meticulous, and full of enthusiasm, </span> 
            I’m committed to honing my skills and contribute to the field.
          </p>
        </BentoCard>

        <BentoCard 
          className="flex flex-col justify-evenly gap-y-2 order-3 sm:order-2"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex gap-x-2 items-center">
            <Icon icon="flag:vn-4x3" width={40} />
            <p className="text-[0.6rem] min-[400px]:text-xs">
              <span className="font-bold text-xs min-[400px]:text-sm">Vietnamese</span>
              <br />
              Mother tongue, nailed it! 💅
            </p>
          </div>
          <div className="flex gap-x-2 items-center">
            <Icon icon="flag:sh-4x3" width={40} /> 
            <p className="text-[0.6rem] min-[400px]:text-xs">
              <span className="font-bold text-xs min-[400px]:text-sm">English</span> 
              <br />
              Second language, fluent! 🌍
            </p>
          </div>
          <div className="flex gap-x-2 items-center">
            <Icon icon="flag:fr-4x3" width={40} />
            <p className="text-[0.6rem] min-[400px]:text-xs">
              <span className="font-bold text-xs min-[400px]:text-sm">French</span>
              <br />
              Use every day, still learning! 📚

            </p>
          </div>
        </BentoCard>

        <BentoCard 
          className="col-span-2 flex items-center justify-center order-2 sm:order-3"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Image 
            src="/images/Logo_INSACVL.png"
            alt="INSA Centre Val de Loire"
            width={400}
            height={100}
            quality="100"
            priority={true}
            className="w-full object-contain"
          />
        </BentoCard>

        <BentoCard
          className='flex items-center justify-center order-4'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image 
                src="/images/Football.png" 
                alt="Football" 
                height={100} 
                width={100}
                className="w-full aspect-square bg-emerald-100 rounded-2xl"
              />
            </div>
            <div>
              <Image 
                src="/images/Badminton.png" 
                alt="Badminton" 
                height={100} 
                width={100}
                className="w-full aspect-square bg-fuchsia-100 rounded-2xl"
              />
            </div>
            <div>
              <Image 
                src="/images/Gym.png" 
                alt="Gym" 
                height={100} 
                width={100}
                className="w-full aspect-square bg-fuchsia-100 rounded-2xl"
              />
            </div>
            <div>
              <Image 
                src="/images/PingPong.png" 
                alt="PingPong" 
                height={100} 
                width={100}
                className="w-full aspect-square bg-emerald-100 rounded-2xl"
              />
            </div>
          </div>
        </BentoCard>

        <BentoCard
          className="order-6 col-span-2 sm:col-span-1 sm:order-5 "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Song I Like
        </BentoCard>

        <BentoCard 
          className="col-span-2 gap-y-2 order-5 sm:order-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="italic font-geist-mono text-center font-medium text-gray-700 text-xs sm:text-sm">
            &quot;People think that computer science is the art of geniuses 
            but the actual reality is the opposite, 
            just many people doing things that build on each other, 
            like a wall of mini stones.&quot;
          </p>
          <div className="flex items-center justify-center space-x-2 tracking-wider text-sm sm:text-base">
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