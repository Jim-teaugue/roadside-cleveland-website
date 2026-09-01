import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Wrench } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Contact Us',
    description:
      'Call Roadside Cleveland Mobile Mechanic or send a service request and tell us what\'s happening with your vehicle.',
    icon: Phone,
  },
  {
    number: '02',
    title: 'Discuss Your Location & Vehicle',
    description: 'Share relevant information about where you are and the type of automotive assistance you\'re looking for.',
    icon: MapPin,
  },
  {
    number: '03',
    title: 'Get Mobile Automotive Assistance',
    description: 'Arrange the appropriate next step for getting your vehicle the professional attention it needs.',
    icon: Wrench,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
            Simple From First Call to Service
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            A straightforward process designed to connect you with professional mobile automotive assistance.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Animated connecting line - visible on desktop */}
          <motion.svg
            className="hidden lg:block absolute top-32 left-0 w-full h-32 pointer-events-none"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 100 50 L 1100 50"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff6b35" stopOpacity="0" />
                <stop offset="50%" stopColor="#ff6b35" stopOpacity="1" />
                <stop offset="100%" stopColor="#ff6b35" stopOpacity="0" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-2xl p-8 border-2 border-navy-100 text-center h-full hover:border-accent-orange hover:shadow-lg transition-all duration-300">
                    {/* Number Circle */}
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-6 text-white font-display font-bold text-2xl shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-accent-orange/10 flex items-center justify-center mx-auto mb-6 text-accent-orange">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-display font-bold text-navy-900 mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-steel-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
