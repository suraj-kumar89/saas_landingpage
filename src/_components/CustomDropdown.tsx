'use client'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const options = [
  'Paid Marketing',
  'SEO',
  'Conversion Rate Optimisation',
]

export default function CustomDropdown({ value, onChange }: {
  value: string
  onChange: (val: string) => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative w-full">
      {/* Selected value box with arrow */}
      <div
        className={`p-3 rounded-md bg-[#FFFFFF0F] text-[12px] font-normal leading-[22px] cursor-pointer flex items-center justify-between ${
          value ? 'text-white' : 'text-[#94A3B880]'
        }`}
        onClick={() => setOpen(!open)}
      >
        {value || 'e.g. Paid Marketing, SEO, Conversion Rate Optimisation'}
        <FaChevronDown
          className={`ml-2 transition-transform duration-200 ${
            open ? 'rotate-180' : 'rotate-0'
          } text-[#94A3B8]`}
          size={12}
        />
      </div>

      {/* Dropdown list */}
      {open && (
        <ul className="absolute top-full left-0 w-full mt-1 bg-[#0f172a] rounded-md border border-[#1e293b] z-50 shadow-md">
          {options.map((option, idx) => (
            <li
              key={idx}
              className="px-4 py-2 text-sm text-white hover:bg-[#FF9900] hover:text-black cursor-pointer"
              onClick={() => {
                onChange(option)
                setOpen(false)
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
