'use client'

import { FaArrowRightLong } from 'react-icons/fa6'
import useSaas from './hooks/useSaas'
import Image from 'next/image'

export default function Saas() {
  const { heading, subheading, cta, pillars } = useSaas()

  return (
    <section className="bg-black text-white px-6 py-16 md:p-[120px]">
      <div className="flex flex-col lg:flex-row lg:items-center  lg:justify-between mb-16 gap-6 lg:gap-0">
        <div className='lg:w-[35%]'>
          <h2 className="text-3xl leading-9 tracking-[-0.62px] md:text-4xl font-semibold md:leading-11 max-w-xl md:tracking-normal">{heading.split('|').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}</h2>
        </div>
        <div className="lg:px-9 text-gray-400 mt-2 max-w-3xl font-normal leading-[22px] md:leading-7 text-[14px] md:text-[16px] lg:w-[50%]">{subheading.split('|').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}</div>
        <a
          href={cta.link}
          className="lg:w-[15%] w-[50%] bg-[#FF9900] flex justify-center items-center gap-3 transition text-black font-medium px-5 py-3 rounded shadow text-sm"
        >
          {cta.text} <span><FaArrowRightLong size={15} /></span>
        </a>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto ">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="flex flex-col items-start text-left rounded-md p-5 ">
            <Image width={24} height={32}
              src={pillar.icon}
              alt={pillar.title}
              className="w-7 h-7 mb-3"
            />
            <h3 className={`font-semibold text-[16px] lg:text-xl leading-[26px] mb-2 ${pillar.color}`}>
              {pillar.title.split('|').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
            </h3>
            <div className="text-gray-400  text-[13px] leading-5">{pillar.description.split('|').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
