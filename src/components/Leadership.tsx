
import { motion } from 'motion/react'
import { ArrowUpRight, Quote } from 'lucide-react'

function Leadership() {
  return (
    <section
      id="leadership"
      className="relative w-full overflow-hidden bg-[#091629] text-white"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9 sm:mb-12"
        >
          <p className="flex items-center gap-3 text-[10px] font-bold tracking-[0.25em] text-[#E08A8F]">
            <span className="h-px w-9 bg-[#E08A8F]" />
            A MESSAGE FROM OUR LEADERSHIP
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid items-center gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* President portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto w-full max-w-[480px] lg:mx-0"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="/images/president.jpg"
                alt="Michael Santoro, Campus President"
                className="h-[420px] w-full object-cover object-top sm:h-[540px] lg:h-[610px]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#091629]/65 via-transparent to-transparent" />
            </div>

            {/* Image caption */}
            <div className="absolute -bottom-3 left-4 right-4 border-l-[3px] border-[#A62832] bg-[#10233D] px-5 py-4 sm:left-7 sm:right-7 sm:px-7">
              <p className="font-serif text-2xl text-white sm:text-3xl">
                Michael Santoro
              </p>
              <p className="mt-1 text-[9px] font-semibold tracking-[0.2em] text-white/60 sm:text-[10px]">
                CAMPUS PRESIDENT
              </p>
            </div>
          </motion.div>

          {/* Leadership message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="pt-5 lg:pt-0"
          >
            <Quote
              size={38}
              strokeWidth={1}
              className="mb-6 text-[#A62832]"
            />

            <h2 className="max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[58px]">
              Education should
              <span className="italic text-[#B8C6D8]"> open doors </span>
              to a world of possibilities.
            </h2>

            <div className="my-7 h-[2px] w-16 bg-[#A62832] sm:my-9" />

            <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              At American Imperial University, our vision is to make
              quality higher education accessible while preparing
              students to think critically, embrace new perspectives
              and contribute confidently in an interconnected world.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              We believe that education is more than earning a
              qualification. It is about developing the knowledge,
              perspective and confidence to shape what comes next.
            </p>

            {/* Signature */}
            <div className="mt-9 flex items-end justify-between border-t border-white/15 pt-6 sm:mt-11">
              <div>
                <p className="font-serif text-2xl italic text-[#B8C6D8]">
                  Michael Santoro
                </p>
                <p className="mt-2 text-[9px] font-bold tracking-[0.2em] text-white/50">
                  CAMPUS PRESIDENT
                </p>
              </div>

              <a
                href="#programs"
                className="group flex items-center gap-2 text-[9px] font-bold tracking-[0.15em] text-white transition-colors hover:text-[#E08A8F] sm:text-[10px]"
              >
                EXPLORE AIU
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom detail */}
        <div className="mt-14 flex items-center justify-between border-t border-white/15 pt-5 sm:mt-20">
          <p className="text-[9px] font-semibold tracking-[0.18em] text-white/40">
            LEADERSHIP. VISION. OPPORTUNITY.
          </p>
          <span className="text-[9px] tracking-widest text-[#E08A8F]">
            AMERICAN IMPERIAL UNIVERSITY
          </span>
        </div>

      </div>
    </section>
  )
}

export default Leadership
