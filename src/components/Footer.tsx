import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react'
import { BUSINESS_INFO } from '../constants/business'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Vehicle Diagnostics',
  'Mobile Auto Repair',
  'Battery Assistance',
  'Brake Service',
  'Starter & Alternator Issues',
  'Engine Troubleshooting',
  'Routine Maintenance',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer Content */}
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-navy-700">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="font-bold">RC</span>
              </div>
              <div>
                <h3 className="font-display font-bold">Roadside Cleveland</h3>
                <p className="text-xs text-steel-300">Mobile Mechanic</p>
              </div>
            </div>
            <p className="text-sm text-steel-300 mb-4">
              Professional mobile automotive service available 24/7 for Cleveland area drivers.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-steel-300 hover:text-accent-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-steel-300">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-bold mb-4 text-lg">Contact Info</h4>
            <div className="space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-start gap-2 text-sm text-steel-300 hover:text-accent-orange transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-start gap-2 text-sm text-steel-300 hover:text-accent-orange transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-steel-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>{BUSINESS_INFO.address}</div>
                  <div>
                    {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm text-steel-300">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-steel-300 pt-2">
                <Star className="w-4 h-4 mt-0.5 text-accent-orange flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">4.5 Rating</div>
                  <div className="text-xs">{BUSINESS_INFO.reviews} Google Reviews</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="section-container py-8 border-t border-navy-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-steel-400">
            © {currentYear} Roadside Cleveland Mobile Mechanic. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-steel-400 hover:text-steel-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-steel-400 hover:text-steel-300 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
