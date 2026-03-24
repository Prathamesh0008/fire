'use client'

import { useRef } from 'react'
import CountUp from 'react-countup'
import { motion, useInView } from 'framer-motion'
import { FiAward as Award, FiShield as Shield, FiCheckCircle as CheckCircle } from 'react-icons/fi'

const counters = [
  { value: 780, label: 'Projects Done', suffix: '+' },
  { value: 12, label: 'Years Experience', suffix: '+' },
  { value: 30, label: 'Avg Response Time', suffix: ' min' }
]

const certifications = ['ISO 9001:2015', 'NFPA-Aligned Design', 'IS 2189 Compliant', 'GST Verified', 'MSME Registered']

const demoCertificates = [
  {
    label: 'ISO 45001 : 2018',
    name: 'ISO 9001:2015 Quality Management',
    certId: 'QMS-2026-1148',
    issuer: 'Global Compliance Registry',
    validTill: 'Dec 2027',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Certificate_sample.jpg'
  },
  {
    label: 'ISO 9001 : 2015',
    name: 'Fire Safety Installation Compliance',
    certId: 'FSI-2026-4432',
    issuer: 'National Safety Board',
    validTill: 'Aug 2028',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Image_of_certificate.jpg'
  },
  {
    label: 'GST',
    name: 'Emergency Response Readiness',
    certId: 'ERR-2026-9084',
    issuer: 'Industrial Risk Council',
    validTill: 'Mar 2028',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Certificate_of_registration.jpg'
  }
]

export default function TrustLayer() {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 bg-slate-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Shield size={14} />
            Trust Layer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Certified. Proven. Response-Ready.</h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-300">
            Credibility signals that help buyers choose faster: measurable outcomes, recognized standards, and trusted implementations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.4 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center"
            >
              <p className="text-4xl font-bold text-white">
                {inView && <CountUp end={counter.value} duration={2.4} suffix={counter.suffix} />}
              </p>
              <p className="mt-2 text-sm uppercase tracking-wide text-slate-400">{counter.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
        >
          <div className="mb-5 flex items-center gap-2 text-white">
            <Award className="text-primary" />
            <h3 className="text-xl font-bold">Certifications & Compliance</h3>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: 'spring', stiffness: 180, damping: 14 }}
                className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200"
              >
                <CheckCircle className="text-primary" size={16} />
                <span>{cert}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
              Demo Certificates
            </h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {demoCertificates.map((certificate, index) => (
                <motion.div
                  key={certificate.certId}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  className="group rounded-2xl border border-slate-700/80 bg-slate-950/60 p-3"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-red-400 bg-white">
                    <img
                      src={certificate.image}
                      alt={certificate.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mt-4 rounded-2xl border border-emerald-300/60 bg-gradient-to-r from-[#7CD300] via-[#2BCB67] to-[#00C86A] px-4 py-4 text-center shadow-[0_14px_32px_-14px_rgba(34,197,94,0.85)] ring-1 ring-emerald-200/20">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                      Verified Certificate
                    </p>
                    <p className="mt-1 text-2xl font-extrabold text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.2)] md:text-3xl">
                      {certificate.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
