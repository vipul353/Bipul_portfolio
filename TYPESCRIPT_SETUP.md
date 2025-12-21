# TypeScript Setup Guide

This guide explains how to convert the portfolio project to TypeScript.

## Quick Start

### 1. Install TypeScript

```bash
npm install -D typescript @types/react @types/react-dom
```

### 2. Create TypeScript Configuration

Create `tsconfig.json` in the root directory:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

Create `tsconfig.node.json`:

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

### 3. Rename Files

Rename all files:
- `.jsx` → `.tsx`
- `.js` → `.ts`

```bash
# Example
mv src/main.jsx src/main.tsx
mv src/App.jsx src/App.tsx
mv vite.config.js vite.config.ts
```

### 4. Create Type Definitions

Create `src/types/portfolio.ts`:

```typescript
export interface Meta {
  title: string;
  description: string;
  author: string;
  email: string;
  phone: string;
  logo: string;
}

export interface Button {
  text: string;
  type: 'primary' | 'secondary';
  action: 'scroll-to-contact' | 'download-resume';
}

export interface Hero {
  name: string;
  greeting: string;
  emoji: string;
  description: string;
  profileImage: string;
  profileImageAlt: string;
  buttons: Button[];
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Education {
  id: string;
  icon: string;
  school: string;
  degree: string;
  startYear: number;
  endYear: number;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface About {
  title: string;
  description: string;
  stats: Stat[];
}

export interface Skill {
  id: string;
  name: string;
  proficiency: number;
}

export interface Experience {
  id: string;
  icon: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  fullDescription: string;
  tags: string[];
  link: string;
  github: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
}

export interface ContactDetail {
  id: string;
  icon: string;
  label: string;
  value: string;
  link: string;
}

export interface Contact {
  title: string;
  description: string;
  details: ContactDetail[];
}

export interface Social {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
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

export interface PortfolioContextType {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
}
```

### 5. Update Context with Types

Update `src/context/PortfolioContext.tsx`:

```typescript
import { createContext, useState, useEffect, ReactNode } from 'react';
import portfolioData from '../data/portfolio.json';
import { PortfolioData, PortfolioContextType } from '../types/portfolio';

export const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

interface PortfolioProviderProps {
  children: ReactNode;
}

export const PortfolioProvider = ({ children }: PortfolioProviderProps) => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setData(portfolioData as PortfolioData);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setLoading(false);
    }
  }, []);

  const value: PortfolioContextType = {
    data,
    loading,
    error,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
```

### 6. Update Hook with Types

Update `src/hooks/usePortfolio.ts`:

```typescript
import { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import { PortfolioContextType } from '../types/portfolio';

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider');
  }
  return context;
};
```

### 7. Update Component Examples

**Header.tsx:**
```typescript
import { FC } from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import './Header.css';

export const Header: FC = () => {
  const { data } = usePortfolio();

  if (!data) return null;

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About Me', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="header">
      <div className="container header-container">
        <div className="logo">{data.meta.logo}</div>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
```

**Card.tsx:**
```typescript
import { FC, ReactNode } from 'react';
import './Card.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'compact' | 'project';
  hoverable?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Card: FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverable = true,
  onClick,
}) => {
  return (
    <div
      className={`card card--${variant} ${hoverable ? 'card--hoverable' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick(e as any) : undefined}
    >
      {children}
    </div>
  );
};
```

**Modal.tsx:**
```typescript
import { FC, ReactNode, useEffect } from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-header">
          <h2 id="modal-title">{title}</h2>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};
```

### 8. Update Vite Config

Update `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

### 9. Update main.tsx

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { PortfolioProvider } from './context/PortfolioContext'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </React.StrictMode>,
)
```

## Benefits of TypeScript

- ✅ Type safety - catch errors at compile time
- ✅ Better IDE support - autocomplete and refactoring
- ✅ Self-documenting code - types serve as documentation
- ✅ Easier maintenance - refactoring is safer
- ✅ Better developer experience - fewer runtime errors

## Running with TypeScript

```bash
npm run dev      # Dev server with type checking
npm run build    # Build with type checking
npm run validate # Validate portfolio.json
```

## Troubleshooting

### Type errors in JSON import
Add to `tsconfig.json`:
```json
{
  "compilerOptions": {
    "resolveJsonModule": true
  }
}
```

### React component type errors
Ensure `@types/react` and `@types/react-dom` are installed:
```bash
npm install -D @types/react @types/react-dom
```

### Strict mode errors
If too strict, relax in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "strict": false
  }
}
```
