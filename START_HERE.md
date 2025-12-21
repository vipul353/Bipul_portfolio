# 🚀 START HERE

Welcome to your new React portfolio! This file will guide you through the first steps.

## ⚡ 30-Second Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

That's it! Your portfolio is now running locally.

---

## 📝 Next: Update Your Content (5 minutes)

Open `src/data/portfolio.json` and update:

1. **Your Name**
   ```json
   "author": "Your Name",
   "name": "Your Name"
   ```

2. **Contact Info**
   ```json
   "email": "your.email@example.com",
   "phone": "+1 234 567 8900"
   ```

3. **Hero Description**
   ```json
   "description": "Your professional tagline here"
   ```

4. **Profile Image**
   - Add image to `src/assets/profile.jpg`
   - Update in JSON: `"profileImage": "profile.jpg"`

5. **Services, Skills, Projects**
   - Edit the arrays in `portfolio.json`
   - See `PORTFOLIO_SCHEMA.md` for detailed format

---

## 🖼️ Add Your Images (5 minutes)

1. **Create folder** (if not exists): `src/assets/`
2. **Add images**:
   - `profile.jpg` - Your profile picture
   - `project-1.jpg` - First project image
   - `project-2.jpg` - Second project image
   - etc.

3. **Reference in JSON**:
   ```json
   {
     "profileImage": "profile.jpg",
     "image": "project-1.jpg"
   }
   ```

---

## ✅ Validate Your Changes

After editing `portfolio.json`, run:

```bash
npm run validate
```

This checks that your JSON is valid and complete.

---

## 🧪 Test Locally

While dev server is running (`npm run dev`):

- [ ] Check all sections display correctly
- [ ] Click navigation links
- [ ] Click "Hire Me" button (scrolls to contact)
- [ ] Test contact form
- [ ] Click on a project (opens modal)
- [ ] Test on mobile (F12 → toggle device toolbar)

---

## 🏗️ Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

---

## 🌐 Deploy (Choose One)

### Option 1: Netlify (Recommended)
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect GitHub repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

### Option 2: Vercel
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import GitHub repository
5. Settings auto-detected
6. Deploy!

### Option 3: GitHub Pages
```bash
npm run build
npx gh-pages -d dist
```

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| `SETUP_GUIDE.md` | Detailed setup instructions |
| `README.md` | Complete documentation |
| `PORTFOLIO_SCHEMA.md` | JSON format reference |
| `TYPESCRIPT_SETUP.md` | Convert to TypeScript |
| `DEPLOYMENT_CHECKLIST.md` | Pre-deployment checklist |
| `PROJECT_SUMMARY.md` | Project overview |
| `FILE_INDEX.md` | Complete file listing |

---

## 🎯 Common Tasks

### Change Colors
Edit `src/components/Header.css` (and other component CSS files):
```css
/* Change #ffa500 to your color */
.logo {
  color: #your-color;
}
```

### Add a New Project
Edit `src/data/portfolio.json`:
```json
{
  "id": "project-3",
  "title": "My New Project",
  "image": "project-3.jpg",
  "imageAlt": "Project description",
  "description": "Short description",
  "fullDescription": "Detailed description",
  "tags": ["React", "Node.js"],
  "link": "https://example.com",
  "github": "https://github.com/example"
}
```

### Update Skills
Edit `src/data/portfolio.json`:
```json
{
  "id": "skill-1",
  "name": "React",
  "proficiency": 95
}
```

### Add Social Links
Edit `src/data/portfolio.json`:
```json
{
  "id": "social-linkedin",
  "name": "LinkedIn",
  "url": "https://linkedin.com/in/yourname",
  "icon": "linkedin"
}
```

---

## 🐛 Troubleshooting

### Port 3000 already in use?
Edit `vite.config.js`:
```js
server: {
  port: 3001  // Use different port
}
```

### Images not showing?
- Check filename matches exactly in `portfolio.json`
- Ensure image is in `src/assets/`
- Clear browser cache (Ctrl+Shift+Delete)

### JSON validation fails?
- Run `npm run validate` to see errors
- Check JSON syntax (use JSON formatter online)
- Ensure all required fields present

### Styles look wrong?
- Restart dev server: `npm run dev`
- Clear browser cache
- Check CSS file imported in component

---

## 📊 Project Structure

```
src/
├── components/          # React components (11 total)
├── context/            # Data provider
├── hooks/              # usePortfolio hook
├── data/
│   └── portfolio.json   # ← EDIT THIS FILE
├── assets/             # ← ADD IMAGES HERE
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

---

## 🎨 What's Included

✅ React 18 + Vite  
✅ 11 reusable components  
✅ Responsive design (mobile-first)  
✅ Data-driven from JSON  
✅ Project modal  
✅ Contact form  
✅ Accessible markup  
✅ Production-ready build  
✅ JSON validation  
✅ TypeScript support (optional)  

---

## 📋 Checklist

- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Edit `src/data/portfolio.json`
- [ ] Add images to `src/assets/`
- [ ] Run `npm run validate`
- [ ] Test in browser
- [ ] Run `npm run build`
- [ ] Deploy to Netlify/Vercel

---

## 🚀 Ready to Deploy?

See `DEPLOYMENT_CHECKLIST.md` for complete pre-deployment checklist.

---

## 💡 Pro Tips

1. **Keep portfolio.json organized** - Use meaningful IDs
2. **Compress images** - Use TinyPNG before adding
3. **Test on mobile** - Use browser dev tools (F12)
4. **Validate often** - Run `npm run validate` after changes
5. **Commit to Git** - Save progress as you go

---

## 🆘 Need Help?

1. Check `README.md` for detailed documentation
2. See `PORTFOLIO_SCHEMA.md` for JSON format
3. Review component files for implementation details
4. Check `SETUP_GUIDE.md` for common tasks

---

## 🎉 You're All Set!

Your React portfolio is ready to customize. Start by editing `src/data/portfolio.json` with your information.

**Happy coding!** 🚀

---

**Next Steps:**
1. Edit `src/data/portfolio.json`
2. Add images to `src/assets/`
3. Run `npm run dev`
4. See your portfolio live!

---

**Questions?** Check the documentation files or review the component code.
