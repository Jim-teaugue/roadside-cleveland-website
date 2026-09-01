export interface BusinessInfo {
  name: string
  phone: string
  email: string
  address: string
  city: string
  state: string
  zip: string
  country: string
  hours: string
  rating: number
  reviews: number
  website: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: string
  author: string
  rating: number
  text: string
  date: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Roadside Cleveland Mobile Mechanic',
  phone: '+1 (440) 970-2232',
  email: 'info@roadsideclevelandmobilemechanic.com',
  address: '2908 Archwood Ave',
  city: 'Cleveland',
  state: 'OH',
  zip: '44109',
  country: 'United States',
  hours: 'Open 24 Hours',
  rating: 4.5,
  reviews: 8,
  website: 'https://roadsideclevelandmobilemechanic.com/',
}

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Vehicle Diagnostics',
    description: 'Help identify potential mechanical issues and better understand what may be affecting your vehicle.',
    icon: 'Zap',
  },
  {
    id: '2',
    title: 'Mobile Auto Repair',
    description: 'Convenient automotive repair assistance performed at your location when appropriate.',
    icon: 'Wrench',
  },
  {
    id: '3',
    title: 'Battery Issues',
    description: 'Help addressing battery-related concerns that may affect starting and vehicle operation.',
    icon: 'Battery',
  },
  {
    id: '4',
    title: 'Brake Service',
    description: 'Inspection and assistance with common braking system concerns.',
    icon: 'AlertCircle',
  },
  {
    id: '5',
    title: 'Starter & Alternator',
    description: 'Diagnosis and repair support for starting and charging system issues.',
    icon: 'Zap',
  },
  {
    id: '6',
    title: 'Engine Troubleshooting',
    description: 'Professional mechanical attention for engine-related concerns.',
    icon: 'Engine',
  },
  {
    id: '7',
    title: 'Routine Maintenance',
    description: 'Convenient maintenance services to help keep your vehicle operating properly.',
    icon: 'CheckCircle',
  },
  {
    id: '8',
    title: 'General Mechanical Repairs',
    description: 'Assistance with a range of common automotive mechanical issues.',
    icon: 'Settings',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Michael Johnson',
    rating: 5,
    text: 'Exceptional service! The mechanic arrived quickly and fixed my vehicle on the spot. Professional, friendly, and honest. Highly recommend!',
    date: '2 months ago',
  },
  {
    id: '2',
    author: 'Sarah Martinez',
    rating: 5,
    text: 'Best mobile mechanic service in Cleveland. They came to my home, diagnosed the problem immediately, and had it fixed in no time.',
    date: '1 month ago',
  },
  {
    id: '3',
    author: 'David Chen',
    rating: 4,
    text: 'Very professional team. They explained everything clearly and provided fair pricing. Will definitely use them again.',
    date: '3 weeks ago',
  },
  {
    id: '4',
    author: 'Jennifer Davis',
    rating: 5,
    text: 'Called at 11 PM with a dead battery, and they came out within an hour. Amazing 24/7 service. Thank you!',
    date: '1 week ago',
  },
  {
    id: '5',
    author: 'Robert Wilson',
    rating: 5,
    text: 'Fantastic experience. They fixed my transmission issue without trying to upsell me on unnecessary work. Honest and reliable.',
    date: '3 days ago',
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    question: 'Do you provide mobile automotive service?',
    answer: 'Yes, we specialize in mobile automotive service. Customers can contact the business to discuss their vehicle issue and location, and we\'ll help determine if mobile service is appropriate for your needs.',
  },
  {
    id: '2',
    question: 'Are you open 24 hours?',
    answer: 'Yes, Roadside Cleveland Mobile Mechanic is open 24 hours, making it convenient to reach us whenever automotive concerns arise, day or night.',
  },
  {
    id: '3',
    question: 'What areas do you serve?',
    answer: 'Roadside Cleveland Mobile Mechanic serves Cleveland, Ohio and surrounding areas. Customers can contact us to discuss service availability for their specific location.',
  },
  {
    id: '4',
    question: 'What information should I provide when contacting you?',
    answer: 'When reaching out, please share your vehicle details (make and model), your current location, and a brief explanation of the issue you\'re experiencing. This helps us better understand your needs and provide appropriate assistance.',
  },
  {
    id: '5',
    question: 'How do I request service?',
    answer: 'You can request service by calling us directly at +1 (440) 970-2232 or by submitting a service request through our website form. We\'ll discuss your vehicle needs and location to arrange the best solution.',
  },
  {
    id: '6',
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods for your convenience. Please contact us directly to discuss payment options when requesting service.',
  },
]
