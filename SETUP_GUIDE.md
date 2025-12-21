# Quick Setup Guide

## 5-Minute Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
Opens automatically at `http://localhost:3000`

### Step 3: Edit Your Portfolio
Open `src/data/portfolio.json` and update:
- Your name, email, phone
- Profile image filename
- Services, skills, experience
- Projects with images and links
- Testimonials
- Contact information

### Step 4: Add Images
1. Place images in `src/assets/`
2. Reference in `portfolio.json` by filename
3. Supported formats: jpg, png, webp, gif

### Step 5: Build for Production
```bash
npm run build
```
Output in `dist/` folder - ready to deploy!

---

## File Structure Overview

```
src/
├── components/          # React components (Header, Hero, etc.)
├── context/            # Data context provider
├── hooks/              # usePortfolio() hook
├── data/
│   └── portfolio.json   # ← EDIT THIS FILE
├── styles/
│   └── global.css       # Global styles
├── App.jsx             # Main component
└── main.jsx            # Entry point
```

---

## Common Tasks

### Update Your Name
Edit `src/data/portfolio.json`:
```json
{
  "meta": {
    "author": "Your Name"
  },
  "hero": {
    "name": "Your Name"
  }
}
```

### Add a New Project
In `src/data/portfolio.json`, add to `projects` array:
```json
{
  "id": "project-3",
  "title": "My New Project",
  "image": "project-3.jpg",
  "imageAlt": "Description of project",
  "description": "Short description",
  "fullDescription": "Detailed description shown in modal",
  "tags": ["React", "Node.js"],
  "link": "https://example.com",
  "github": "https://github.com/example"
}
```

### Update Skills
In `src/data/portfolio.json`, modify `skills` array:
```json
{
  "id": "skill-1",
  "name": "React",
  "proficiency": 95
}
```

### Add Social Links
In `src/data/portfolio.json`, add to `social` array:
```json
{
  "id": "social-linkedin",
  "name": "LinkedIn",
  "url": "https://linkedin.com/in/yourname",
  "icon": "linkedin"
}
```

### Change Colors
Edit component CSS files (e.g., `src/components/Header.css`):
- Orange accent: `#ffa500` → your color
- Dark background: `#0f1624` → your color
- Text gray: `#b0b0b0` → your color

### Add Contact Form Backend
In `src/components/Contact.jsx`, update `handleSubmit()`:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Send to your backend or email service
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  }
};
```

---

## Validation

Check your `portfolio.json` is valid:
```bash
npm run validate
```

---

## Deployment

### Netlify (Recommended)
1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Push to GitHub
2. Import in Vercel
3. Auto-detected settings
4. Deploy

### GitHub Pages
```bash
npm run build
npx gh-pages -d dist
```

---

## Troubleshooting

**Images not showing?**
- Check filename in `portfolio.json` matches exactly
- Ensure image is in `src/assets/`
- Clear browser cache

**Styles look wrong?**
- Restart dev server: `npm run dev`
- Clear browser cache
- Check CSS file is imported

**Validation fails?**
- Run `npm run validate` to see errors
- Check JSON syntax (use JSON formatter)
- Ensure all required fields present

**Port 3000 already in use?**
Edit `vite.config.js`:
```js
server: {
  port: 3001  // Use different port
}
```

---

## Next Steps

- [ ] Update `portfolio.json` with your info
- [ ] Add profile image to `src/assets/`
- [ ] Add project images
- [ ] Test with `npm run dev`
- [ ] Build with `npm run build`
- [ ] Deploy to Netlify/Vercel

---

## Need Help?

- Check `README.md` for detailed documentation
- See `TYPESCRIPT_SETUP.md` for TypeScript conversion
- Review component files for implementation details
- Check `src/data/portfolio.json` for complete schema

---

## What's Included

✅ React 18 with Vite  
✅ Responsive design (mobile-first)  
✅ Reusable components (Card, Modal)  
✅ Data-driven from JSON  
✅ Accessible markup (ARIA, semantic HTML)  
✅ CSS modules + global styles  
✅ Project modal with details  
✅ Contact form (client-side)  
✅ JSON validation script  
✅ TypeScript support (optional)  
✅ Production-ready build  

---

## Performance Tips

- Images are lazy-loaded
- Use modern image formats (webp)
- Compress images before adding
- Vite auto-optimizes on build
- CSS is scoped to components

---

Happy coding! 🚀
