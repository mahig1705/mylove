"use client"

import { useRef } from "react"
import HTMLFlipBook from "react-pageflip"
import CoverPage from "./components/CoverPage"
import AlphabetPage from "./components/AlphabetPage"

const alphabetContent = [
  {
    letter: "A",
    word: "Adventurous",
    line1: "You make life thrilling with your fearless heart.",
    line2: "Every day with you feels like a new journey.",
    imageUrl: "/images/a.jpg",
  },
  {
    letter: "B",
    word: "Brilliant",
    line1: "Your mind is a galaxy of ideas(all about me).",
    line2: "I love watching you dream big.",
    imageUrl: "/images/b.JPG",
  },
  {
    letter: "C",
    word: "Caring",
    line1: "Your kindness heals everyone around you.",
    line2: "You care for me like no one else does.",
    imageUrl: "/images/c.jpg",
  },
  {
    letter: "D",
    word: "Dedicated",
    line1: "You give your all — to work, love, and life.",
    line2: "I admire your commitment towards me deeply.",
    imageUrl: "/images/d.jpg",
  },
  {
    letter: "E",
    word: "Empathetic",
    line1: "You feel what others feel.",
    line2: "That makes you so special and loved.",
    imageUrl: "/images/e.jpg",
  },
  {
    letter: "F",
    word: "Funny",
    line1: "You always know how to make me laugh.",
    line2: "Your humor is my favorite medicine.",
    imageUrl: "/images/f.JPG",
  },
  {
    letter: "G",
    word: "Genuine",
    line1: "You're honest, raw, and real.",
    line2: "Being real is your superpower.",
    imageUrl: "/images/g.JPG",
  },
  {
    letter: "H",
    word: "Humble",
    line1: "You shine without showing off.",
    line2: "That makes your light even warmer.",
    imageUrl: "/images/h.jpg",
  },
  {
    letter: "I",
    word: "Inspiring",
    line1: "Your energy motivates me to grow.",
    line2: "You are my forever.",
    imageUrl: "/images/i.jpg",
  },
  {
    letter: "J",
    word: "Joyful",
    line1: "Your smile is pure sunshine.",
    line2: "I feel lucky to see it every day.",
    imageUrl: "/images/j.JPG",
  },
  {
    letter: "K",
    word: "Kind",
    line1: "You're soft with me, even when it's hard.",
    line2: "Your kindness is praise-worthy.",
    imageUrl: "/images/k.jpg",
  },
  {
    letter: "L",
    word: "Loyal",
    line1: "You stand by those you love.",
    line2: "I always feel safe by your side.",
    imageUrl: "/images/l.jpg",
  },
  {
    letter: "M",
    word: "Magnetic",
    line1: "People are drawn to your energy(especially me).",
    line2: "And I'm the luckiest one to have you.",
    imageUrl: "/images/m.jpg",
  },
  {
    letter: "N",
    word: "Nurturing",
    line1: "You know how to love and protect.",
    line2: "You take care of me in ways I never knew I needed.",
    imageUrl: "/images/n.jpg",
  },
  {
    letter: "O",
    word: "Oozy Cozy",
    line1: "You look your cutest when you sleep.",
    line2: "It’s my favorite view in the world.",
    imageUrl: "/images/o.jpg",
  },
  {
    letter: "P",
    word: "Passionate Pookie",
    line1: "You feel everything deeply.",
    line2: "Your fire makes everything meaningful.",
    imageUrl: "/images/p.jpg",
  },
  {
    letter: "Q",
    word: "Qtiya",
    line1: "You don't shout to be heard.",
    line2: "Your presence is calm but commanding.",
    imageUrl: "/images/q.jpg",
  },
  {
    letter: "R",
    word: "Romantic",
    line1: "You melt my heart in the tiniest ways.",
    line2: "Every moment feels like a movie scene with you.",
    imageUrl: "/images/r.jpg",
  },
  {
    letter: "S",
    word: "Strong",
    line1: "You carry so much — with grace.",
    line2: "Your strength inspires me every day.",
    imageUrl: "/images/s.jpg",
  },
  {
    letter: "T",
    word: "Thoughtful",
    line1: "You notice the little things.",
    line2: "That's what makes you unforgettable.",
    imageUrl: "/images/t.jpg",
  },
  {
    letter: "U",
    word: "Unforgettable",
    line1: "Your love lingers long after you leave.",
    line2: "You're always on my mind.",
    imageUrl: "/images/u.jpg",
  },
  {
    letter: "V",
    word: "Visionary",
    line1: "You see futures before they exist.",
    line2: "I believe in your dreams as much as you do.",
    imageUrl: "/images/v.PNG",
  },
  {
    letter: "W",
    word: "Warm",
    line1: "You make cold days feel like home.",
    line2: "Your hugs are the safest place I know.",
    imageUrl: "/images/w.JPG",
  },
  {
    letter: "X",
    word: "Xtraordinary",
    line1: "There's nothing ordinary about you.",
    line2: "You're my once-in-a-lifetime love.",
    imageUrl: "/images/x.jpg",
  },
  {
    letter: "Y",
    word: "Youthful",
    line1: "You make life feel fresh and full of wonder.",
    line2: "With you, growing up is still playful.",
    imageUrl: "/images/y.jpg",
  },
  {
    letter: "Z",
    word: "Zestful",
    line1: "You live with fire in your heart.",
    line2: "That passion is why I fell for you.",
    imageUrl: "/images/z.PNG",
  },
]

export default function FlipbookDiary() {
  const bookRef = useRef<any>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center p-2 md:p-4">
      <div className="relative w-full max-w-4xl">
        <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-12 h-12 md:w-16 md:h-16 bg-pink-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 w-8 h-8 md:w-12 md:h-12 bg-yellow-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
      {/* Flipbook full height container */}
      <div className="relative w-full h-full max-w-[1200px] flex items-center justify-center py-10 px-4">
        <HTMLFlipBook
          ref={bookRef}
          width={550}
          height={750}
          size="stretch"
          minWidth={300}
          maxWidth={600}
          minHeight={400}
          maxHeight={800}
          maxShadowOpacity={0.7}
          showCover={true}
          mobileScrollSupport={true}
          className="rounded-xl shadow-2xl"
          drawShadow={true}
          flippingTime={800}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={50}
          showPageCorners={true}
          disableFlipByClick={false}
          style={{}} // Added required style prop
          startPage={0} // Added required startPage prop
        >
          <div className="page">
            <CoverPage />
          </div>

            <div className="page">
              <CoverPage />
            </div>

            {alphabetContent.map((content) => (
              <div key={content.letter} className="page">
                <AlphabetPage
                  letter={content.letter}
                  word={content.word}
                  line1={content.line1}
                  line2={content.line2}
                  imageUrl={content.imageUrl}
                />
              </div>
            ))}
          </HTMLFlipBook>
        </div>

        <div className="absolute -bottom-12 md:-bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-amber-700 font-dancing text-base md:text-lg animate-bounce">
            Click or swipe to flip pages 📖
          </p>
        </div>
      </div>
    </div>
  )
}
