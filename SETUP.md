# CodeCanvas Setup Guide

Welcome to CodeCanvas! This guide will help you set up your portfolio website with your personal information.

## 🚀 Quick Setup

### 1. Update Personal Information

Edit `src/config/personalInfo.js` and update the following:

```javascript
export const personalInfo = {
  name: 'Your Name',                    // Your full name
  title: 'Software Developer',          // Your professional title
  email: 'your.email@example.com',      // Your email address
  phone: '+1 (555) 123-4567',          // Your phone number
  location: 'Your City, Country',       // Your location
  
  // Update social media links
  social: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-profile',
    twitter: 'https://twitter.com/your-handle',
  },
  
  // Update GitHub username
  github: {
    username: 'your-username',
    featuredRepos: ['repo1', 'repo2'], // Your featured repositories
  },
}
```

### 2. GitHub Integration

1. Update your GitHub username in `src/config/personalInfo.js`
2. The Projects component will automatically fetch your repositories using the GitHub API
3. Add your featured repository names to the `featuredRepos` array

### 3. EmailJS Setup (Optional)

If you want the contact form to work:

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

### 4. Add Your Certificates

1. Add certificate images to `public/certificates/`
2. Update the certificates array in `src/config/personalInfo.js` with your actual certificates

### 5. Add Your CV/Resume

1. Add your CV/Resume PDF to `public/cv.pdf`
2. The download buttons will automatically link to it

### 6. Update Meta Tags

Edit `index.html` and update:
- Meta description
- Open Graph tags
- Twitter card tags
- Author information
- Domain URL

## 🎨 Customization Options

### Colors and Theme

Edit `tailwind.config.js` to customize:
- Primary, secondary, and accent colors
- Dark mode colors
- Typography settings
- Animation configurations

### Animations

All animations use Framer Motion and can be customized in each component:
- Scroll-triggered animations
- Hover effects
- Page transitions
- Loading states

### Layout

The layout is fully responsive using Tailwind's grid system:
- Mobile-first approach
- Custom breakpoints
- Flexible grid layouts

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site will be deployed at `https://your-project.vercel.app`

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
"homepage": "https://your-username.github.io/codecanvas",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
3. Run: `npm run deploy`

## 🔧 Development

### Start Development Server

```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.jsx   # Navigation bar
│   ├── Home.jsx         # Hero section
│   ├── About.jsx        # About section
│   ├── Projects.jsx     # GitHub projects
│   ├── Certificates.jsx # Certificates section
│   └── Contact.jsx      # Contact form
├── config/
│   └── personalInfo.js  # Personal information config
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## 📝 Configuration Details

### Personal Information

The `personalInfo.js` file contains all your personal data:

- **Basic Info**: Name, title, contact details
- **Social Links**: GitHub, LinkedIn, Twitter
- **GitHub Config**: Username and featured repositories
- **EmailJS Config**: Service credentials
- **Skills**: Organized by category
- **Timeline**: Career and education history
- **Certificates**: Professional certifications
- **SEO**: Meta tags and social media

### Styling

The project uses Tailwind CSS with custom configurations:

- **Colors**: Primary, secondary, accent palettes
- **Typography**: Inter and Poppins fonts
- **Animations**: Custom keyframes and transitions
- **Dark Mode**: Automatic theme switching

### Performance

Optimizations included:

- **Vite**: Fast build tool and HMR
- **Code Splitting**: Automatic optimization
- **Image Optimization**: Lazy loading and optimization
- **Font Loading**: Preloaded Google Fonts
- **Bundle Analysis**: Optimized bundle size

## 🆘 Troubleshooting

### Common Issues

1. **Build Errors**: Make sure all dependencies are installed with `npm install`
2. **GitHub API**: Verify your username is correct and repositories are public
3. **EmailJS**: Check your service credentials and template setup
4. **Images**: Ensure all image paths are correct and files exist
5. **Fonts**: Check internet connection for Google Fonts loading

### Getting Help

If you encounter issues:

1. Check the browser console for errors
2. Verify all configuration values are correct
3. Ensure all required files are in place
4. Check the GitHub repository for updates
5. Open an issue on GitHub for support

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [Vite Documentation](https://vitejs.dev/guide/)

## 🎯 Next Steps

After setup:

1. Test all functionality locally
2. Customize colors and styling
3. Add your actual content
4. Deploy to your preferred platform
5. Set up custom domain (optional)
6. Monitor performance and analytics

Happy coding! 🎉