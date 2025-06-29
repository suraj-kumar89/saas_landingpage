'use client'

import Image from 'next/image'
import useAccelerate from './hooks/useAccelerate'
import { useState } from 'react'
import line from '../../../../public/assets/Svg/line.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import CustomDropdown from '@/_components/CustomDropdown'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Accelerate({ slug }: { slug?: string }) {
  const {
    heading,
    description,
    bullets,
    stats,
    formTitle,
    formSubtitle,
    formFields,
    cta,
  } = useAccelerate(slug)
const router = useRouter()

  const [formData, setFormData] = useState<Record<string, string>>({})
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  // Map formData keys to match HubSpot field names
const payload = {
  firstname: formData['Full Name'] || '',
  email: formData['Business Email'] || formData['Business email'] || formData['Email'] || '',  // capture all possible labels
  website: formData['Company Website URL'] || '',
  services: formData['Services'] || '',
  growth_blocker: formData["What’s blocking growth right now?"] || ''
}


  try {
    const res = await fetch('/api/submit-to-hubspot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await res.json()
    router.push('/thank-you') 
    console.log(data)
  } catch (err) {
    alert('❌ Submission failed. Try again.')
    console.error('Error submitting to HubSpot:', err)
  }
}


  return (
<section className="bg-black text-white flex flex-col lg:flex-row justify-center items-center p-6 md:p-[120px]">
      {/* Left Side */}
      <div className="w-full lg:w-[60%] mb-12 lg:mb-0 lg:pr-[40px] ">
        <h1 className="text-[32px] md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-semibold font-jakarta leading-12 md:leading-16 xl:leading-20 mb-6 relative flex flex-wrap">
          {heading.split(' ').map((word, idx) => {
            if (word === 'Revenue') {
              return (
                <span key={idx} className="relative inline-block ">
                  <span className="relative z-10">Revenue</span>
                  <Image
                    src={line}
                    alt="underline"
                    className="absolute left-0 -bottom-1 w-full  object-contain z-0"
                  />
                </span>
              )
            }
            if (['Expert', 'Performance','Digital', 'Marketing'].includes(word)) {
              return (
                <span key={idx} className="text-[#FF9900] mx-1">
                  {word}
                </span>
              )
            }
            return <span key={idx} className="mx-1">{word}</span>
          })}
        </h1>
        <p className="text-[#94A3B8] md:text-[16px] text-[14px] leading-[22px] md:leading-7 font-semibold mb-6 font-jakarta">{description}</p>

        <ul className="space-y-2 mb-8">
          {bullets.map((point, idx) => (
            <li key={idx} className="flex items-center gap-2 " >
              <span >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <circle cx="8" cy="8.5" r="8" fill="#FF9900" fillOpacity="0.2"/>
                  <circle cx="8" cy="8.5" r="4" fill="#FF9900"/>
                </svg>
              </span>
              <span className='text-[#94A3B8] font-normal md:text-[13px] text-[9px] md:leading-6 leading-[18px]'>{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex md:gap-20 gap-8 text-start">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="md:text-3xl text-2xl font-normal leading-8 md:leading-11 text-[#FACC15]">{stat.value}</div>
              <div className="md:text-md text-[13px] font-normal eading-[22px] md:leading-7 text-[#94A3B8]">{stat.label}</div>
            </div>
          ))}
        </div>


                    {/* CTA Button */}
          <div className='pt-6'>
            <Link href='/book-a-call'>
              <button
                type="submit"
                className=" flex justify-center items-center gap-3 md:hidden block w-full mt-4 bg-[#FF9900] hover:bg-[#FF9900] text-black font-semibold py-3 text-[13px] rounded-md transition"
              >
              Book a Call<span><FaArrowRightLong size={15} /></span>
            </button>
            </Link>
          </div>
      </div>

      {/* Right Side Form */}
      <div className="hidden md:block relative  w-full lg:w-[40%]  flex-1 p-8 rounded-xl shadow-lg text-white overflow-hidden bg-[#0F172A66] backdrop-blur-md">
        {/* ORANGE GLOW (top-right) */}
        <div className="absolute top-[-150px] right-[-150px] w-[455px] h-[250px] bg-[#FF9900] rounded-full opacity-25 blur-[200px] pointer-events-none z-0" />

        {/* BLUE GLOW (bottom-left) */}
        <div className="absolute bottom-[-150px] left-[-150px] w-[555px] h-[555px] bg-[#044cf6] rounded-full opacity-25 blur-[315px] pointer-events-none z-0" />

        {/* CONTENT */}
        <div className="relative z-10 ">
          <h2 className="text-2xl font-semibold leading-9 tracking-[-0.5px] mb-2">{formTitle}</h2>
          <p className="text-[10px] font-normal leading-[22px] text-[#94A3B8] mb-6">{formSubtitle}</p>

          <form className="space-y-7" onSubmit={handleSubmit}>
            {/* First row: Full Name + Business Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[formFields[0], formFields[1]].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm mb-3">
                    {field.label}
                    {field.required && <span className="text-[#A49670]">*</span>}
                  </label>
                  <input
                    required={field.required}
                    placeholder={field.placeholder}
                    className="w-full p-3 rounded-md bg-[#FFFFFF0F] text-[12px] font-normal leading-[22px] text-white  border-none focus:ring-0 focus:outline-none placeholder:text-[#94A3B880]"
                    onChange={(e) => setFormData({ ...formData, [field.label]: e.target.value })}
                  />
                </div>
              ))}
            </div>

            {/* Remaining Fields */}
            {formFields.slice(2).map((field, idx) => (
              <div key={idx}>
                <label className="block text-sm mb-3">
                  {field.label}
                  {field.required && <span className="text-[#A49670]">*</span>}
                </label>
                {field.label === 'Services' ? (
                  <CustomDropdown
                    value={formData[field.label] || ''}
                    onChange={(val) => setFormData({ ...formData, [field.label]: val })}
                  />
                ) : (
                  <>
                  {field.label === 'What’s blocking growth right now?' ? (
                      <textarea
                        rows={4}
                        placeholder={field.placeholder}
                        className="w-full p-3 rounded-md bg-[#FFFFFF0F] text-[12px] font-normal leading-[22px] text-white focus:ring-0 focus:outline-none placeholder:text-[#94A3B880] resize-none"
                        onChange={(e) => setFormData({ ...formData, [field.label]: e.target.value })}
                      />
                    ) : (
                      <input
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full p-3 rounded-md bg-[#FFFFFF0F] text-[12px] font-normal leading-[22px] text-white focus:ring-0 focus:outline-none placeholder:text-[#94A3B880]"
                        onChange={(e) => setFormData({ ...formData, [field.label]: e.target.value })}
                      />
                    )}
                  </>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-[#FF9900] hover:bg-[#FF9900] text-black font-semibold py-3 rounded-md transition cursor-pointer"
            >
            {cta} →
          </button>
        </form>
      </div>
      </div>

    </section>
  )
}
