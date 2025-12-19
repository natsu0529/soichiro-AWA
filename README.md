# Maha Lycopene - Fighter Website

A modern, multi-language Next.js website for professional fighter Maha Lycopene (マハー・リコピン).

## Features

- **Multi-language Support**: 9 languages (English, Japanese, German, French, Spanish, Italian, Chinese, Korean, Russian)
- **Red & Black Theme**: Custom Tailwind CSS theme with dramatic red and black color scheme
- **Responsive Design**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Contact Form**: Built-in contact form with validation
- **SEO Optimized**: Next.js 14 App Router with proper metadata and internationalization

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Form Handling**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd soichiro
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
soichiro/
├── app/
│   ├── [locale]/              # Internationalized routes
│   │   ├── layout.tsx         # Root layout with i18n
│   │   ├── page.tsx           # Home page
│   │   └── not-found.tsx      # 404 page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Contact form API
│   └── globals.css            # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Footer component
│   │   └── LanguageSwitch.tsx # Language selector
│   ├── sections/
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Profile.tsx        # Fighter profile
│   │   ├── FightRecord.tsx    # Fight statistics
│   │   ├── SocialMedia.tsx    # Social media links
│   │   └── ContactForm.tsx    # Contact form
│   └── ui/
│       ├── Button.tsx         # Button component
│       ├── Card.tsx           # Card component
│       ├── Input.tsx          # Input component
│       └── Textarea.tsx       # Textarea component
├── lib/
│   ├── validators/
│   │   └── contact.ts         # Form validation schemas
│   └── utils.ts               # Utility functions
├── messages/                  # Translation files
│   ├── en.json               # English
│   ├── ja.json               # Japanese
│   ├── de.json               # German
│   ├── fr.json               # French
│   ├── es.json               # Spanish
│   ├── it.json               # Italian
│   ├── zh.json               # Chinese
│   ├── ko.json               # Korean
│   └── ru.json               # Russian
├── public/
│   └── images/
│       └── fighter/          # Fighter photos
├── types/
│   └── fighter.ts            # TypeScript types
├── i18n.ts                   # i18n configuration
├── middleware.ts             # Next.js middleware
└── tailwind.config.ts        # Tailwind configuration
```

## Customization

### Adding Fighter Images

1. Add your fighter images to `public/images/fighter/`
2. Update the image references in the Profile section component

### Updating Fighter Data

Edit the fighter data in the following components:
- `components/sections/Profile.tsx` - Profile information
- `components/sections/FightRecord.tsx` - Fight statistics

### Social Media Links

Update the social media URLs in `components/sections/SocialMedia.tsx`

### Contact Form Email

To enable email sending for the contact form:

1. Choose an email service (Resend, SendGrid, or Nodemailer)
2. Add your API keys to `.env.local`:
```
# Example for Resend
RESEND_API_KEY=your_api_key_here
```
3. Update `app/api/contact/route.ts` with your email service implementation

### Translations

Edit the JSON files in the `messages/` directory to update translations for each language.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Color Scheme

The website uses a custom red and black theme:

- **Primary Red**: #dc2626
- **Dark Background**: #1a1a1a
- **Accent Colors**: Various shades of red and dark grays

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

All rights reserved © 2025 Maha Lycopene

## Support

For questions or issues, please use the contact form on the website.
