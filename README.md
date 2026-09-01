# Roadside Cleveland Mobile Mechanic - Website

A premium, high-converting one-page website for **Roadside Cleveland Mobile Mechanic**, a 24-hour mobile mechanic and roadside automotive service business serving Cleveland, Ohio.

## Overview

This website is designed to generate:
- Immediate phone calls
- Roadside assistance inquiries
- Mobile mechanic bookings
- Quote requests

The design communicates **speed, availability, professionalism, and convenience** with a bold industrial + premium roadside response aesthetic.

## Technology Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Premium animations
- **Lucide Icons** - Icon system
- **Vite** - Fast build tool

## Features

✨ **Premium Design**
- Bold industrial aesthetic inspired by road markings and emergency response
- Asymmetrical hero layout
- Glass morphism cards
- Smooth scroll animations

🎯 **Conversion Focused**
- Multiple prominent call-to-action buttons
- Sticky navigation with click-to-call
- Mobile action bar
- Inline contact forms

📱 **Fully Responsive**
- Mobile-first design
- Touch-friendly interactions
- Adaptive layouts
- Optimized performance

🔍 **SEO Optimized**
- Semantic HTML
- Local business structured data
- Optimized meta tags
- Service schema

♿ **Accessible**
- ARIA labels
- Keyboard navigation
- Color contrast compliance
- Semantic markup

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Sticky navigation with mobile menu
│   ├── Hero.tsx            # Hero section with asymmetrical layout
│   ├── UrgentServiceStrip.tsx
│   ├── WhyChooseUs.tsx     # Features section
│   ├── Services.tsx        # Service cards grid
│   ├── HowItWorks.tsx      # Process section
│   ├── Testimonials.tsx    # Review section
│   ├── FAQ.tsx             # FAQ accordion
│   ├── About.tsx           # Brand story
│   ├── ServiceArea.tsx     # Service location map
│   ├── FinalCTA.tsx        # Final conversion section
│   ├── Contact.tsx         # Contact form & info
│   ├── Footer.tsx          # Footer
│   └── StarRating.tsx      # Reusable star component
├── pages/
│   └── Home.tsx            # Main page assembly
├── constants/
│   └── business.ts         # Business data & content
├── App.tsx                 # App wrapper
├── main.tsx                # Entry point
└── index.css               # Global styles
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Business Information

**Roadside Cleveland Mobile Mechanic**
- 📞 +1 (440) 970-2232
- 📧 info@roadsideclevelandmobilemechanic.com
- 📍 2908 Archwood Ave, Cleveland, OH 44109
- 🕒 Open 24 Hours
- ⭐ 4.5 / 5 (8 Google Reviews)

## Customization

All business information is centralized in `src/constants/business.ts` for easy updates:

```typescript
export const BUSINESS_INFO: BusinessInfo = {
  name: 'Roadside Cleveland Mobile Mechanic',
  phone: '+1 (440) 970-2232',
  email: 'info@roadsideclevelandmobilemechanic.com',
  // ... other fields
}
```

## Color Palette

- **Primary**: Deep Midnight Navy (#0f1a2e)
- **Secondary**: Steel Blue / Cool Gray
- **Accent**: Electric Orange (#ff6b35)
- **Background**: Off-white and Charcoal

## Deployment

### GitHub Pages
```bash
# Enable Pages in repository settings
# Set source to main branch
# Site will be available at: https://Jim-teaugue.github.io/roadside-cleveland-website/
```

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel automatically detects Vite config
3. Deploy with `npm run build`
4. Site deployed automatically on push

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Custom Domain
After deploying, connect your domain through your hosting provider's DNS settings.

## Performance

- ⚡ Fast initial load
- 🎬 Smooth animations
- 📦 Optimized bundle
- 🖼️ Image optimization
- 📱 Mobile performance

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Private - All rights reserved © 2026 Roadside Cleveland Mobile Mechanic

## Support

For questions or issues, contact the development team.
