
import { motion } from 'motion/react'
import { Award } from 'lucide-react'

function AwardBanner() {
  return (
    <section className="relative overflow-hidden bg-[#091629] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-16">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/[0.06]" />
      <div className="pointer-events-none absolute -right-10 -top-20 h-60 w-60 rounded-full border border-white/[0.06]" />

      <div className="relative mx-auto flex max-w-[1150px] flex-col items-center gap-9 sm:flex-row sm:gap-12 lg:gap-16">

        {/* Award image */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex w-full shrink-0 items-center justify-center sm:w-[36%]"
        >
          <div className="absolute inset-0 scale-90 rounded-full bg-[#A62832]/10 blur-3xl" />

          <img
            src="/images/Award_img.png"
            alt="28th ELETS World Education Award"
            className="relative max-h-[190px] max-w-full object-contain drop-shadow-[0_12px_25px_rgba(0,0,0,0.25)] sm:max-h-[210px]"
          />
        </motion.div>

        {/* Award information */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex-1 text-center sm:text-left"
        >
          <p className="mb-4 flex items-center justify-center gap-3 text-[9px] font-bold tracking-[0.3em] text-[#D4777D] sm:justify-start sm:text-[10px]">
            <Award size={15} />
            RECOGNITION & ACHIEVEMENT
          </p>

          <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            A commitment to
            <span className="italic text-[#B8C6D8]"> excellence.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
            Recognised at the 28th ELETS World Education Awards as
            Best Online Degree Provider.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 sm:justify-start">
            <span className="h-px w-9 bg-[#A62832]" />
            <span className="text-[9px] font-semibold tracking-[0.2em] text-white/50">
              28TH ELETS WORLD EDUCATION AWARDS
            </span>
          </div>
        </motion.div>

        {/* Decorative number */}
        <div className="absolute right-0 top-0 hidden font-serif text-7xl italic text-white/[0.04] lg:block">
          28
        </div>
      </div>
    </section>
  )
}

export default AwardBanner
