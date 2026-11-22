
import { ArrowUpRight } from 'lucide-react'

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#F7F5EF] px-6 py-28 text-[#25282D] lg:px-16 lg:py-36">

      <div className="mx-auto max-w-[1440px]">

        {/* Section heading */}
        <div className="mb-16 flex items-center gap-4">
          <span className="h-[2px] w-12 bg-[#A62832]" />
          <span className="text-[10px] font-semibold tracking-[0.3em] text-[#777]">
            GET TO KNOW AIU
          </span>
        </div>

        {/* Main layout */}
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left: Image */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-[#173B68]/20" />

            <div className="relative h-[420px] overflow-hidden sm:h-[550px]">
              <img
                src="/images/about-campus.jpg"
                alt="University students walking across a campus"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#091629]/30 to-transparent" />
            </div>

            <div className="absolute -bottom-7 -right-4 flex h-28 w-28 items-center justify-center bg-[#A62832] text-center text-white sm:-right-7 sm:h-36 sm:w-36">
              <div>
                <p className="font-serif text-3xl italic sm:text-4xl">AIU</p>
                <p className="mt-1 text-[8px] tracking-[0.2em]">
                  YOUR NEXT CHAPTER
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="pt-8 lg:pt-0">

            <p className="mb-7 text-xs font-semibold tracking-[0.2em] text-[#A62832]">
              MORE THAN A DEGREE
            </p>

            <h2 className="font-serif text-5xl leading-[1.05] tracking-tight text-[#173B68] sm:text-6xl lg:text-7xl">
              Education
              <br />
              with a <span className="italic">bigger</span>
              <br />
              perspective.
            </h2>

            <div className="my-9 h-px w-full bg-[#173B68]/20" />

            <p className="max-w-lg text-sm leading-8 text-[#666] sm:text-base">
              At American Imperial University, education is an opportunity
              to think differently, explore new possibilities and shape
              your ambitions into meaningful goals.
            </p>

            <p className="mt-5 max-w-lg text-sm leading-8 text-[#666] sm:text-base">
              Discover an academic experience that encourages curiosity,
              personal growth and a forward-looking approach to learning.
            </p>

            <a
              href="#programs"
              className="group mt-10 inline-flex items-center gap-4 border-b border-[#173B68] pb-3 text-xs font-bold tracking-[0.15em] text-[#173B68] transition hover:border-[#A62832] hover:text-[#A62832]"
            >
              DISCOVER AIU
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-32 border-t border-[#173B68]/20 pt-8">
          <p className="font-serif text-2xl italic text-[#173B68] sm:text-3xl">
            "The future belongs to those who continue to learn."
          </p>
        </div>

      </div>
    </section>
  )
}

export default About
