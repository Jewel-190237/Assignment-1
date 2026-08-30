# Assignment-1

A web hosting company landing page built with **Next.js 14** and **Tailwind CSS**. Features a flash-sale countdown, pricing plans, feature cards, and customer testimonials.

## Features

- Flash sale banner with live countdown timer
- Hero section with discount headline and CTA
- Feature cards (speed, support, uptime)
- Interactive pricing table with monthly/yearly toggle
- Customer testimonials with Google reviews
- Responsive navigation with mobile drawer menu
- Fully responsive design (mobile-first)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + SCSS
- **UI Library:** Ant Design
- **Icons:** React Icons
- **Language:** JavaScript
- **Fonts:** Roboto, Montserrat

## Getting Started

```bash
git clone https://github.com/Jewel-190237/Assignment-1.git
cd Assignment-1
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
Assignment-1/
├── app/
│   ├── (landing)/
│   │   ├── layout.js        # Landing page layout
│   │   └── page.js          # Main landing page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.js    # Navigation bar
│   │   │   └── footer.js    # Footer
│   │   └── home/
│   │       ├── hero.js      # Hero section with countdown
│   │       ├── cardsection.js # Feature cards
│   │       ├── pricing.js   # Pricing plans
│   │       └── testimonilas.js # Testimonials
│   ├── globals.scss         # Global styles
│   └── layout.js            # Root layout
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
└── next.config.js           # Next.js configuration
```

## License

MIT
