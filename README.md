# Asphaltic Science Website

A modern, responsive static website for an Australia-based asphalt testing company.

## Tech Stack

- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **Contact Form**: Static mailto integration with domain email
- **Deployment**: Ready for Vercel/Netlify (static hosting)

## Features

- 🎨 Modern teal/gold color scheme with smooth animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🚀 Modern React with Vite for fast development
- 🎭 Framer Motion animations and page transitions
- 📧 Contact form with email integration
- 🖼️ Image gallery with lightbox
- 🏗️ Professional service showcase

## Quick Start

1. **Install dependencies**:
   ```bash
   npm run install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Access the website**:
   - Website: http://localhost:5173

## Project Structure

```
/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Images, icons
│   │   └── styles/        # CSS files
│   └── package.json
└── package.json          # Root package.json
```

## Deployment

### Static Hosting (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `client/dist` folder
3. Configure your domain's email settings

## Contact Form

The contact form uses a mailto integration that will:
1. Open the user's default email client
2. Pre-fill the email with form data
3. Send to: `info@asphalticscience.com.au`

### Email Configuration
Make sure your domain email is set up to receive emails at:
- `info@asphalticscience.com.au`
- `sales@asphalticscience.com.au` 
- `support@asphalticscience.com.au`

## License

MIT



