import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Star, Send } from 'lucide-react'
import { BUSINESS_INFO } from '../constants/business'

export default function Contact() {
  const [formData, setFormData] = React.useState({
    fullName: '',
    phone: '',
    email: '',
    vehicleMake: '',
    location: '',
    serviceNeeded: '',
    issue: '',
  })

  const [submitted, setSubmitted] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        vehicleMake: '',
        location: '',
        serviceNeeded: '',
        issue: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-4">
                {BUSINESS_INFO.name}
              </h2>
              <p className="text-lg text-steel-600">
                Get in touch with our team to discuss your vehicle concerns and available service options.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Phone */}
              <motion.a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-start gap-4 p-6 bg-navy-50 rounded-xl hover:bg-navy-100 transition-colors duration-300 group"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent-orange/20 flex items-center justify-center text-accent-orange flex-shrink-0 group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display font-bold text-navy-900">Phone</p>
                  <p className="text-steel-600">{BUSINESS_INFO.phone}</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-start gap-4 p-6 bg-navy-50 rounded-xl hover:bg-navy-100 transition-colors duration-300 group"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent-orange/20 flex items-center justify-center text-accent-orange flex-shrink-0 group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display font-bold text-navy-900">Email</p>
                  <p className="text-steel-600 break-all">{BUSINESS_INFO.email}</p>
                </div>
              </motion.a>

              {/* Address */}
              <motion.div
                className="flex items-start gap-4 p-6 bg-navy-50 rounded-xl group"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent-orange/20 flex items-center justify-center text-accent-orange flex-shrink-0 group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display font-bold text-navy-900">Address</p>
                  <p className="text-steel-600">{BUSINESS_INFO.address}</p>
                  <p className="text-steel-600">
                    {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                  </p>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                className="flex items-start gap-4 p-6 bg-navy-50 rounded-xl group"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent-orange/20 flex items-center justify-center text-accent-orange flex-shrink-0 group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display font-bold text-navy-900">Hours</p>
                  <p className="text-steel-600">{BUSINESS_INFO.hours}</p>
                </div>
              </motion.div>

              {/* Rating */}
              <motion.div
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-accent-orange/10 to-accent-amber/10 rounded-xl border border-accent-orange/20 group"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent-orange/20 flex items-center justify-center text-accent-orange flex-shrink-0 group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display font-bold text-navy-900">{BUSINESS_INFO.rating} Google Rating</p>
                  <p className="text-steel-600">Based on {BUSINESS_INFO.reviews} customer reviews</p>
                </div>
              </motion.div>
            </div>

            {/* Large Call Button */}
            <motion.a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="block w-full text-center py-6 bg-gradient-accent text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                CALL NOW
              </div>
            </motion.a>
          </motion.div>

          {/* Right Side - Service Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl border-2 border-navy-100 p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-2">
                Request Mobile Service
              </h3>
              <p className="text-steel-600 mb-8">
                Tell us a little about your vehicle and what you're experiencing, and we'll help you take the next step.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center h-96"
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent-orange/20 flex items-center justify-center mx-auto">
                      <div className="w-8 h-8 rounded-full bg-accent-orange animate-pulse" />
                    </div>
                    <p className="font-display font-bold text-navy-900 text-xl">Thank You!</p>
                    <p className="text-steel-600">
                      We've received your service request. We'll contact you shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-navy-100 focus:border-accent-orange focus:outline-none transition-colors duration-300 bg-white"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-navy-100 focus:border-accent-orange focus:outline-none transition-colors duration-300 bg-white"
                      placeholder="Your phone"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-navy-100 focus:border-accent-orange focus:outline-none transition-colors duration-300 bg-white"
                      placeholder="Your email"
                    />
                  </div>

                  {/* Vehicle Make & Model */}
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">
                      Vehicle Make & Model
                    </label>
                    <input
                      type="text"
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-navy-100 focus:border-accent-orange focus:outline-none transition-colors duration-300 bg-white"
                      placeholder="e.g., 2020 Honda Civic"
                    />
                  </div>

                  {/* Current Location */}
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">
                      Current Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-navy-100 focus:border-accent-orange focus:outline-none transition-colors duration-300 bg-white"
                      placeholder="Your location"
                    />
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">
                      Service Needed
                    </label>
                    <select
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-navy-100 focus:border-accent-orange focus:outline-none transition-colors duration-300 bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="diagnostics">Vehicle Diagnostics</option>
                      <option value="repair">Mobile Auto Repair</option>
                      <option value="battery">Battery Issues</option>
                      <option value="brake">Brake Service</option>
                      <option value="starter">Starter & Alternator</option>
                      <option value="engine">Engine Troubleshooting</option>
                      <option value="maintenance">Routine Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Describe the Issue */}
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">
                      Describe the Vehicle Issue
                    </label>
                    <textarea
                      name="issue"
                      value={formData.issue}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-navy-100 focus:border-accent-orange focus:outline-none transition-colors duration-300 bg-white resize-none"
                      placeholder="Tell us what's happening with your vehicle..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full py-4 bg-gradient-accent text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    Request Mobile Service
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
