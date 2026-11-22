
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b text-white transition-all duration-500 ${
        scrolled
          ? 'border-white/10 bg-[#091629]/90 py-1 shadow-xl backdrop-blur-xl'
          : 'border-white/20 bg-transparent py-2'
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12">

        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white p-1">
            <img
              src="/images/partners/aiu.jpg"
              alt="American Imperial University logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-bold tracking-[0.18em]">
              AMERICAN IMPERIAL
            </p>
            <p className="text-[10px] tracking-[0.35em]">
              UNIVERSITY
            </p>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 lg:flex">

          <a href="#about" className="text-sm transition hover:text-red-300">
            About
          </a>

          <div className="group relative">
            <button className="flex items-center gap-1 text-sm transition hover:text-red-300">
              Academics
              <ChevronDown size={14} />
            </button>

            <div className="invisible absolute left-0 top-full mt-4 w-56 bg-white p-5 text-gray-900 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <a href="#programs" className="block py-2 text-sm hover:text-red-700">
                Programs
              </a>
              <a href="#programs" className="block py-2 text-sm hover:text-red-700">
                MBA
              </a>
              <a href="#programs" className="block py-2 text-sm hover:text-red-700">
                DBA
              </a>
            </div>
          </div>

          <a href="#experience" className="text-sm transition hover:text-red-300">
            Experience
          </a>

          <a href="#recognition" className="text-sm transition hover:text-red-300">
            Recognition
          </a>
        </div>

        {/* Apply button */}
        <a
          href="#admissions"
          className="hidden items-center gap-2 bg-[#A62832] px-5 py-3 text-xs font-semibold tracking-wider transition hover:bg-white hover:text-[#173B68] lg:flex"
        >
          APPLY NOW
          <ArrowUpRight size={15} />
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#091629] px-8 py-7 lg:hidden">
          {[
            ['About', '#about'],
            ['Academics', '#programs'],
            ['Experience', '#experience'],
            ['Recognition', '#recognition'],
            ['Admissions', '#admissions'],
          ].map(([label, link]) => (
            <a
              key={label}
              href={link}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-4 text-sm transition hover:text-red-300"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
