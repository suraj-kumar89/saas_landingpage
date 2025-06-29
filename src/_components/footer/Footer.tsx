'use client'
import Image from "next/image"
import logo from '../../../public/logo.svg'
import Link from "next/link"
export default function Footer() {
  return (
    <footer className="w-full bg-[#02050E] text-white flex flex-col gap-9 md:gap-[50px] px-[24px] py-[32px] md:px-[120px] md:pt-[120px] md:pb-[60px] justify-center items-start">
      
      {/* Top CTA */}
      <div className="flex flex-row justify-between items-start md:items-center w-full border-b border-gray-700 gap-4 pb-8 md:pb-[60px]">
        <h2 className="text-[25px] md:text-4xl lg:text-6xl font-[600] leading-[33px] md:leading-[43px] text-white font-[Plus Jakarta Sans]">
          Got a great Idea?
        </h2>
        <Link href='/book-a-call'>
        <button className="border border-[#94A3B8] text-[#94A3B8] px-3 md:px-6 py-2 rounded-full text-sm whitespace-nowrap">
          Let’s chat
        </button>
        </Link>
      </div>

      {/* Middle: Contact Info + Socials */}
      <div className="w-full flex flex-row justify-between text-[13px] font-[400] text-[#94A3B8] leading-[20px] md:leading-[21.034px] font-[Plus Jakarta Sans] border-b border-gray-700 pb-8 md:pb-[50px]">
        
        {/* Left: Contact & Phone */}
        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <p className="mb-1 text-white text-[10px] uppercase tracking-widest font-[400]">Contact</p>
            <p>hello@shitanshudigital.com</p>
          </div>
          <div>
            <p className="mb-1 text-white text-[10px] uppercase tracking-widest font-[400]">Phone</p>
            <p>+91 82871 24652</p>
          </div>
        </div>

        {/* Right: Socials */}
        <div className="mt-0 text-left md:text-right">
          <p className="mb-1 text-white text-[10px] uppercase tracking-widest font-[400]">Socials</p>
          <ul className="space-y-1">
            <li><a href="https://www.linkedin.com/in/shitanshu-kumar1/" className="hover:underline">LinkedIn ↗</a></li>
          </ul>
        </div>
      </div>



      {/* Bottom: Branding & Copyright */}
      <div className="flex flex-row justify-between items-start md:items-center w-full text-[10px] text-[#94A3B8]">
        <Image src={logo} alt='' width={200} height={200}/>
        <p className="mt-0">© 2025 Shitanshu Kumar</p>
      </div>
    </footer>
  )
}
