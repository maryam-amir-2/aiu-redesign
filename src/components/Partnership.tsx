
import { motion } from 'motion/react'

const partners = [
  {
    name: 'Nortwest College',
    image: '/images/partners/nortwest.jpg',
    number: '01',
    duration: 5.5,
    delay: 0,
    float: -13,
  },
  {
    name: 'Ascencia Business School',
    image: '/images/partners/ascencia.jpg',
    number: '02',
    duration: 6.5,
    delay: 0.7,
    float: -10,
  },
  {
    name: 'Britts Imperial University College',
    image: '/images/partners/britts-imperial.jpg',
    number: '03',
    duration: 5.8,
    delay: 0.3,
    float: -15,
  },
  {
    name: 'Britts College',
    image: '/images/partners/britts-college.jpg',
    number: '04',
    duration: 6.8,
    delay: 1,
    float: -11,
  },
]

function Partnership() {
  return (
    <section
      id="partnership"
      className="relative overflow-hidden bg-[#F7F5EF] px-6 py-16 sm:px-10 sm:py-20 lg:px-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full border border-[#173B68]/[0.06]" />
      <div className="pointer-events-none absolute -left-20 top-32 h-56 w-56 rounded-full border border-[#173B68]/[0.06]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full border border-[#A62832]/[0.06]" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* Introduction */}
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-[#A62832] sm:text-xs">
              <span className="h-px w-9 bg-[#A62832]" />
              OUR GLOBAL CONNECTIONS
            </p>

            <h2 className="font-serif text-5xl leading-[1.05] text-[#173B68] sm:text-6xl lg:text-[72px]">
              Better together.
              <br />
              <span className="italic text-[#A62832]">
                Beyond boundaries.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pb-2"
          >
            <p className="max-w-lg text-sm leading-7 text-[#626873] sm:text-base">
              Education grows stronger through meaningful connections.
              AIU's network of partner institutions brings together
              different academic perspectives and a wider educational
              community.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#A62832]" />
              <span className="text-[9px] font-bold tracking-[0.2em] text-[#173B68]">
                FOUR PARTNER INSTITUTIONS
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bubble composition */}
        <div className="relative mx-auto min-h-[490px] max-w-[1050px] sm:min-h-[520px]">

          {/* Decorative orbit rings */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#173B68]/10 sm:h-[440px] sm:w-[440px]" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#173B68]/[0.06] sm:h-[550px] sm:w-[550px]" />

          {/* Decorative floating bubbles */}
          <motion.div
            animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[10%] top-[17%] h-3 w-3 rounded-full bg-[#A62832]/30"
          />

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-[12%] top-[27%] h-5 w-5 rounded-full border border-[#173B68]/20"
          />

          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[18%] left-[24%] h-4 w-4 rounded-full bg-[#173B68]/10"
          />

          {/* Partner bubbles */}
          <div className="relative grid h-full grid-cols-2 items-center gap-x-5 gap-y-9 sm:absolute sm:inset-0 sm:grid-cols-4 sm:gap-0">
            {partners.map((partner, index) => {
              const positions = [
                'sm:absolute sm:left-[2%] sm:top-[12%]',
                'sm:absolute sm:right-[2%] sm:top-[12%]',
                'sm:absolute sm:bottom-[5%] sm:left-[12%]',
                'sm:absolute sm:bottom-[5%] sm:right-[12%]',
              ]

              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: partner.delay,
                  }}
                  className={`flex flex-col items-center ${positions[index]}`}
                >
                  {/* Independent continuous floating animation */}
                  <motion.div
                    animate={{
                      y: [0, partner.float, 0, 6, 0],
                      x: [0, index % 2 === 0 ? 3 : -3, 0],
                    }}
                    transition={{
                      duration: partner.duration,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: partner.delay,
                    }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative flex h-[125px] w-[125px] items-center justify-center rounded-full border border-[#173B68]/10 bg-white p-5 shadow-[0_10px_35px_rgba(23,59,104,0.09)] transition-shadow duration-500 hover:shadow-[0_15px_40px_rgba(23,59,104,0.16)] sm:h-[150px] sm:w-[150px] sm:p-6">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain"
                      />

                      <span className="absolute -right-1 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-[#F7F5EF] bg-[#A62832] text-[9px] font-bold text-white">
                        {partner.number}
                      </span>
                    </div>

                    <p className="mt-3 max-w-[155px] text-center text-[10px] font-bold leading-5 text-[#173B68] sm:text-xs">
                      {partner.name}
                    </p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* AIU centre bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
          >
            <motion.div
              animate={{
                y: [0, -9, 0, 6, 0],
                x: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex flex-col items-center"
            >
              <div className="relative flex h-[145px] w-[145px] items-center justify-center rounded-full border-[5px] border-[#F7F5EF] bg-white p-6 shadow-[0_15px_45px_rgba(23,59,104,0.15)] sm:h-[175px] sm:w-[175px] sm:p-8">
                <div className="absolute inset-[-9px] rounded-full border border-[#A62832]/25" />

                <img
                  src="/images/partners/aiu.jpg"
                  alt="American Imperial University logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="mt-4 whitespace-nowrap text-center">
                <p className="text-[9px] font-bold tracking-[0.18em] text-[#A62832]">
                  THE CENTRE OF CONNECTION
                </p>

                <p className="mt-1 font-serif text-xl text-[#173B68]">
                  American Imperial University
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Closing statement */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#173B68]/10 pt-6 sm:flex-row">
          <p className="text-[9px] font-bold tracking-[0.22em] text-[#777777]">
            CONNECTING INSTITUTIONS · EXPANDING PERSPECTIVES
          </p>

          <p className="font-serif text-xl italic text-[#173B68]">
            One network. Many possibilities.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Partnership
