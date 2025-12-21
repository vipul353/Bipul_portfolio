# Portfolio JSON Schema Documentation

Complete reference for the `src/data/portfolio.json` structure.

## Root Object

```typescript
{
  meta: Meta;
  hero: Hero;
  services: Service[];
  education: Education[];
  about: About;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  testimonials: Testimonial[];
  contact: Contact;
  social: Social[];
}
```

---

## Meta

Site metadata and author information.

```json
{
  "meta": {
    "title": "Steven - Portfolio",
    "description": "A passionate mobile and web developer with expertise in Flutter and modern web technologies.",
    "author": "Steven",
    "email": "steven@example.com",
    "phone": "+1 234 567 8900",
    "logo": "LOGO"
  }
}
```

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Page title (shown in browser tab) |
| `description` | string | Meta description for SEO |
| `author` | string | Your name |
| `email` | string | Contact email |
| `phone` | string | Contact phone number |
| `logo` | string | Logo text or emoji |

---

## Hero

Hero section with introduction and call-to-action.

```json
{
  "hero": {
    "name": "Steven",
    "greeting": "Hi, I'm",
    "emoji": "👋",
    "description": "I'm a passionate mobile and web developer with expertise in Flutter and modern web technologies. I create seamless, high-performance applications that help businesses thrive in the digital world.",
    "profileImage": "profile.jpg",
    "profileImageAlt": "Steven's profile picture",
    "buttons": [
      {
        "text": "Hire Me",
        "type": "primary",
        "action": "scroll-to-contact"
      },
      {
        "text": "Download Resume",
        "type": "secondary",
        "action": "download-resume"
      }
    ]
  }
}
```

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Your name |
| `greeting` | string | Greeting text (e.g., "Hi, I'm") |
| `emoji` | string | Emoji for greeting |
| `description` | string | Hero description/tagline |
| `profileImage` | string | Filename in `src/assets/` |
| `profileImageAlt` | string | Alt text for accessibility |
| `buttons` | Button[] | CTA buttons |

### Button

| Field | Type | Values |
|-------|------|--------|
| `text` | string | Button label |
| `type` | string | `"primary"` \| `"secondary"` |
| `action` | string | `"scroll-to-contact"` \| `"download-resume"` |

---

## Services

Array of service offerings.

