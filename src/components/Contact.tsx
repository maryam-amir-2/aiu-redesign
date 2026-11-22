
import { useState } from 'react'
import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from 'lucide-react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F7F5EF] px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-[#A62832] sm:text-xs">
              <span className="h-px w-9 bg-[#A62832]" />
              TAKE THE NEXT STEP
            </p>

            <h2 className="font-serif text-5xl leading-[1.05] text-[#173B68] sm:text-6xl lg:text-[72px]">
              Your next
              <br />
              chapter
              <br />
              <span className="italic text-[#A62832]">starts here.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-8 text-[#626873] sm:text-base">
              Every great journey begins with a conversation.
              Tell us what you're looking for, and take the first
              step towards your academic ambitions.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#173B68]/15 text-[#A62832]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.18em] text-[#777777]">
                    EMAIL
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#173B68]">
                    info@americanimperialuniversity.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#173B68]/15 text-[#A62832]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.18em] text-[#777777]">
                    LOCATION
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#173B68]">
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 hidden items-center gap-4 lg:flex">
              <span className="h-px w-14 bg-[#A62832]" />
              <span className="font-serif text-xl italic text-[#777777]">
                Think beyond boundaries.
              </span>
            </div>
          </motion.div>

          {/* Enquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative overflow-hidden bg-[#091629] p-7 text-white sm:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/[0.06]" />

            <div className="relative">
              <p className="mb-3 text-[9px] font-bold tracking-[0.25em] text-[#D4777D]">
                ENQUIRY FORM
              </p>

              <h3 className="font-serif text-3xl sm:text-4xl">
                Let's start a conversation.
              </h3>

              <p className="mt-3 text-xs leading-6 text-white/50">
                Share a few details and let us know how we can help.
              </p>

              {submitted ? (
                <div className="mt-10 border border-white/15 bg-white/[0.05] p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#A62832]">
                    <Send size={20} />
                  </div>

                  <h4 className="font-serif text-3xl">
                    Thank you!
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Your demo enquiry has been submitted on this page.
                    This portfolio form is not connected to an email
                    service, so no message has actually been sent.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[10px] font-bold tracking-[0.18em] text-[#D4777D] hover:text-white"
                  >
                    SEND ANOTHER ENQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-2 block text-[10px] font-semibold tracking-wider text-white/65">
                        FULL NAME
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Your name"
                        required
                        className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#D4777D]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="mb-2 block text-[10px] font-semibold tracking-wider text-white/65">
                        EMAIL ADDRESS
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#D4777D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-program" className="mb-2 block text-[10px] font-semibold tracking-wider text-white/65">
                      PROGRAM OF INTEREST
                    </label>
                    <select
                      id="contact-program"
                      required
                      defaultValue=""
                      className="w-full border-b border-white/20 bg-[#091629] px-0 py-3 text-sm text-white/70 outline-none focus:border-[#D4777D]"
                    >
                      <option value="" disabled>
                        Select a program
                      </option>
                      <option value="MBA">Master of Business Administration</option>
                      <option value="DBA">Doctor of Business Administration</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="Other">Other / Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-2 block text-[10px] font-semibold tracking-wider text-white/65">
                      YOUR MESSAGE
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      placeholder="Tell us a little about what you're looking for..."
                      required
                      className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#D4777D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-3 inline-flex w-full items-center justify-between bg-[#A62832] px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#8E202B]"
                  >
                    SUBMIT YOUR ENQUIRY
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
