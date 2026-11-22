
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react'

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071323] px-6 pb-7 pt-16 text-white sm:px-10 lg:px-16">

      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/[0.04]" />

      <div className="relative mx-auto max-w-[1250px]">

        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/images/partners/aiu.jpg"
                alt="American Imperial University"
                className="h-16 w-16 rounded-full bg-white p-2 object-contain"
              />
              <div>
                <h2 className="font-serif text-2xl leading-tight">
                  American Imperial
                  <br />
                  University
                </h2>
                <p className="mt-1 text-[8px] tracking-[0.22em] text-white/45">
                  EDUCATION WITHOUT BOUNDARIES
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xs text-xs leading-7 text-white/50">
              Empowering learners through education, knowledge,
              and opportunities that reach beyond boundaries.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/' },
                { icon: Facebook, href: 'https://www.facebook.com/' },
                { icon: Linkedin, href: 'https://www.linkedin.com/' },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Social media ${index + 1}`}
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/65 transition-all hover:border-[#A62832] hover:bg-[#A62832] hover:text-white"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-6 text-[10px] font-bold tracking-[0.2em] text-[#D4777D]">
              EXPLORE
            </h3>

            <ul className="space-y-4 text-xs text-white/60">
              <li><a href="#about" className="transition hover:text-white">About AIU</a></li>
              <li><a href="#leadership" className="transition hover:text-white">Leadership</a></li>
              <li><a href="#programs" className="transition hover:text-white">Academic Programs</a></li>
              <li><a href="#experience" className="transition hover:text-white">The AIU Experience</a></li>
              <li><a href="#voices" className="transition hover:text-white">Student Voices</a></li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="mb-6 text-[10px] font-bold tracking-[0.2em] text-[#D4777D]">
              ADMISSIONS
            </h3>

            <ul className="space-y-4 text-xs text-white/60">
              <li><a href="#admissions" className="transition hover:text-white">How to Apply</a></li>
              <li><a href="#student-support" className="transition hover:text-white">Student Support</a></li>
              <li><a href="#partnership" className="transition hover:text-white">Our Partners</a></li>
              <li><a href="#contact" className="transition hover:text-white">Contact Admissions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-[10px] font-bold tracking-[0.2em] text-[#D4777D]">
              GET IN TOUCH
            </h3>

            <div className="space-y-5 text-xs text-white/60">
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-[#D4777D]" />
                <a
                  href="mailto:info@americanimperialuniversity.com"
                  className="break-all transition hover:text-white"
                >
                  info@americanimperialuniversity.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#D4777D]" />
                <span>United States</span>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-3 text-[9px] font-bold tracking-[0.17em] text-white transition hover:text-[#D4777D]"
            >
              MAKE AN ENQUIRY
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Accreditation / recognition */}
        <div className="grid gap-5 border-b border-white/15 py-8 sm:grid-cols-[1fr_2fr] sm:items-center">
          <div>
            <p className="text-[9px] font-bold tracking-[0.22em] text-[#D4777D]">
              RECOGNITION & MEMBERSHIPS
            </p>
            <p className="mt-2 font-serif text-xl text-white/85">
              Academic recognition.
              <br />
              Institutional connections.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 text-[10px] leading-5 text-white/55 sm:grid-cols-3 sm:gap-6">
            <div>
              <span className="mb-2 block h-[2px] w-7 bg-[#A62832]" />
              Florida Department of Education
            </div>
            <div>
              <span className="mb-2 block h-[2px] w-7 bg-[#A62832]" />
              Quality Assurance in Higher Education (QAHE)
            </div>
            <div>
              <span className="mb-2 block h-[2px] w-7 bg-[#A62832]" />
              American Accreditation Association (AAA)
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col justify-between gap-4 pt-6 text-[9px] tracking-wide text-white/35 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} American Imperial University. All rights reserved.
          </p>

          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2 transition hover:text-white"
          >
            BACK TO TOP
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
