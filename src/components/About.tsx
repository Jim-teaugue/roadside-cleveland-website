import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react'
import { BUSINESS_INFO } from '../constants/business'

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-navy-50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-full min-h-96"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-navy-900 to-navy-700 shadow-2xl">
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚗</div>
                  <p className="text-white/60 font-display">Cleveland Mobile Service</p>
                </div>
              </div>

              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 107, 53, 0.1) 25%, rgba(255, 107, 53, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 107, 53, 0.1) 75%, rgba(255, 107, 53, 0.1) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, rgba(255, 107, 53, 0.1) 25%, rgba(255, 107, 53, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 107, 53, 0.1) 75%, rgba(255, 107, 53, 0.1) 76%, transparent 77%, transparent)`,
                    backgroundSize: '50px 50px',
                  }}
                />
              </div>
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
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
                Bringing Automotive Assistance Closer to You
              </h2>
              <p className="text-lg text-steel-600 leading-relaxed mb-4">
                Roadside Cleveland Mobile Mechanic offers a convenient alternative for drivers who need automotive attention without immediately visiting a traditional repair shop.
              </p>
              <p className="text-lg text-steel-600 leading-relaxed mb-4">
                By focusing on mobile service, the business helps customers take the next step when vehicle maintenance concerns or unexpected mechanical issues arise.
              </p>
              <p className="text-lg text-steel-600 leading-relaxed">
                Whether your vehicle is at home, work, or another location, getting in touch is the first step toward discussing your automotive service needs.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="bg-white rounded-xl p-4 border border-navy-100 hover:border-accent-orange transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-accent-orange" />
                  <div>
                    <p className="text-xs text-steel-600">Location</p>
                    <p className="font-display font-bold text-navy-900">Cleveland, Ohio</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="bg-white rounded-xl p-4 border border-navy-100 hover:border-accent-orange transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-accent-orange" />
                  <div>
                    <p className="text-xs text-steel-600">Hours</p>
                    <p className="font-display font-bold text-navy-900">Open 24 Hours</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="bg-white rounded-xl p-4 border border-navy-100 hover:border-accent-orange transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-accent-orange" />
                  <div>
                    <p className="text-xs text-steel-600">Rating</p>
                    <p className="font-display font-bold text-navy-900">4.5 Stars</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="bg-white rounded-xl p-4 border border-navy-100 hover:border-accent-orange transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">🔧</span>
                  <div>
                    <p className="text-xs text-steel-600">Service</p>
                    <p className="font-display font-bold text-navy-900">Mobile</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
