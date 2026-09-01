import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { BUSINESS_INFO } from '../constants/business'

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-navy-100 shadow-sm">
        <div className="section-container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white font-bold text-lg">RC</span>
            </motion.div>
            <span className="font-display font-bold text-navy-900 hidden lg:block">Roadside Cleveland</span>
          </Link>

          <div className="flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-navy-700 hover:text-accent-orange transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="btn-primary"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-navy-100">
        <div className="px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white font-bold text-lg">RC</span>
            </motion.div>
          </Link>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-navy-100 rounded-lg transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-navy-900" />
            ) : (
              <Menu className="w-6 h-6 text-navy-900" />
            )}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t border-navy-100 bg-white"
          >
            <div className="px-4 py-4 space-y-3 flex flex-col">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-navy-700 hover:text-accent-orange py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-navy-100 space-y-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="btn-primary w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  )
}
