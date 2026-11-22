
import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

const campusImage =
  'https://images.unsplash.com/photo-1760551572356-06b0cfa5408f?auto=format&fit=crop&fm=jpg&ixid=NHwxMjA3fDA%3D&ixlib=rb-4.1.0&q=60&w=3000'

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#091629] text-white">

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#173B68]/30 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-6 pb-20 pt-36 lg:px-16">

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT: Typography */}
          <div className="relative z-10">

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-9 flex items-center gap-4"
            >
              <span className="h-[2px] w-12 bg-[#B52D3A]" />
              <span className="text-[10px] tracking-[0.35em] text-white/60">
                AMERICAN IMPERIAL UNIVERSITY
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="font-serif text-[clamp(4rem,8vw,8rem)] leading-[0.86] tracking-[-0.045em]"
            >
              Your future.
              <br />
              <span className="italic font-normal text-[#B8C6D8]">
                Your ambition.
              </span>
              <span className="text-[#B52D3A]">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-9 max-w-md text-sm leading-8 text-white/60 md:text-base"
            >
              Education that challenges perspectives, expands possibilities
              and prepares you to move forward with purpose.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <a
                href="#programs"
                className="group flex items-center gap-5 bg-[#A62832] px-7 py-4 text-[11px] font-bold tracking-[0.18em] transition duration-300 hover:bg-white hover:text-[#091629]"
              >
                EXPLORE PROGRAMS
                <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="#about"
                className="border-b border-white/40 pb-2 text-[11px] tracking-[0.18em] text-white/80 transition hover:border-[#B52D3A] hover:text-white"
              >
                DISCOVER AIU
              </a>
            </motion.div>

          </div>

          {/* RIGHT: Architectural image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25 }}
            className="relative mx-auto w-full max-w-[650px] lg:mt-8"
          >
            <div className="absolute -right-3 -top-3 h-full w-full border border-white/20" />

            <div className="relative h-[380px] overflow-hidden sm:h-[480px] lg:h-[570px]">
              <img
                src={campusImage}
                alt="Modern university campus architecture"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#091629]/90 via-[#091629]/10 to-[#091629]/20" />
              <div className="absolute inset-0 bg-[#173B68]/20 mix-blend-multiply" />

              <div className="absolute bottom-8 left-8">
                <span className="mb-3 block text-[10px] tracking-[0.3em] text-white/60">
                  THE NEXT CHAPTER
                </span>
                <p className="font-serif text-3xl italic sm:text-4xl">
                  Begins with you.
                </p>
              </div>

              <div className="absolute right-6 top-6 border border-white/40 px-4 py-2 text-[10px] tracking-[0.2em]">
                AIU — 01
              </div>
            </div>

            {/* Red accent */}
            <div className="absolute -bottom-3 -left-3 h-20 w-20 border-b-2 border-l-2 border-[#A62832]" />
          </motion.div>

        </div>

        {/* Bottom information */}
        <div className="mt-20 flex items-center justify-between border-t border-white/15 pt-6">
          <div className="hidden text-[10px] tracking-[0.25em] text-white/40 sm:block">
            LEARN · LEAD · TRANSFORM
          </div>

          <a href="#about" className="flex items-center gap-3 text-[10px] tracking-[0.25em] text-white/60 transition hover:text-white">
            SCROLL TO EXPLORE
            <ArrowDown size={15} />
          </a>

          <div className="text-[10px] tracking-[0.2em] text-white/40">
            EST. AIU
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
