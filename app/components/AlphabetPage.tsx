'use client'

import { Heart } from "lucide-react"

const PAPER_TEXTURE_SMALL =
  "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d4a574' fillOpacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

interface AlphabetPageProps {
  letter: string
  word: string
  line1: string
  line2: string
  imageUrl?: string
}

export default function AlphabetPage({ letter, word, line1, line2, imageUrl }: AlphabetPageProps) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-amber-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{ backgroundImage: `url("${PAPER_TEXTURE_SMALL}")` }}
      />

      {/* Decorative tape pieces */}
      <div className="absolute top-3 right-6 w-8 h-4 md:w-12 md:h-6 bg-yellow-200 opacity-70 transform rotate-12 shadow-sm" />
      <div className="absolute bottom-6 left-4 w-6 h-3 md:w-8 md:h-4 bg-pink-200 opacity-70 transform -rotate-6 shadow-sm" />

      <div className="flex flex-col h-full p-4 md:p-6 relative z-10">
        {/* Letter and Word */}
        <div className="text-center mb-4 md:mb-8">
          <div className="relative inline-block">
            <span className="font-great-vibes text-6xl md:text-8xl lg:text-9xl text-amber-700 drop-shadow-lg">
              {letter}
            </span>
            <span className="font-dancing text-xl md:text-3xl lg:text-4xl text-rose-600 ml-1 md:ml-2 align-bottom">
              {word.slice(1)}
            </span>
          </div>
        </div>

<div className="flex flex-col items-center mt-4 md:mt-6">
  <div className="bg-white border shadow-md rounded-md overflow-hidden w-60 h-64 md:w-72 md:h-[340px] relative">
    <img
      src={imageUrl}
      alt={word}
      className="object-cover w-full h-full"
      style={{ objectPosition: "top center" }} // Ensures top and center subjects are visible
    />
    <div className="absolute bottom-0 w-full text-center bg-white/100 py-1 font-shadows text-sm text-pink-500">
      My babyy💕
    </div>
  </div>
</div>

        {/* Love lines */}
        <div className="flex-1 flex flex-col justify-center space-y-3 md:space-y-6">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-md border border-amber-100">
            <p className="font-dancing text-sm md:text-xl text-amber-800 text-center leading-relaxed">{line1}</p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-md border border-rose-100">
            <p className="font-dancing text-sm md:text-xl text-rose-700 text-center leading-relaxed">{line2}</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-12 left-6 text-sm md:text-lg text-pink-400 animate-pulse">✨</div>
        <div className="absolute bottom-12 right-6 text-sm md:text-lg text-yellow-400 animate-pulse delay-700">🌟</div>

        {/* Page letter as page number */}
        <div className="absolute bottom-2 right-4 md:bottom-4 md:right-6 font-shadows text-xs md:text-sm text-amber-600 opacity-70">
          {letter}
        </div>
      </div>
    </div>
  )
}
