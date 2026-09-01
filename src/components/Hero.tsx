import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Star, ArrowRight } from 'lucide-react'
import { BUSINESS_INFO } from '../constants/business'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-navy-50 via-white to-steel-50 overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-grid-pattern"
          style={{ backgroundSize: '50px 50px' }}
        />
      </div>

      {/* Floating accent elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-accent-orange rounded-full filter blur-3xl opacity-10"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-navy-600 rounded-full filter blur-3xl opacity-5"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="section-container relative z-10 pt-32 md:pt-40">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-orange/10 border border-accent-orange/30 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Clock className="w-4 h-4 text-accent-orange" />
              <span className="text-sm font-semibold text-accent-orange">Open 24 Hours</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-display font-bold text-navy-900 leading-tight">
              Mobile Mechanic Help When You Need It Most
            </h1>

            {/* Description */}
            <p className="text-lg text-steel-600 leading-relaxed max-w-md">
              Vehicle trouble can happen anywhere and at inconvenient times. Roadside Cleveland Mobile Mechanic provides convenient automotive assistance directly at your location, helping you get the professional attention your vehicle needs without the hassle of going to a traditional repair shop.
            </p>

            {/* Trust Badges */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-3 text-sm text-navy-700">
                <div className="w-5 h-5 rounded-full bg-accent-orange/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent-orange" />
                </div>
                <span>Mobile Service at Your Location</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-navy-700">
                <div className="w-5 h-5 rounded-full bg-accent-orange/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent-orange" />
                </div>
                <span>Available 24 Hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-navy-700">
                <div className="w-5 h-5 rounded-full bg-accent-orange/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent-orange" />
                </div>
                <span>Serving Cleveland</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-navy-700">
                <div className="w-5 h-5 rounded-full bg-accent-orange/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent-orange" />
                </div>
                <span>4.5-Star Google Rating</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="btn-primary text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.button
                className="btn-secondary text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Service
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Image Placeholder with Overlay */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full min-h-96 lg:min-h-screen flex items-center justify-center"
          >
            {/* Hero Image Placeholder */}
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-navy-900 to-navy-700 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Placeholder Image Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔧</div>
                  <p className="text-white/60 font-display">Mobile Mechanic Service</p>
                </div>
              </div>

              {/* Overlay Grid Pattern */}
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

              {/* Location Pin */}
              <motion.div
                className="absolute top-8 right-8 w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>

            {/* Floating Rating Card */}
            <motion.div
              className="absolute bottom-8 right-8 glass-card bg-white/95 shadow-2xl max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent-orange text-accent-orange" />
                    ))}
                  </div>
                  <p className="font-display font-bold text-navy-900">4.5 Google Rating</p>
                  <p className="text-xs text-steel-600">Based on 8 Reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
