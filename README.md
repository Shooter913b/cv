# Infant Elfrick Gnanasusairaj - Portfolio

A sophisticated, dark-themed portfolio showcasing software and robotics engineering expertise with an open-source mindset. Built with cutting-edge web technologies and featuring elegant neon aesthetics, particle effects, and smooth animations.

## ✨ Features

- **Dark Neon Theme**: Custom dark background with neon blue accents and glowing effects
- **Particle Background**: GPU-optimized starfield with interactive circuit connections
- **Smooth Animations**: Framer Motion powered micro-interactions and section reveals
- **Responsive Design**: Mobile-first approach with elegant scaling across devices
- **SEO Optimized**: Comprehensive meta tags, JSON-LD, and OpenGraph support
- **Performance Focused**: Optimized loading, lazy-loaded particles, motion-reduce support
- **Accessibility**: WCAG compliant color contrast, keyboard navigation, screen reader support

### Key Sections

- **Hero**: Animated encoder/odometry motif with tech stack showcase
- **Projects**: Featured projects with impact metrics and detailed case studies
- **Experience**: Timeline format with measurable achievements and leadership impact
- **Skills**: Interactive proficiency bars and comprehensive technology overview
- **Contact**: Professional contact methods and collaboration opportunities

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd ricky-resume
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the portfolio

## 🛠️ Tech Stack

### Core Framework

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **React 18** with modern hooks

### Styling & UI

- **Tailwind CSS** with custom theme
- **CSS Variables** for dynamic theming
- **Framer Motion** for animations
- **Lucide React** for icons

### Particle System

- **react-tsparticles** for background effects
- **tsparticles-slim** for optimized performance
- Mobile-responsive particle density

### Quality & Performance

- **ESLint** + **Prettier** for code quality
- **Husky** + **lint-staged** for git hooks
- **next-seo** for advanced SEO
- Performance optimizations for mobile

## 📁 Project Structure

```
ricky-resume/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx       # Fixed navigation bar
│   ├── Hero.tsx            # Hero/landing section
│   ├── About.tsx           # About section with stats
│   ├── Experience.tsx      # Work experience timeline
│   ├── Projects.tsx        # Portfolio projects showcase
│   ├── Skills.tsx          # Skills with progress bars
│   └── Contact.tsx         # Contact form and information
├── public/                 # Static assets
├── package.json
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Customization

### Personal Information

1. **Hero Section**: Update `components/Hero.tsx`
   - Change name, title, and description
   - Update profile image path
   - Update social media links

2. **About Section**: Update `components/About.tsx`
   - Modify personal description
   - Update statistics and icons
   - Change resume download link

3. **Experience**: Update `components/Experience.tsx`
   - Add/modify work experiences
   - Update job descriptions and technologies

4. **Projects**: Update `components/Projects.tsx`
   - Add your own projects
   - Update project images, descriptions, and links

5. **Skills**: Update `components/Skills.tsx`
   - Modify skill categories and proficiency levels
   - Add/remove technologies

6. **Contact**: Update `components/Contact.tsx`
   - Update contact information
   - Modify social media links
   - Integrate with email service (EmailJS, Formspree, etc.)

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `app/layout.tsx`
- **Animations**: Customize animations in `app/globals.css`

### Images

Replace placeholder images in the `public` directory:

- Profile image for hero section
- Project screenshots
- Any other assets you want to include

## 📧 Contact Form Integration

The contact form is currently set up with a basic handler. To make it functional, you can integrate with services like:

- **EmailJS**: Client-side email sending
- **Formspree**: Form handling service
- **Netlify Forms**: If hosting on Netlify
- **Custom API**: Create your own API endpoint

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to a Git repository
2. Connect your repo to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Other Platforms

- **Netlify**: `npm run build` then deploy the `out` folder
- **GitHub Pages**: Add `next.config.js` export configuration
- **Self-hosted**: `npm run build` then `npm start`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you make improvements, consider submitting a pull request.

## ⭐ Show Your Support

If you found this helpful, please give it a star on GitHub!

---

**Note**: Remember to update all placeholder content with your actual information before deploying!
