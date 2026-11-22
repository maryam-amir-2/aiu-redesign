
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Plus, Minus } from 'lucide-react'

const stages = [
  {
    number: '01',
    title: 'Find your program',
    short: 'Discover a path that fits your ambitions.',
    details:
      'Explore the available academic programs, compare areas of study, and identify the qualification that best supports your goals.',
    image:
      '/images/admissions-program.jpg',
    link: '#programs',
    linkText: 'VIEW PROGRAMS',
  },
  {
    number: '02',
    title: 'Apply to AIU',
    short: 'Take the first step towards your next chapter.',
    details:
      'Connect with the admissions team to learn about application requirements, supporting documents, and the application process.',
    image:
      '/images/admissions-apply.jpg',
    link: '#contact',
    linkText: 'CONTACT ADMISSIONS',
  },
  {
    number: '03',
    title: 'Begin your journey',
    short: 'Get ready to move forward with confidence.',
    details:
      'Once your application has been reviewed, the admissions team can guide you through the next steps towards enrolment.',
    image:
      '/images/admissions-journey.jpg',
    link: '#contact',
    linkText: 'GET IN TOUCH',
  },
]

function Admissions() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section
      id="admissions"
      className="w-full overflow-hidden bg-[#F7F5EF] px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-12"    >
      <div className="mx-auto max-w-[1440px]">

        {/* Heading */}
        <div className="mb-5 flex flex-col justify-between gap-2 sm:mb-6 sm:flex-row sm:items-end">
              <div>
            <p className="mb-3 text-[10px] font-bold tracking-[0.22em] text-[#A62832]">
              ADMISSIONS AT AIU
            </p>

            <h2 className="font-serif text-4xl text-[#173B68] sm:text-5xl lg:text-6xl">
              Your next chapter starts here.
            </h2>
          </div>

          <p className="max-w-xs text-xs leading-6 text-[#777777]">
            Three steps to help you move towards your academic goals.
          </p>
        </div>

        {/* Image cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {stages.map((stage, index) => {
            const isExpanded = expanded === index

            return (
              <motion.article
                key={stage.number}
                layout
                className="group relative min-w-0 overflow-hidden border border-[#173B68]/10 bg-white"
              >
                {/* Image */}
                <div className="relative h-[170px] overflow-hidden sm:h-[200px] lg:h-[215px]">
                      <img
                    src={stage.image}
                    alt={stage.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#091629]/70 to-transparent" />

                  <span className="absolute bottom-4 left-5 text-xs font-semibold tracking-[0.2em] text-white">
                    {stage.number} / 03
                  </span>
                </div>

                {/* Card content */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-serif text-2xl text-[#173B68]">
                    {stage.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#777777]">
                    {stage.short}
                  </p>

                  {/* Expandable details */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-[#173B68]/10 pt-4 mt-4 text-sm leading-7 text-[#555555]">
                          {stage.details}
                        </p>

                        <a
                          href={stage.link}
                          className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.13em] text-[#A62832] hover:text-[#173B68]"
                        >
                          {stage.linkText}
                          <ArrowUpRight size={14} />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(isExpanded ? null : index)
                    }
                    aria-expanded={isExpanded}
                    className="mt-3 flex w-full items-center justify-between border-t border-[#173B68]/15 pt-4 text-[10px] font-bold tracking-[0.15em] text-[#173B68] transition-colors hover:text-[#A62832]"
                  >
                    {isExpanded ? 'READ LESS' : 'READ MORE'}

                    <span className="flex h-7 w-7 items-center justify-center border border-[#173B68]/20">
                      {isExpanded ? (
                        <Minus size={14} />
                      ) : (
                        <Plus size={14} />
                      )}
                    </span>
                  </button>
                </div>
              </motion.article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Admissions
