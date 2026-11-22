
import { motion } from 'motion/react'
import {
  Award,
  Landmark,
  ShieldCheck,
  ArrowUpRight,
  FileCheck2,
} from 'lucide-react'

const recognitions = [
  {
    number: '01',
    category: 'STATE AUTHORIZATION',
    title: 'Florida Department of Education',
    subtitle: 'Institutional Recognition',
    description:
      'AIU states that it is recognized as an authorized autonomous degree-granting higher education institution in the State of Florida.',
    detail: 'Institution reference: #12500',
    icon: Landmark,
  },
  {
    number: '02',
    category: 'INSTITUTIONAL ACCREDITATION',
    title: 'QAHE',
    subtitle: 'International Association for Quality Assurance in Higher Education',
    description:
      'AIU reports that it has been awarded full accreditation by the International Association for Quality Assurance in Higher Education.',
    detail: 'Accreditation claim published by AIU',
    icon: ShieldCheck,
  },
  {
    number: '03',
    category: 'ORGANIZATIONAL MEMBERSHIP',
    title: 'American Accreditation Association',
    subtitle: 'Organizational Membership',
    description:
      'AIU identifies its organizational membership with the American Accreditation Association as part of its institutional affiliations.',
    detail: 'Membership certificate: MP25141',
    icon: Award,
  },
]

function AccreditationPartners() {
  return (
    <section
      id="recognition"
      className="relative w-full overflow-hidden bg-white py-14 sm:py-18 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col justify-between gap-5 lg:mb-14 lg:flex-row lg:items-end"
        >
          <div>
            <p className="mb-3 flex items-center gap-3 text-[10px] font-bold tracking-[0.23em] text-[#A62832]">
              <span className="h-px w-8 bg-[#A62832]" />
              RECOGNITION & AFFILIATIONS
            </p>

            <h2 className="max-w-3xl font-serif text-4xl leading-[1.08] text-[#173B68] sm:text-5xl lg:text-6xl">
              A commitment to
              <br />
              <span className="italic">quality and standards.</span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-6 text-[#777777] sm:text-sm sm:leading-7">
            Explore the institutional recognition, accreditation
            and professional affiliations presented by
            American Imperial University.
          </p>
        </motion.div>

        {/* Recognition cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {recognitions.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                className="group relative flex min-h-[340px] flex-col overflow-hidden border border-[#173B68]/15 bg-[#F7F5EF] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#173B68]/35 hover:shadow-xl sm:p-8"
              >
                {/* Decorative top line */}
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#A62832] transition-all duration-500 group-hover:w-full" />

                {/* Card header */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#173B68]/15 bg-white text-[#173B68]">
                    <Icon size={23} strokeWidth={1.3} />
                  </div>

                  <span className="font-serif text-3xl text-[#173B68]/20">
                    {item.number}
                  </span>
                </div>

                {/* Card content */}
                <div className="mt-8 flex-1">
                  <p className="mb-3 text-[9px] font-bold tracking-[0.17em] text-[#A62832]">
                    {item.category}
                  </p>

                  <h3 className="font-serif text-2xl leading-tight text-[#173B68] sm:text-[27px]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] font-semibold leading-5 text-[#777777]">
                    {item.subtitle}
                  </p>

                  <div className="my-5 h-px w-full bg-[#173B68]/15" />

                  <p className="text-xs leading-6 text-[#666666] sm:text-[13px]">
                    {item.description}
                  </p>
                </div>

                {/* Card footer */}
                <div className="mt-7 flex items-center gap-2 border-t border-[#173B68]/15 pt-4">
                  <FileCheck2
                    size={14}
                    className="shrink-0 text-[#A62832]"
                  />
                  <span className="text-[9px] font-semibold tracking-wide text-[#173B68]/70">
                    {item.detail}
                  </span>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#173B68]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-[10px] leading-5 text-[#777777]">
            Authorization, accreditation and organizational membership
            are distinct institutional statuses. Refer to the relevant
            organizations for current verification and details.
          </p>

          <a
            href="https://americanimperialuniversity.com/about-us/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit shrink-0 items-center gap-2 text-[10px] font-bold tracking-[0.13em] text-[#173B68] transition-colors hover:text-[#A62832]"
          >
            OFFICIAL AIU INFORMATION
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

      </div>
    </section>
  )
}

export default AccreditationPartners
