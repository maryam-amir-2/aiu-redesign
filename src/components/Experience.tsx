
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-[#091629] text-white"
    >
      {/* Main visual */}
      <div className="relative min-h-[650px] sm:min-h-[740px] lg:min-h-[800px]">

        {/* Background image */}
        <motion.img
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=90"
          alt="University architecture"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Image overlays */}
        <div className="absolute inset-0 bg-[#091629]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091629]/95 via-[#091629]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091629] via-transparent to-[#091629]/20" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[650px] max-w-[1440px] flex-col justify-center px-6 py-24 sm:min-h-[740px] sm:px-10 lg:min-h-[800px] lg:px-16">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="mb-8 flex items-center gap-4 text-[10px] font-semibold tracking-[0.3em] text-[#E08A8F] sm:text-xs">
              <span className="h-px w-10 bg-[#E08A8F]" />
              THE AIU EXPERIENCE
            </p>

            <h2 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl lg:text-[100px]">
              An education
              <br />
              without
              <br />
              <span className="italic text-[#C5D1E0]">
                boundaries.
              </span>
            </h2>

            <div className="mt-9 h-[3px] w-16 bg-[#A62832] sm:mt-12 sm:w-20" />

            <p className="mt-8 max-w-lg text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              The world is constantly changing. The ability to think
              critically, adapt, and see beyond the obvious has never
              mattered more.
            </p>

            <a
              href="#programs"
              className="mt-9 inline-flex items-center gap-4 border border-white/40 px-6 py-4 text-[10px] font-bold tracking-[0.18em] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#091629] sm:mt-11"
            >
              DISCOVER YOUR POSSIBILITIES
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* Bottom academic themes */}
          <div className="absolute bottom-0 left-6 right-6 border-t border-white/25 py-6 sm:left-10 sm:right-10 lg:left-16 lg:right-16">
            <div className="grid grid-cols-3 gap-3 sm:gap-8">
              {[
                'THINK CRITICALLY',
                'EXPLORE GLOBALLY',
                'LEAD CONFIDENTLY',
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-2 sm:gap-4">
                  <span className="text-[9px] text-[#D4777D] sm:text-xs">
                    0{index + 1}
                  </span>
                  <span className="text-[8px] font-semibold tracking-[0.1em] text-white/80 sm:text-[11px] sm:tracking-[0.18em]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
