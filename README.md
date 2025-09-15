# CodeCanvas - Modern Portfolio Website

A beautiful, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations, dark/light theme toggle, and modern design principles. Optimized for performance with Vite and ready for deployment on Vercel.

## 🚀 Features

- **Modern Design**: Clean, professional layout with Tailwind CSS and custom components
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between light and dark themes with persistent preferences
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **GitHub Integration**: Dynamic fetching of GitHub repositories
- **Contact Form**: EmailJS integration for contact form submissions
- **Certificates Section**: Showcase professional certifications and qualifications
- **Mobile Navigation**: Hamburger menu for mobile devices
- **SEO Optimized**: Meta tags and Open Graph support
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Security**: HTTPS enforcement, input validation, and spam prevention

## 📋 Sections

1. **Home**: Hero section with animated background and call-to-action buttons
2. **About**: Professional summary, skills showcase, and career timeline
3. **Projects**: GitHub repositories with filtering and detailed views
4. **Certificates**: Professional certifications with modal popups
5. **Contact**: Contact form with social media links

## 🛠️ Technology Stack

- **React 19.1.1**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **EmailJS**: Contact form email service
- **React Intersection Observer**: Scroll-triggered animations
- **Lucide React**: Beautiful, customizable icons
- **Google Fonts**: Inter and Poppins font families

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/codecanvas.git
cd codecanvas
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## ⚙️ Configuration

### Personal Information

Update your personal information in `src/config/personalInfo.js`:

```javascript
export const personalInfo = {
  name: 'Your Name',
  title: 'Software Developer',
  email: 'your.email@example.com',
  // ... other configuration
};
```

### GitHub API Integration

1. Update the GitHub username in `src/config/personalInfo.js`:
```javascript
github: {
  username: 'your-username',
  featuredRepos: ['repo1', 'repo2'],
}
```

2. The Projects component will automatically fetch your repositories.

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service and template
3. Update the configuration in `src/config/personalInfo.js`:
```javascript
emailjs: {
  serviceId: 'your_service_id',
  templateId: 'your_template_id',
  publicKey: 'your_public_key',
}
```

### Certificates

1. Add your certificate images to the `public/certificates/` directory
2. Update the certificates array in `src/config/personalInfo.js`

### CV/Resume

1. Add your CV/Resume PDF to the `public/` directory as `cv.pdf`
2. The download buttons will automatically link to it

## 🎨 Customization

### Colors and Theming

The color scheme can be customized in `tailwind.config.js`. The theme includes:
- Primary, secondary, and accent color palettes
- Dark mode support
- Custom animations and transitions
- Typography settings

### Animations

Animations are powered by Framer Motion and can be customized in each component. Key animation features:
- Scroll-triggered animations
- Hover effects
- Page transitions
- Loading animations

### Layout

The layout uses Tailwind's grid system and is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## 🌙 Dark/Light Theme

The theme system includes:
- Automatic theme detection based on system preferences
- Persistent theme selection in localStorage
- Smooth transitions between themes
- Custom color schemes for both modes

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site will be deployed at `https://your-project.vercel.app`

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
"homepage": "https://your-username.github.io/codecanvas",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
3. Run: `npm run deploy`

## 📊 Performance

This project is optimized for performance with:

- **Vite**: Fast build tool and HMR
- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Optimized images and lazy loading
- **Font Optimization**: Preloaded Google Fonts
- **Bundle Analysis**: Optimized bundle size

### Lighthouse Scores Target

- **Performance**: ≥ 90
- **Accessibility**: ≥ 90
- **SEO**: ≥ 90
- **Best Practices**: ≥ 90

## 🔒 Security

Security features implemented:

- **HTTPS Enforcement**: Via Vercel configuration
- **Input Validation**: Form validation and sanitization
- **XSS Protection**: Content Security Policy headers
- **CSRF Protection**: Secure form handling
- **Spam Prevention**: EmailJS built-in protection

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Touch-friendly interactions
- Optimized images for different screen sizes
- Adaptive navigation (hamburger menu on mobile)

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Certificates.jsx
│   └── Contact.jsx
├── config/
│   └── personalInfo.js
├── App.jsx
├── main.jsx
└── index.css
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/codecanvas/issues).

## 📞 Support

If you have any questions or need help with setup, please open an issue or contact me directly.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for animations
- [EmailJS](https://www.emailjs.com/) for contact form functionality
- [GitHub API](https://docs.github.com/en/rest) for repository data
- [Lucide](https://lucide.dev/) for beautiful icons

---

Made with ❤️ by [Your Name](https://github.com/your-username)