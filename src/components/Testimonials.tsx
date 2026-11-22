
import { motion } from 'motion/react'
import { Quote, ArrowUpRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The best part of learning is discovering how much more there is to explore.',
    name: 'Olivia Bennett',
    program: 'MBA',
    image: '/images/testimonials/olivia.jpg',
  },
  {
    quote:
      'Every new perspective gives you another way to approach a challenge.',
    name: 'Daniel Morgan',
    program: 'Doctor of Business Administration',
    image: '/images/testimonials/daniel.jpg',
  },
  {
    quote:
      'Data becomes powerful when you learn to see the story behind it.',
    name: 'Sophia Williams',
    program: 'Data Analytics',
    image: '/images/testimonials/sophia.jpg',
  },
  {
    quote:
      'Education should challenge the way you think, not just what you know.',
    name: 'Ethan Carter',
    program: 'MBA',
    image: '/images/testimonials/ethan.jpg',
  },
  {
    quote:
      'Curiosity is what turns knowledge into something meaningful.',
    name: 'Amelia Brooks',
    program: 'Data Analytics',
    image: '/images/testimonials/amelia.jpg',
  },
  {
    quote:
      'A broader perspective can change the way you see every opportunity.',
    name: 'Adam Hassan',
    program: 'MBA',
    image: '/images/testimonials/adam.jpg',
  },
]

const secondRow = [
  testimonials[3],
  testimonials[5],
  testimonials[1],
  testimonials[4],
  testimonials[2],
  testimonials[0],
]

function TestimonialCard({
  item,
}: {
  item: (typeof testimonials)[number]
}) {
  return (
    <article className="flex w-[265px] shrink-0 flex-col justify-between rounded-2xl border border-[#173B68]/10 bg-white p-5 shadow-[0_4px_20px_rgba(23,59,104,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(23,59,104,0.09)] sm:w-[310px] sm:p-6 lg:w-[340px]">

      <div>
        <Quote
          size={22}
          strokeWidth={1.4}
          className="mb-4 text-[#A62832]"
        />

        <p className="font-serif text-lg leading-relaxed text-[#173B68] sm:text-xl">
          “{item.quote}”
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[#173B68]/10 pt-4">

        <div className="flex min-w-0 items-center gap-3">
          <img
            src={item.image}
            alt={`${item.name} portrait`}
            className="h-11 w-11 shrink-0 rounded-full object-cover object-center ring-2 ring-[#173B68]/10"
            loading="lazy"
          />

          <div className="min-w-0">
            <p className="truncate text-xs font-bold text-[#25282D]">
              {item.name}
            </p>
            <p className="mt-1 truncate text-[10px] text-[#777777]">
              {item.program}
            </p>
          </div>
        </div>

        <span className="ml-2 text-[9px] font-bold tracking-[0.15em] text-[#A62832]">
          AIU
        </span>
      </div>
    </article>
  )
}

function Testimonials() {
  const firstTrack = [...testimonials, ...testimonials]
  const secondTrack = [...secondRow, ...secondRow]

  return (
    <section
      id="voices"
      className="w-full overflow-hidden bg-[#F7F5EF] py-10 sm:py-14 lg:py-16"
    >
      {/* Heading */}
      <div className="mx-auto mb-7 max-w-[1440px] px-5 sm:mb-8 sm:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="mb-3 flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-[#A62832]">
              <span className="h-px w-7 bg-[#A62832]" />
              VOICES OF AMBITION
            </p>

            <h2 className="font-serif text-4xl leading-[1.05] text-[#173B68] sm:text-5xl lg:text-6xl">
              Every journey has a story.
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-6 text-[#777777] md:pb-1">
            Different ambitions. Different perspectives.
            One shared appreciation for learning.
          </p>
        </div>
      </div>

      {/* First moving row */}
      <div className="mb-3 overflow-hidden sm:mb-4">
        <motion.div
          className="flex w-max gap-3 sm:gap-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 65,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {firstTrack.map((item, index) => (
            <TestimonialCard key={`first-${index}`} item={item} />
          ))}
        </motion.div>
      </div>

      {/* Second moving row */}
      <div className="overflow-hidden">
        <motion.div
          className="flex w-max gap-3 sm:gap-4"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 70,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {secondTrack.map((item, index) => (
            <TestimonialCard key={`second-${index}`} item={item} />
          ))}
        </motion.div>
      </div>

      {/* Bottom link */}
      <div className="mx-auto mt-7 flex max-w-[1440px] items-center justify-between px-5 sm:mt-9 sm:px-10 lg:px-16">
        <p className="text-[9px] font-semibold tracking-[0.15em] text-[#777777]">
          IDEAS. PEOPLE. POSSIBILITIES.
        </p>

        <a
          href="#admissions"
          className="flex items-center gap-2 text-[9px] font-bold tracking-[0.12em] text-[#173B68] transition-colors hover:text-[#A62832]"
        >
          EXPLORE AIU
          <ArrowUpRight size={13} />
        </a>
      </div>
    </section>
  )
}

export default Testimonials
