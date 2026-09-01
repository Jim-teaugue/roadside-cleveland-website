import React from 'react'
import { motion } from 'framer-motion'

interface StarRatingProps {
  rating: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function StarRating({ rating, size = 'md', className = '' }: StarRatingProps) {
  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
  }

  const stars = Array.from({ length: 5 }, (_, i) => i + 1)

  return (
    <div className={`flex gap-1 ${className}`}>
      {stars.map((star) => (
        <motion.div
          key={star}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: star * 0.1 }}
        >
          <span
            className={`${
              star <= rating ? 'text-accent-orange' : 'text-steel-200'
            } transition-colors`}
            style={{ fontSize: `${sizeMap[size]}px` }}
          >
            ★
          </span>
        </motion.div>
      ))}
    </div>
  )
}