```json
{
  "services": [
    {
      "id": "web-dev",
      "icon": "💻",
      "title": "Web Development",
      "description": "Creating responsive and modern websites using the latest technologies and best practices for optimal user experience."
    }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `icon` | string | Emoji or icon |
| `title` | string | Service name |
| `description` | string | Service description |

---

## Education

Array of educational background.

```json
{
  "education": [
    {
      "id": "edu-1",
      "icon": "🎓",
      "school": "School 1",
      "degree": "Bachelor's Degree",
      "startYear": 2015,
      "endYear": 2019
    }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `icon` | string | Emoji or icon |
| `school` | string | School/University name |
| `degree` | string | Degree type |
| `startYear` | number | Start year |
| `endYear` | number | End year |

---

## About

About section with biography and statistics.

```json
{
  "about": {
    "title": "More About Me",
    "description": "I'm a dedicated software engineer with a passion for creating elegant solutions to complex problems. With years of experience in mobile and web development, I specialize in building scalable applications that deliver exceptional user experiences.",
    "stats": [
      {
        "id": "stat-1",
        "value": "200+",
        "label": "Projects Completed"
      }
    ]
  }
}
```

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Section title |
| `description` | string | Biography/about text |
| `stats` | Stat[] | Statistics cards |

### Stat

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `value` | string | Stat value (e.g., "200+") |
| `label` | string | Stat label |

---

## Skills

Array of technical skills with proficiency levels.

```json
{
  "skills": [
    {
      "id": "skill-1",
      "name": "HTML & CSS",
      "proficiency": 90
    }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `name` | string | Skill name |
| `proficiency` | number | Proficiency 0-100 (%) |

---

## Experience

Array of work experience.

```json
{
  "experience": [
    {
      "id": "exp-1",
      "icon": "💼",
      "title": "Software Engineer",
      "company": "TechCorp Solutions",
      "startDate": "June 2021",
      "endDate": "September 2024"
    }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `icon` | string | Emoji or icon |
| `title` | string | Job title |
| `company` | string | Company name |
| `startDate` | string | Start date (any format) |
| `endDate` | string | End date (any format) |

---

## Projects

Array of portfolio projects.

```json
{
  "projects": [
    {
      "id": "project-1",
      "title": "Project 1",
      "image": "project-1.jpg",
      "imageAlt": "Project 1 - Web Application",
      "description": "A comprehensive web application featuring real-time data visualization and user management. Built with modern frameworks for optimal performance.",
      "fullDescription": "This project showcases a full-stack web application with real-time capabilities. It includes advanced data visualization using D3.js, a robust user management system, and seamless integration with backend APIs.",
      "tags": ["React", "Node.js", "MongoDB"],
      "link": "https://example.com/project-1",
      "github": "https://github.com/example/project-1"
    }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `title` | string | Project name |
| `image` | string | Filename in `src/assets/` |
| `imageAlt` | string | Alt text for accessibility |
| `description` | string | Short description (shown in grid) |
| `fullDescription` | string | Detailed description (shown in modal) |
| `tags` | string[] | Technology tags |
| `link` | string | Live project URL |
| `github` | string | GitHub repository URL |

---

## Testimonials

Array of client testimonials.

```json
{
  "testimonials": [
    {
      "id": "testimonial-1",
      "name": "John Doe",
      "role": "CEO, TechStartup",
      "avatar": "JD",
      "text": "Working with Steven was an absolute pleasure. His attention to detail and technical expertise helped us launch our platform ahead of schedule. Highly recommended!"
    }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `name` | string | Client name |
| `role` | string | Client title/company |
| `avatar` | string | Avatar initials (2 chars) |
| `text` | string | Testimonial text |

---

## Contact

Contact information and form details.

```json
{
  "contact": {
    "title": "Let's Connect",
    "description": "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.",
    "details": [
      {
        "id": "contact-email",
        "icon": "📧",
        "label": "Email",
        "value": "steven@example.com",
        "link": "mailto:steven@example.com"
      },
      {
        "id": "contact-phone",
        "icon": "📱",
        "label": "Phone",
        "value": "+1 234 567 8900",
        "link": "tel:+12345678900"
      }
    ]
  }
}
```

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Section title |
| `description` | string | Contact intro text |
| `details` | ContactDetail[] | Contact methods |

### ContactDetail

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `icon` | string | Emoji or icon |
| `label` | string | Contact type label |
| `value` | string | Contact value |
| `link` | string | Clickable link (mailto:, tel:, https://) |

---

## Social

Array of social media profiles.

```json
{
  "social": [
    {
      "id": "social-linkedin",
      "name": "LinkedIn",
      "url": "https://linkedin.com/in/steven",
      "icon": "linkedin"
    },
    {
      "id": "social-github",
      "name": "GitHub",
      "url": "https://github.com/steven",
      "icon": "github"
    }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `name` | string | Platform name |
| `url` | string | Profile URL |
| `icon` | string | Icon name (for future icon library) |

---

## Complete Example

```json
{
  "meta": {
    "title": "John Developer - Portfolio",
    "description": "Full-stack developer specializing in React and Node.js",
    "author": "John Developer",
    "email": "john@example.com",
    "phone": "+1 555 123 4567",
    "logo": "JD"
  },
  "hero": {
    "name": "John",
    "greeting": "Hey, I'm",
    "emoji": "👨‍💻",
    "description": "I build beautiful, scalable web applications. Specialized in React, Node.js, and cloud technologies.",
    "profileImage": "profile.jpg",
    "profileImageAlt": "John's profile picture",
    "buttons": [
      {
        "text": "Get In Touch",
        "type": "primary",
        "action": "scroll-to-contact"
      },
      {
        "text": "View Resume",
        "type": "secondary",
        "action": "download-resume"
      }
    ]
  },
  "services": [
    {
      "id": "web-dev",
      "icon": "🌐",
      "title": "Web Development",
      "description": "Full-stack web applications with React, Node.js, and databases"
    },
    {
      "id": "mobile-dev",
      "icon": "📱",
      "title": "Mobile Development",
      "description": "Cross-platform mobile apps with React Native"
    }
  ],
  "education": [
    {
      "id": "edu-1",
      "icon": "🎓",
      "school": "State University",
      "degree": "Bachelor of Science in Computer Science",
      "startYear": 2016,
      "endYear": 2020
    }
  ],
  "about": {
    "title": "About Me",
    "description": "I'm a passionate developer with 5+ years of experience building web and mobile applications. I love solving complex problems and learning new technologies.",
    "stats": [
      {
        "id": "stat-1",
        "value": "50+",
        "label": "Projects Completed"
      },
      {
        "id": "stat-2",
        "value": "30+",
        "label": "Happy Clients"
      },
      {
        "id": "stat-3",
        "value": "5+",
        "label": "Years Experience"
      }
    ]
  },
  "skills": [
    {
      "id": "skill-1",
      "name": "React",
      "proficiency": 95
    },
    {
      "id": "skill-2",
      "name": "Node.js",
      "proficiency": 90
    },
    {
      "id": "skill-3",
      "name": "TypeScript",
      "proficiency": 85
    }
  ],
  "experience": [
    {
      "id": "exp-1",
      "icon": "💼",
      "title": "Senior Developer",
      "company": "Tech Company Inc",
      "startDate": "Jan 2022",
      "endDate": "Present"
    }
  ],
  "projects": [
    {
      "id": "project-1",
      "title": "E-commerce Platform",
      "image": "ecommerce.jpg",
      "imageAlt": "E-commerce platform screenshot",
      "description": "Full-stack e-commerce platform with payment integration",
      "fullDescription": "Built a complete e-commerce solution with React frontend, Node.js backend, MongoDB database, and Stripe payment integration. Features include product catalog, shopping cart, user authentication, and order management.",
      "tags": ["React", "Node.js", "MongoDB", "Stripe"],
      "link": "https://example-ecommerce.com",
      "github": "https://github.com/john/ecommerce"
    }
  ],
  "testimonials": [
    {
      "id": "testimonial-1",
      "name": "Jane Smith",
      "role": "CEO, StartupXYZ",
      "avatar": "JS",
      "text": "John delivered an exceptional product on time and within budget. His technical expertise and communication skills are outstanding."
    }
  ],
  "contact": {
    "title": "Let's Work Together",
    "description": "I'm always interested in hearing about new projects and opportunities.",
    "details": [
      {
        "id": "contact-email",
        "icon": "📧",
        "label": "Email",
        "value": "john@example.com",
        "link": "mailto:john@example.com"
      },
      {
        "id": "contact-phone",
        "icon": "📱",
        "label": "Phone",
        "value": "+1 555 123 4567",
        "link": "tel:+15551234567"
      }
    ]
  },
  "social": [
    {
      "id": "social-github",
      "name": "GitHub",
      "url": "https://github.com/john",
      "icon": "github"
    },
    {
      "id": "social-linkedin",
      "name": "LinkedIn",
      "url": "https://linkedin.com/in/john",
      "icon": "linkedin"
    },
    {
      "id": "social-twitter",
      "name": "Twitter",
      "url": "https://twitter.com/john",
      "icon": "twitter"
    }
  ]
}
```

---

## Validation Rules

- All `id` fields must be unique within their array
- `proficiency` must be 0-100
- Image filenames must match files in `src/assets/`
- URLs must be valid HTTP/HTTPS or mailto:/tel: links
- All required fields must be present
- Array fields can be empty but must exist

Run validation:
```bash
npm run validate
```

---

## Tips

✅ Use emojis for icons (easier than icon fonts)  
✅ Keep descriptions concise  
✅ Use meaningful IDs (e.g., "project-ecommerce")  
✅ Test JSON with `npm run validate`  
✅ Use relative dates for experience (e.g., "Jan 2022")  
✅ Add alt text to all images  
✅ Keep proficiency scores realistic  
✅ Use full URLs for external links  
