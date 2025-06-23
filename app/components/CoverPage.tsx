import { Heart, BookOpen } from "lucide-react"

const PAPER_TEXTURE =
  "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d4a574' fillOpacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

export default function CoverPage() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 relative overflow-hidden rounded-2xl shadow-xl">
      {/* Paper texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: `url("${PAPER_TEXTURE}")` }}
      />

      {/* Decorations */}
      <div className="absolute top-6 left-6 w-16 h-8 bg-yellow-200 opacity-80 transform -rotate-12 shadow-sm rounded-sm" />
      <div className="absolute top-8 right-8 w-12 h-6 bg-pink-200 opacity-80 transform rotate-45 shadow-sm rounded-sm" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-l-4 border-b-4 border-amber-400 opacity-60" />
      <div className="absolute top-4 right-4 w-6 h-6 border-r-4 border-t-4 border-rose-400 opacity-60" />

      {/* Content */}
      <div className="flex flex-col justify-center items-center h-full text-center px-6 md:px-12">
        {/* Icon */}
        <div className="mb-6 relative">
          <BookOpen className="w-16 h-16 text-amber-700 mx-auto" />
          <Heart className="w-5 h-5 text-rose-500 absolute -top-2 -right-2 animate-ping" />
        </div>

        {/* Title */}
        <h1 className="font-great-vibes text-5xl md:text-6xl text-amber-900 drop-shadow-sm mb-4">
          Our Digital Diary
        </h1>

        {/* Subtitle */}
        <h2 className="font-dancing text-3xl md:text-4xl text-rose-700 mb-8 leading-snug">
          26 Things I Love About Siddh 💖
        </h2>

        {/* Message */}
        <div className="bg-white/70 backdrop-blur-md border border-amber-300 rounded-xl p-6 max-w-md shadow-lg text-amber-800 font-shadows text-lg">
          <p>
            Happy Birthday, my love! <br />
            This little diary is a tribute to all the beautiful things that make you — you.
          </p>
        </div>
      </div>
    </div>
  )
}
