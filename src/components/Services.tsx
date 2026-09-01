import React from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Wrench,
  Battery,
  AlertCircle,
  CheckCircle,
  Settings,
  Gauge,
  Hammer,
  ChevronRight,
} from 'lucide-react'
import { SERVICES } from '../constants/business'

const iconMap: { [key: string]: React.ReactNode } = {
  Zap: <Zap className="w-8 h-8" />,
  Wrench: <Wrench className="w-8 h-8" />,
  Battery: <Battery className="w-8 h-8" />,
  AlertCircle: <AlertCircle className="w-8 h-8" />,
  CheckCircle: <CheckCircle className="w-8 h-8" />,
  Settings: <Settings className="w-8 h-8" />,
  Gauge: <Gauge className="w-8 h-8" />,
  Hammer: <Hammer className="w-8 h-8" />,
  Engine: <Wrench className="w-8 h-8" />,
}

export default function Services() {
  const featuredServices = SERVICES.slice(0, 2)
  const otherServices = SERVICES.slice(2)

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-navy-50 to-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
            Mobile Automotive Services
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Professional assistance for a range of vehicle concerns, available at your location.
          </p>
        </motion.div>

        {/* Featured Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 border-2 border-navy-100 hover:border-accent-orange transition-all duration-300 h-full shadow-sm hover:shadow-xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                    {iconMap[service.icon]}
                  </div>
                  <motion.div
                    className="text-accent-orange"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-display font-bold text-navy-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-steel-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 2) * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-6 border border-navy-100 hover:border-accent-orange hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange mb-4 group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                  {iconMap[service.icon]}
                </div>
                <h4 className="font-display font-bold text-navy-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-steel-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
