'use client'

import useHello from './hooks/useHello'
import Image from 'next/image'
import linked from '../../../../public/assets/Icons/LinkedinButton.svg'
import link from '../../../../public/assets/Icons//LinkedIn_2.svg'
export default function Hello({ slug }: { slug?: string }) {
  const { name, title, description, stats, profileImage, linkedin } = useHello(slug)

  return (
    <section className="bg-[#0D1321] text-white px-6 py-16 md:p-[120px] lg:py-[120px] lg:px-0 xl:p-[120px] justify-center items-center flex">
      <div className="flex flex-col lg:flex-row mx-auto items-center">


        {/* Content Mobile View content*/}
        <div className="flex-1 lg:hidden block pb-16 ">
          <h1 className="text-[39px] md:text-[49px] font-semibold md:leading-15 leading-12 mb-2">
            Hello, I’m <span className="text-orange-400">{name}</span>
          </h1>
          <p className="text-[16px] md:text-[20px] leading-[26px] md:leading-[32px] font-semibold text-gray-300 mb-4">
                        {title}
          </p>
          <p className="text-[13px] font-normal leading-5 text-gray-400 mb-6 max-w-2xl">{description}</p>

          <div className="flex flex-wrap gap-6 mt-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-start">
                <div className="text-[20px] text-[#FACC15] leading-7 font-normal">{stat.value}</div>
                <div className="text-[10px] font-normal leading-4 text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Profile Image with LinkedIn badge */}
        <div className="relative w-full lg:w-1/2 flex-shrink-0 group ">
          <Image
            src={profileImage}
            alt={name}
            width={500}
            height={500}
            className="rounded-xl object-cover"
          />
          {/* Slide-in LinkedIn Badge on Hover */}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 left-3 flex items-center gap-2 bg-[#0A66C2] px-3 py-2 rounded-sm text-white font-medium text-sm shadow-md transform transition-all duration-300 translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
          >
            <span>View my profile on</span>
            <Image src={link} alt="LinkedIn"  />

          </a>


          {/* Always-visible icon, smaller */}
          <div className="absolute bottom-3 left-3 group-hover:opacity-0 transition-opacity duration-300">
            <Image src={linked} alt="LinkedIn" />
          </div>

        </div>

        {/* Content */}
        <div className="flex-1 hidden lg:block">
          <h1 className="text-[39px] md:text-[49px] font-semibold md:leading-15 leading-12 mb-2">
            Hello, I’m <span className="text-orange-400">{name}</span>
          </h1>
          <div className="text-[16px] md:text-[20px] leading-[26px] md:leading-[32px] font-semibold text-gray-300 mb-4">
            {title.split('|').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}</div>
          <div className="text-[13px] font-normal leading-5 text-gray-400 mb-6 max-w-2xl">{description.split('|').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}</div>

          <div className="flex flex-wrap gap-6 mt-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-start">
                <div className="text-[20px] lg:text-2xl text-[#FACC15] leading-7 font-normal">{stat.value}</div>
                <div className="text-[10px] font-normal leading-4 text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
