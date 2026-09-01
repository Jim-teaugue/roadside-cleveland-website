import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'
import { BUSINESS_INFO } from '../constants/business'

export default function UrgentServiceStrip() {
  return (
    <section className="bg-gradient-to-r from-navy-900 to-navy-800 text-white relative overflow-hidden py-12 md:py-16">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 107, 53, 0.1) 10px,
              rgba(255, 107, 53, 0.1) 20px
            )`,
          }}
        />
      </motion.div>

      <div className="section-container relative z-10">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Stranded or Dealing With Vehicle Trouble?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Contact Roadside Cleveland Mobile Mechanic to discuss your vehicle issue and available mobile service options.
          </p>
          <motion.a
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-orange text-white font-bold rounded-lg hover:bg-accent-bright transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            Call {BUSINESS_INFO.phone}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
