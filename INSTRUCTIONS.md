# Portfolio Website - Instructions

## Getting Started

Your minimal React portfolio is ready! The dev server is running at **http://localhost:5173/**

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── Navigation.jsx  # Header with navigation links
│   ├── Button.jsx      # Reusable button component
│   ├── Card.jsx        # Reusable card container
│   └── Layout.jsx      # Page wrapper with navigation
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   └── About.jsx       # About page with skills/experience
└── App.jsx             # Main app with routing
```

## Easy Updates

### Update Resume Link
Change the Google Drive link in **two places**:
1. `src/components/Navigation.jsx` (line 4)
2. `src/pages/Home.jsx` (line 18)

Replace `YOUR_FILE_ID` with your actual Google Drive file ID.

### Update Content

**Home Page** (`src/pages/Home.jsx`):
- Line 9: Your name
- Line 11: Your job title/company

**About Page** (`src/pages/About.jsx`):
- Line 6-9: Update skills array
- Line 11-16: Update experience details
- Line 28: Update description

### Styling

All styles use CSS Modules (scoped to components). Main color accent is `#6366f1` (indigo).

To change the accent color, search and replace `#6366f1` across all `.module.css` files.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Deployment

After running `npm run build`, deploy the `dist/` folder to your hosting service.

For GitHub Pages, you may need to update `vite.config.js` with:
```js
base: '/your-repo-name/'
```
