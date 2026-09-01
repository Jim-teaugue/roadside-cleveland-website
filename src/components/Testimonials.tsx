import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS, BUSINESS_INFO } from '../constants/business'
import StarRating from './StarRating'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-navy-50 to-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />

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
            Trusted by Cleveland Drivers
          </h2>

          {/* Rating Badge */}
          <motion.div
            className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border-2 border-navy-100 shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex gap-1 mb-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-orange text-accent-orange" />
                ))}
              </div>
              <p className="font-display font-bold text-navy-900">{BUSINESS_INFO.rating} Google Rating</p>
              <p className="text-xs text-steel-600">Based on {BUSINESS_INFO.reviews} Reviews</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Review */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl border-2 border-accent-orange/30 p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4 mb-6">
              <Quote className="w-8 h-8 text-accent-orange flex-shrink-0" />
              <StarRating rating={5} size="lg" />
            </div>
            <p className="text-lg md:text-xl text-navy-900 mb-6 leading-relaxed font-medium">
              "{TESTIMONIALS[0].text}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display font-bold text-navy-900">{TESTIMONIALS[0].author}</p>
                <p className="text-sm text-steel-600">{TESTIMONIALS[0].date}</p>
              </div>
              <div className="text-accent-orange font-semibold">Google Review</div>
            </div>
          </div>
        </motion.div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(1).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl border border-navy-100 p-6 h-full hover:border-accent-orange hover:shadow-lg transition-all duration-300">
                {/* Stars */}
                <StarRating rating={testimonial.rating} size="md" className="mb-4" />

                {/* Review Text */}
                <p className="text-navy-900 text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-navy-100 pt-4">
                  <p className="font-display font-bold text-navy-900 text-sm">{testimonial.author}</p>
                  <p className="text-xs text-steel-600">{testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
