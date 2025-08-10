import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo/1.png'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm">
      <div className="flex flex-col px-4 py-3 items-center sm:px-6 md:px-8 lg:px-10 sm:flex-row sm:justify-between flex-wrap gap-2 sm:gap-4">
        <div className="relative w-32 h-16 sm:w-36 sm:h-18 md:w-40 md:h-20 lg:w-44 lg:h-24">
          <Image 
            src={logo}
            alt="Logo"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 176px"
          />
        </div>
        <ul className="flex flex-row gap-3 sm:gap-4 md:gap-6">
          {[
            { label: 'Contact', href: '#contact' },
            { label: 'Équipe', href: '#equipe' },
            { label: 'Prestations', href: '#prestations' }
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-md transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-100 focus:text-blue-800 uppercase tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
