import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '../constants/business'

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl" />

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
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Get answers to common questions about our mobile mechanic service.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
                whileHover={{ x: 4 }}
              >
                <div className="bg-white border-2 border-navy-100 rounded-xl p-6 hover:border-accent-orange hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-display font-bold text-navy-900 pr-4">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-accent-orange" />
                    </motion.div>
                  </div>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                      marginTop: openIndex === index ? 16 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t-2 border-navy-100 pt-4">
                      <p className="text-steel-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
