import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Zap, CheckCircle } from 'lucide-react'

const features = [
  {
    number: '01',
    title: 'We Come to Your Location',
    description: 'Convenient automotive assistance designed around where your vehicle needs attention.',
    icon: MapPin,
  },
  {
    number: '02',
    title: 'Available Around the Clock',
    description: 'Roadside Cleveland Mobile Mechanic is listed as open 24 hours, making it easier to reach out when automotive concerns happen outside traditional business hours.',
    icon: Clock,
  },
  {
    number: '03',
    title: 'Local Cleveland Service',
    description: 'A local automotive service option for drivers in Cleveland and surrounding areas.',
    icon: Zap,
  },
  {
    number: '04',
    title: 'Convenient & Straightforward',
    description: 'Get in touch, explain what\'s happening with your vehicle, and discuss the next steps.',
    icon: CheckCircle,
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Animated background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl" />

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
            Automotive Service That Comes to You
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Getting vehicle repairs shouldn't always require arranging transportation, waiting at a repair shop, or disrupting your entire day. A mobile mechanic approach makes it easier to get automotive assistance closer to where your vehicle is located.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.number}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Feature Card */}
                <div className="relative h-full">
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-orange to-accent-bright opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5"
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="w-full h-full rounded-2xl bg-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative bg-white rounded-2xl p-8 h-full border-2 border-navy-100 group-hover:border-transparent transition-colors duration-300">
                    {/* Number */}
                    <div className="text-5xl font-display font-bold text-accent-orange/20 mb-4">
                      {feature.number}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-accent-orange/10 flex items-center justify-center mb-4 group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 text-accent-orange group-hover:text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-display font-bold text-navy-900 mb-3">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-steel-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    {/* Accent line */}
                    <motion.div
                      className="w-8 h-1 bg-accent-orange rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: 32 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
