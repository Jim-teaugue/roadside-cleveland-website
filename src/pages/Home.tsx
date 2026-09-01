import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'
import { BUSINESS_INFO } from '../constants/business'
import Hero from '../components/Hero'
import UrgentServiceStrip from '../components/UrgentServiceStrip'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import About from '../components/About'
import ServiceArea from '../components/ServiceArea'
import FinalCTA from '../components/FinalCTA'
import Contact from '../components/Contact'

export default function Home() {
  const [showMobileActionBar, setShowMobileActionBar] = React.useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('home')
      if (heroElement) {
        const isHeroVisible = heroElement.getBoundingClientRect().bottom > window.innerHeight
        setShowMobileActionBar(!isHeroVisible)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Hero />
      <UrgentServiceStrip />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <About />
      <ServiceArea />
      <FinalCTA />
      <Contact />

      {/* Mobile Action Bar */}
      <AnimatePresence>
        {showMobileActionBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-white border-t border-navy-100 shadow-lg"
          >
            <div className="flex items-center gap-2 p-4 max-w-2xl mx-auto">
              <motion.a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent-orange text-white font-bold rounded-lg hover:bg-accent-bright transition-all duration-300 text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.a>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-1 py-3 bg-navy-900 text-white font-bold rounded-lg hover:bg-navy-800 transition-all duration-300 text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                🔧 Service
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  )
}
