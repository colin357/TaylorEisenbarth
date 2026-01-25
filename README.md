# Daniel Fowler Home Loans Website

A modern, professional website for Daniel Fowler Home Loans built with Next.js and deployed on Vercel.

## Features

- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Built with Next.js for optimal search engine performance
- **Fast Performance**: Optimized images and code splitting for quick load times

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Font**: DM Sans (Google Fonts)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd DanielHomeLoans
```

2. Install dependencies
```bash
npm install
```

3. Add team photos to `public/images/` directory:
   - team-1.jpg
   - team-2.jpg
   - team-3.jpg
   - team-4.jpg
   - team-5.jpg

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── public/
│   └── images/         # Team and client photos
├── tailwind.config.ts  # Tailwind configuration
└── next.config.ts      # Next.js configuration
```

## Deployment

This site is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

Vercel will automatically detect the Next.js configuration and deploy your site.

## Sections

- **Header**: Navigation with smooth scrolling
- **Hero**: Eye-catching introduction with call-to-action
- **About**: Why choose Daniel Fowler Home Loans
- **Services**: Home purchase loans and refinancing options
- **Process**: 4-step simple process
- **Success Stories**: Photo gallery of happy clients
- **Contact**: Easy ways to get in touch
- **Footer**: Quick links and contact information

## Customization

### Colors

The primary colors are defined in `tailwind.config.ts`:
- Primary Green: #37ca37
- Secondary Blue: #188bf6

### Content

Edit the content in `app/page.tsx` to update:
- Headings and descriptions
- Service offerings
- Contact information
- Footer details

## License

© 2024 Daniel Fowler Home Loans. All rights reserved.
