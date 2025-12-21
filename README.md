# Portfolio - React 18 + Vite

A modern, responsive portfolio website built with React 18, Vite, and data-driven architecture. All content is managed through a single JSON file for easy updates.

## Features

- ⚡ **Vite** - Lightning-fast build tool and dev server
- ⚛️ **React 18** - Modern UI library with hooks
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Reusable Components** - Card, Modal, and section components
- 📊 **Data-Driven** - All content from `src/data/portfolio.json`
- 🎯 **Accessible** - Semantic HTML and ARIA attributes
- 🔍 **SEO Ready** - Meta tags and structured data support
- ✅ **Validation** - JSON schema validation script

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx         # Reusable card component
│   │   ├── Modal.jsx        # Reusable modal component
│   │   └── *.css            # Component-level styles
│   ├── context/
│   │   └── PortfolioContext.jsx  # Data context provider
│   ├── hooks/
│   │   └── usePortfolio.js       # Custom hook for data access
│   ├── data/
│   │   └── portfolio.json        # All portfolio content
│   ├── styles/
│   │   └── global.css            # Global styles
│   ├── App.jsx              # Main app component
│   ├── App.css
│   └── main.jsx             # Entry point
├── scripts/
│   └── validate-portfolio.js     # JSON validation script
├── index.html               # HTML template
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Updating Your Portfolio

### Edit Content

All portfolio content is stored in `src/data/portfolio.json`. Edit this file to update:

- **Meta information** - Title, description, author, contact details
- **Hero section** - Name, greeting, profile image, buttons
- **Services** - Service cards with icons and descriptions
- **Education** - School, degree, years
- **About** - Bio and statistics
- **Skills** - Skill names and proficiency levels (0-100)
- **Experience** - Job titles, companies, dates
- **Projects** - Project details, images, tags, links
- **Testimonials** - Client testimonials with names and roles
- **Contact** - Contact information and social links
- **Social** - Social media profiles

### Add Images

1. Place image files in `src/assets/`
2. Reference them in `portfolio.json` by filename (e.g., `"image": "project-1.jpg"`)
3. Images are lazy-loaded for better performance

### Validate Changes

After editing `portfolio.json`, validate it:

```bash
npm run validate
```

This checks that your JSON matches the expected schema.

## JSON Schema

### Meta Object
```json
{
  "meta": {
    "title": "string",
    "description": "string",
    "author": "string",
    "email": "string",
    "phone": "string",
    "logo": "string"
  }
}
```

### Hero Object
```json
{
  "hero": {
    "name": "string",
    "greeting": "string",
    "emoji": "string",
    "description": "string",
    "profileImage": "filename.jpg",
    "profileImageAlt": "string",
    "buttons": [
      {
        "text": "string",
        "type": "primary|secondary",
        "action": "scroll-to-contact|download-resume"
      }
    ]
  }
}
```

### Services Array
```json
{
  "services": [
    {
      "id": "unique-id",
      "icon": "emoji",
      "title": "string",
      "description": "string"
    }
  ]
}
```

### Projects Array
```json
{
  "projects": [
    {
      "id": "unique-id",
      "title": "string",
      "image": "filename.jpg",
      "imageAlt": "string",
      "description": "short description",
      "fullDescription": "detailed description",
      "tags": ["tag1", "tag2"],
      "link": "https://example.com",
      "github": "https://github.com/example"
    }
  ]
}
```

See `src/data/portfolio.json` for complete schema with all sections.

## Component Architecture

### Using the usePortfolio Hook

Components access portfolio data via the custom hook:

```jsx
import { usePortfolio } from '../hooks/usePortfolio';

export const MyComponent = () => {
  const { data, loading, error } = usePortfolio();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>{data.hero.name}</div>;
};
```

### Reusable Card Component

```jsx
import { Card } from './Card';

<Card variant="default" hoverable onClick={handleClick}>
  <h3>Title</h3>
  <p>Content</p>
</Card>
```

Variants: `default`, `compact`, `project`

### Modal Component

```jsx
import { Modal } from './Modal';

<Modal isOpen={isOpen} onClose={handleClose} title="Project Details">
  <p>Modal content</p>
</Modal>
```

## Styling

### CSS Architecture

- **Global styles** - `src/styles/global.css` (typography, colors, utilities)
- **Component styles** - Each component has its own `.css` file
- **Color scheme** - Orange (#ffa500) accent on dark gradient background

### Customizing Styles

1. **Colors** - Edit color values in component CSS files
2. **Fonts** - Change font-family in `global.css`
3. **Spacing** - Adjust padding/margin values in component CSS
4. **Responsive breakpoints** - Modify `@media (max-width: 768px)` queries

### Switching to Tailwind CSS (Optional)

To use Tailwind instead of CSS modules:

1. Install Tailwind:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. Configure `tailwind.config.js` with your color scheme

3. Replace CSS files with Tailwind classes in JSX

4. Update `src/styles/global.css` with Tailwind directives

## Accessibility

- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels and roles where appropriate
- Keyboard navigation support
- Focus management in modals
- Alt text for all images
- Form labels and validation

## Performance Optimizations

- Lazy loading for images (`loading="lazy"`)
- Code splitting with React Router (optional)
- CSS modules for scoped styling
- Optimized bundle with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## TypeScript Variant

To use TypeScript instead of JavaScript:

1. Rename files from `.jsx` to `.tsx` and `.js` to `.ts`
2. Add type definitions:

```tsx
// types/portfolio.ts
export interface PortfolioData {
  meta: Meta;
  hero: Hero;
  services: Service[];
  // ... other sections
}

export interface Meta {
  title: string;
  description: string;
  // ... other fields
}
```

3. Update imports and add type annotations to components

4. Install TypeScript: `npm install -D typescript`

5. Create `tsconfig.json` in root

## Deployment

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Build settings auto-detected
4. Deploy

### Deploy to GitHub Pages

1. Update `vite.config.js`:
   ```js
   export default {
     base: '/portfolio/',
     // ... other config
   }
   ```

2. Build and deploy:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

## Troubleshooting

### Images not loading
- Ensure image files are in `src/assets/`
- Check filename matches exactly in `portfolio.json`
- Verify file extensions are lowercase

### Validation script fails
- Run `npm run validate` to check JSON syntax
- Ensure all required fields are present
- Check data types match schema

### Styles not applying
- Clear browser cache
- Restart dev server
- Check CSS file is imported in component

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please refer to the component documentation in each file or check the example `portfolio.json` for proper data structure.
