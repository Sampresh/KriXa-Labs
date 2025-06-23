# KriXa Labs Website

A modern, responsive website for KriXa Labs - Digital Innovation Company from Nepal.

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── page.jsx                 # Main page component
│   ├── layout.jsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── ui/                     # Reusable UI components
│   │   └── button.jsx          # Button component
│   ├── layout/                 # Layout components
│   │   ├── navigation.jsx      # Main navigation
│   │   └── footer.jsx          # Site footer
│   ├── sections/               # Page sections
│   │   ├── hero-section.jsx    # Hero/landing section
│   │   ├── about-section.jsx   # About company section
│   │   ├── services-section.jsx # Services offered
│   │   ├── projects-section.jsx # Portfolio/projects
│   │   ├── process-section.jsx  # Work process
│   │   ├── why-choose-section.jsx # Why choose us
│   │   └── contact-section.jsx  # Contact form & info
│   ├── effects/                # Visual effects
│   │   ├── custom-cursor.jsx   # Custom cursor effect
│   │   ├── floating-particles.jsx # Background particles
│   │   └── typewriter-effect.jsx # Typewriter animation
│   └── data/                   # Data files
│       ├── services-data.js    # Services information
│       ├── projects-data.js    # Projects information
│       └── process-data.js     # Process steps
├── public/
│   └── logo.png               # Company logo
├── next.config.js             # Next.js configuration
└── package.json              # Dependencies
\`\`\`

## 🚀 How to Add New Sections

1. Create a new component in `components/sections/`
2. Import and add it to `app/page.jsx`
3. Add navigation link in `components/layout/navigation.jsx`

## 🎨 Styling

- Uses Tailwind CSS for styling
- Glassmorphism effects with custom classes
- Black and white theme with gray accents
- Responsive design for all screen sizes

## 📝 How to Edit Content

- **Services**: Edit `components/data/services-data.js`
- **Projects**: Edit `components/data/projects-data.js`
- **Process**: Edit `components/data/process-data.js`
- **Contact Info**: Edit `components/sections/contact-section.jsx`
- **Company Info**: Edit `components/sections/about-section.jsx`

## 🔧 Deployment

Run `npm run build` to create static files for hosting on any domain.
