
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

const programs = [
  {
    number: '01',
    category: 'GRADUATE PROGRAM',
    title: 'MBA',
    fullTitle: 'Master of Business Administration',
    description:
      'Develop a broader understanding of business, strengthen your leadership perspective, and explore the ideas shaping modern organizations.',
    images: [
      {
        src: '/images/programs/mba-finance.jpg',
        label: 'Finance & Economics',
      },
      {
        src: '/images/programs/mba-strategy.jpg',
        label: 'Strategy & Management',
      },
      {
        src: '/images/programs/mba-marketing.jpg',
        label: 'Marketing',
      },
      {
        src: '/images/programs/mba-global.jpg',
        label: 'International Business',
      },
    ],
  },
  {
    number: '02',
    category: 'DOCTORAL PROGRAM',
    title: 'DBA',
    fullTitle: 'Doctor of Business Administration',
    description:
      'Explore advanced business thinking through research, organizational perspectives, and the study of complex management challenges.',
    images: [
      {
        src: '/images/programs/dba-research.jpg',
        label: 'Academic Research',
      },
      {
        src: '/images/programs/dba-leadership.jpg',
        label: 'Organizational Leadership',
      },
      {
        src: '/images/programs/dba-analysis.jpg',
        label: 'Business Research',
      },
      {
        src: '/images/programs/dba-strategy.jpg',
        label: 'Strategic Thinking',
      },
    ],
  },
  {
    number: '03',
    category: 'SPECIALIZED PROGRAM',
    title: 'Data Analytics',
    fullTitle: 'Data Analytics',
    description:
      'Discover how data, analytical thinking, and emerging technologies can help interpret information and support better decisions.',
    images: [
      {
        src: '/images/programs/data-visualization.jpg',
        label: 'Data Visualization',
      },
      {
        src: '/images/programs/data-statistics.jpg',
        label: 'Statistics',
      },
      {
        src: '/images/programs/data-science.jpg',
        label: 'Data Science',
      },
      {
        src: '/images/programs/data-ai.jpg',
        label: 'Artificial Intelligence',
      },
    ],
  },
]

function ProgramCard({
  program,
}: {
  program: (typeof programs)[number]
}) {
  const [activeImage, setActiveImage] = useState(0)

  // Automatically change the image every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % program.images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [program.images.length])

  const currentImage = program.images[activeImage]

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65 }}
      className="group flex h-full flex-col overflow-hidden bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl"
    >
      {/* Image slideshow */}
      <div className="relative h-[390px] overflow-hidden bg-[#091629] sm:h-[430px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage.src}
            src={currentImage.src}
            alt={currentImage.label}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#091629]/90 via-[#091629]/10 to-[#091629]/20" />

        {/* Program number */}
        <div className="absolute left-6 top-6 flex items-center gap-3">
          <span className="h-px w-8 bg-[#C15A61]" />
          <span className="text-[11px] font-medium tracking-[0.25em] text-white/80">
            AIU / {program.number}
          </span>
        </div>

        {/* Subject label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-12 left-7"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/65">
              Areas of study
            </p>
            <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
              {currentImage.label}
            </h3>
          </motion.div>
        </AnimatePresence>

        {/* Slideshow progress indicator */}
        <div className="absolute bottom-5 left-7 right-7 flex gap-1.5">
          {program.images.map((image, imageIndex) => (
            <div
              key={image.src}
              className={`h-[3px] flex-1 transition-colors duration-500 ${
                activeImage === imageIndex
                  ? 'bg-white'
                  : 'bg-white/35'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Program information */}
      <div className="flex flex-1 flex-col px-7 py-8 sm:px-8 sm:py-9">
        <p className="text-[10px] font-semibold tracking-[0.22em] text-[#A62832]">
          {program.category}
        </p>

        <h2 className="mt-3 font-serif text-4xl text-[#173B68]">
          {program.title}
        </h2>

        <h3 className="mt-2 text-sm font-semibold leading-relaxed text-[#25282D]">
          {program.fullTitle}
        </h3>

        <p className="mt-5 flex-1 text-sm leading-7 text-[#777777]">
          {program.description}
        </p>

        <a
          href="#admissions"
          className="mt-8 flex w-fit items-center gap-3 border-b border-[#A62832] pb-2 text-[11px] font-bold tracking-[0.15em] text-[#173B68] transition-all duration-300 hover:gap-5 hover:text-[#A62832]"
        >
          EXPLORE PROGRAM
          <ArrowUpRight size={15} />
        </a>
      </div>
    </motion.article>
  )
}

function Programs() {
  return (
    <section
      id="programs"
      className="bg-[#F7F5EF] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] text-[#A62832]">
            <span className="h-px w-9 bg-[#A62832]" />
            ACADEMIC PATHWAYS
          </p>

          <h2 className="font-serif text-5xl leading-[1.1] text-[#173B68] sm:text-6xl">
            Discover your
            <br />
            next direction.
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-[#777777]">
            Explore academic pathways designed to expand your knowledge,
            develop your perspective, and support your ambitions.
          </p>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.number} program={program} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[#173B68]/15 pt-9 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-2xl text-[#173B68]">
              Your next chapter starts here.
            </p>
            <p className="mt-2 text-sm text-[#777777]">
              Take the next step towards your academic goals.
            </p>
          </div>

          <a
            href="#admissions"
            className="flex items-center gap-3 bg-[#A62832] px-7 py-4 text-[11px] font-bold tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#173B68]"
          >
            VIEW ADMISSIONS
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Programs
