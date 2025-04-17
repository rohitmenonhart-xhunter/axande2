# Axande Website Clone

This is a clone of the Axande company website, built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works across desktop, tablet, and mobile devices
- Interactive components including slider/carousel
- Animated navigation elements
- Modern UI with clean design principles
- Interactive chat/contact buttons

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite (build tool)
- Lucide React (icon library)

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
/
├── public/            # Static assets
├── src/
│   ├── components/    # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Strategy.tsx
│   │   ├── Values.tsx
│   │   ├── Diversity.tsx
│   │   ├── KeyFigures.tsx
│   │   ├── JoinUs.tsx
│   │   ├── Footer.tsx
│   │   └── ChatButtons.tsx
│   ├── App.tsx        # Main application component
│   ├── index.css      # Global styles
│   └── main.tsx       # Application entry point
├── tailwind.config.js # Tailwind CSS configuration
└── package.json       # Project dependencies and scripts
```

## Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready to be deployed to a static web host.

## License

under stellar labs.