import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, ArrowRight } from 'lucide-react'
import { BUSINESS_INFO } from '../constants/business'

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-dark text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 107, 53, 0.1) 25%, rgba(255, 107, 53, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 107, 53, 0.1) 75%, rgba(255, 107, 53, 0.1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 107, 53, 0.1) 25%, rgba(255, 107, 53, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 107, 53, 0.1) 75%, rgba(255, 107, 53, 0.1) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="text-center space-y-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Need a Mobile Mechanic in Cleveland?
          </h2>

          <p className="text-xl text-white/80 leading-relaxed">
            Tell us what's happening with your vehicle and where you're located. Contact Roadside Cleveland Mobile Mechanic to discuss your automotive service needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <motion.a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-orange text-navy-900 font-bold rounded-lg hover:bg-accent-bright transition-all duration-300 transform hover:scale-105 text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO.phone}
            </motion.a>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border-2 border-white text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Service
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
