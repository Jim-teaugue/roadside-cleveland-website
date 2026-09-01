import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Zap } from 'lucide-react'
import { BUSINESS_INFO } from '../constants/business'

export default function ServiceArea() {
  return (
    <section className="py-20 md:py-32 bg-navy-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity }}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-full min-h-96"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-700 border border-white/10 shadow-2xl">
              {/* Animated map grid */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 107, 53, 0.2) 25%, rgba(255, 107, 53, 0.2) 26%, transparent 27%, transparent 74%, rgba(255, 107, 53, 0.2) 75%, rgba(255, 107, 53, 0.2) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, rgba(255, 107, 53, 0.2) 25%, rgba(255, 107, 53, 0.2) 26%, transparent 27%, transparent 74%, rgba(255, 107, 53, 0.2) 75%, rgba(255, 107, 53, 0.2) 76%, transparent 77%, transparent)`,
                    backgroundSize: '50px 50px',
                  }}
                />
              </div>

              {/* Central location pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div className="w-16 h-16 rounded-full bg-accent-orange/20 border-2 border-accent-orange" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-accent-orange" />
                  </div>
                </motion.div>
              </div>

              {/* Animated service radius circles */}
              <motion.div
                className="absolute inset-1/4 rounded-full border-2 border-accent-orange/30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-1/3 rounded-full border border-accent-orange/20"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Proudly Serving Cleveland, Ohio
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Roadside Cleveland Mobile Mechanic provides a local option for drivers looking for convenient automotive assistance in the Cleveland area.
              </p>
            </div>

            {/* Business Info Box */}
            <motion.div
              className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm"
              whileHover={{ borderColor: 'rgba(255, 107, 53, 0.5)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-display font-bold text-white mb-1">Business Location</p>
                    <p className="text-white/80 text-sm">{BUSINESS_INFO.address}</p>
                    <p className="text-white/80 text-sm">
                      {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                    </p>
                    <p className="text-white/80 text-sm">{BUSINESS_INFO.country}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-orange text-white font-bold rounded-lg hover:bg-accent-bright transition-all duration-300 transform hover:scale-105 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-5 h-5" />
              Check Service Availability
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
