
import { motion } from 'motion/react'
import {
  ArrowUpRight,
  BookOpen,
  Compass,
  MessagesSquare,
} from 'lucide-react'

const supportAreas = [
  {
    number: '01',
    title: 'Academic Guidance',
    description:
      'Get direction as you navigate your academic goals and make informed decisions about your studies.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Learning Assistance',
    description:
      'Access learning guidance and resources designed to help you approach your studies with confidence.',
    icon: BookOpen,
  },
  {
    number: '03',
    title: 'Student Services',
    description:
      'Find assistance with general student enquiries and the information you need throughout your journey.',
    icon: MessagesSquare,
  },
]

function StudentSupport() {
  return (
    <section
      id="student-support"
      className="w-full overflow-hidden bg-[#F7F5EF] py-14 sm:py-18 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">

        {/* Section heading */}
        <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-12 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 flex items-center gap-3 text-[10px] font-bold tracking-[0.23em] text-[#A62832]">
              <span className="h-px w-8 bg-[#A62832]" />
              HERE FOR YOUR JOURNEY
            </p>

            <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] text-[#173B68] sm:text-5xl lg:text-6xl">
              Your success deserves
              <br className="hidden sm:block" />
              <span className="italic">the right support.</span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-6 text-[#777777] sm:text-sm sm:leading-7 lg:pb-1">
            A meaningful education is about more than what happens
            in the classroom. It is also about having the guidance
            and resources to move forward.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:gap-12">

          {/* Image panel */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[340px] overflow-hidden rounded-2xl sm:min-h-[430px] lg:min-h-[510px]"
          >
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=90"
              alt="Students collaborating in a learning environment"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#091629]/90 via-[#091629]/15 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="mb-3 text-[9px] font-bold tracking-[0.22em] text-[#E08A8F]">
                BEYOND THE CLASSROOM
              </p>

              <h3 className="max-w-md font-serif text-3xl leading-tight text-white sm:text-4xl">
                Every step forward
                <br />
                starts with the right guidance.
              </h3>

              <div className="mt-5 h-[2px] w-12 bg-[#A62832]" />
            </div>
          </motion.div>

          {/* Support areas */}
          <div className="flex flex-col justify-center">

            <div className="mb-5 flex items-center justify-between">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#777777]">
                HOW WE SUPPORT YOU
              </p>
              <span className="text-[10px] tracking-widest text-[#A62832]">
                01 — 03
              </span>
            </div>

            <div className="border-t border-[#173B68]/15">
              {supportAreas.map((item, index) => {
                const Icon = item.icon

                return (
                  <motion.article
                    key={item.number}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    className="group grid grid-cols-[42px_1fr] gap-3 border-b border-[#173B68]/15 py-6 sm:grid-cols-[50px_1fr] sm:gap-5 sm:py-7"
                  >
                    <span className="pt-1 text-[10px] font-semibold tracking-widest text-[#A62832]">
                      {item.number}
                    </span>

                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-serif text-2xl text-[#173B68] transition-colors duration-300 group-hover:text-[#A62832] sm:text-3xl">
                          {item.title}
                        </h3>

                        <Icon
                          size={21}
                          strokeWidth={1.4}
                          className="shrink-0 text-[#A62832] transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>

                      <p className="mt-2 max-w-md text-xs leading-6 text-[#777777] sm:text-sm sm:leading-7">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                )
              })}
            </div>

            <a
              href="#contact"
              className="mt-7 inline-flex w-fit items-center gap-3 border border-[#173B68]/30 px-5 py-3.5 text-[10px] font-bold tracking-[0.16em] text-[#173B68] transition-all duration-300 hover:border-[#173B68] hover:bg-[#173B68] hover:text-white"
            >
              GET IN TOUCH
              <ArrowUpRight size={15} />
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentSupport
