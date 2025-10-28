# 📝 Developer TODO - RecipiO Recipe Generator

> **Internal Development Guide**

This document contains the development roadmap, tech stack requirements, and implementation tasks for the Smart Recipe Generator project.

---

## 🛠️ Technology Stack

### Frontend Core

- ⚛️ **React 19.1.1** - UI library with Fast Refresh
- 🚀 **Vite 7.1.7** - Build tool with HMR
- 🔷 **TypeScript 5.9.3** - Type safety
- 🛣️ **TanStack Router** - Type-safe React routing (to be installed)
- 🗄️ **Redux Toolkit + RTK Query** - State and API management (to be installed)

### UI & Styling

- 🎨 **ShadCN components** - Component library (to be installed)
- 💨 **TailwindCSS** - Utility-first CSS framework (to be installed)

### Testing

- 🧪 **Vitest** - Unit/integration testing framework (to be installed)

### Storage

- 💾 **IndexedDB/localStorage** - Client-side persistence
- 📦 **dexiejs** (optional) - IndexedDB wrapper (to be installed)

### AI Integration

- 🤖 **DeepSeek SDK** - Generative AI for recipe creation (to be integrated)

### Linting & Code Quality

- ✅ **ESLint 9.36.0** - Already configured
- ✅ **TypeScript ESLint** - Type-aware linting rules

---

## 📋 Project Structure Setup

```
src/
├── components/         # Reusable React components (Button, Card, Input, etc.)
├── pages/              # Top-level pages (Home, History, Favorites, Planner)
├── api/                # API clients (DeepSeek, IndexedDB helpers)
├── store/              # Redux store & slices (history, favorites, planner)
├── hooks/              # Custom React hooks (useRecipeGenerator, useLocalStorage)
├── utils/              # Utility/factory functions (prompt builder, formatters)
├── types/              # TypeScript interfaces/types (Recipe, Ingredient, etc.)
└── App.tsx             # App root, routing with TanStack Router
```

---

## 🗺️ Development Roadmap

### 🟢 Phase 1: POC (Proof of Concept)

**Objective**: Core validation features to prove the concept works

#### Setup Tasks

- [ ] Install and configure Redux Toolkit
- [ ] Install and configure TanStack Router
- [ ] Install and configure TailwindCSS
- [ ] Install and configure ShadCN components
- [ ] Set up DeepSeek API integration
- [ ] Create basic project folder structure

#### Feature Tasks

- [ ] Create basic ingredient input form (comma-separated text input)
- [ ] Implement dietary filter toggle (vegetarian/non-vegetarian)
- [ ] Integrate DeepSeek API for recipe generation (3-5 ingredients)
- [ ] Display generated recipe (title, ingredients, instructions)
- [ ] Add basic error handling for API failures
- [ ] Create minimal UI layout

#### Priority: **HIGH** - Foundation for all future work

---

### 🔵 Phase 2: MVP (Minimum Viable Product)

**Objective**: Essential user experience with polished UI

#### UI Components

- [ ] Replace text input with tag-based ingredient selection using ShadCN Input + Badge
- [ ] Add multiple dietary filter chips (vegan, gluten-free, keto, low-carb, dairy-free)
- [ ] Create cuisine preference selector (Italian, Asian, Mexican, Mediterranean)
- [ ] Design responsive layout with TailwindCSS and ShadCN components
- [ ] Build recipe card component with:
  - [ ] Ingredient list
  - [ ] Step-by-step instructions
  - [ ] Prep/cook time display
- [ ] Add loading states and skeleton screens
- [ ] Create error message display component

#### State Management

- [ ] Set up Redux store with RTK Query
- [ ] Create recipes history slice (IndexedDB - last 20 recipes)
- [ ] Implement favorites system with tagging (RTK slice)
- [ ] Add recipe persistence to IndexedDB

#### API Integration

- [ ] Enhance DeepSeek prompt builder with dietary preferences
- [ ] Integrate cuisine style preferences in API calls
- [ ] Handle loading and error states

#### Testing

- [ ] Write unit tests for core functions using Vitest
- [ ] Test API integration
- [ ] Test IndexedDB operations

#### Priority: **HIGH** - Core user experience

---

### 🟡 Phase 3: EA (Early Access)

**Objective**: Advanced features & optimization

#### Advanced Features

- [ ] Implement meal planning calendar with drag-and-drop (dnd-kit integration)
  - [ ] Calendar view component
  - [ ] Drag and drop functionality
  - [ ] Meal assignment to dates
- [ ] Build shopping list generator
  - [ ] Consolidate ingredients from multiple recipes
  - [ ] Remove duplicates
  - [ ] Export functionality
- [ ] Add recipe scaling (adjust servings with auto-recalculation)
- [ ] Implement nutritional estimation display
  - [ ] Calories per serving
  - [ ] Protein, carbs, fats breakdown
- [ ] Add ingredient substitution suggestions via DeepSeek
- [ ] Create advanced filtering and search in history
  - [ ] Filter by ingredients
  - [ ] Filter by cuisine
  - [ ] Filter by date
- [ ] Implement recipe categories and custom tags management
- [ ] Add share recipe via URL (TanStack Router search params)

#### Performance

- [ ] Implement lazy loading for routes
- [ ] Add code splitting with Vite
- [ ] Optimize bundle size
- [ ] Add caching strategies for API calls

#### Testing & Quality

- [ ] Write integration tests for critical user flows
- [ ] Add E2E test coverage (with Playwright)
- [ ] Implement rate limiting for DeepSeek API
- [ ] Add error boundaries

#### User Experience

- [ ] Create user preferences storage
  - [ ] Default dietary restrictions
  - [ ] Favorite cuisines
  - [ ] Preferences persistence
- [ ] Add onboarding flow for new users
- [ ] Improve accessibility (WCAG basics)

#### Priority: **MEDIUM** - Enhanced functionality

---

### 🟣 Phase 4: GA (General Availability)

**Objective**: Production-ready release

#### Polish & Stability

- [ ] Review and polish all EA features
- [ ] Fix all known bugs
- [ ] Performance optimization audit
- [ ] Security review
- [ ] Code review and refactoring

#### Advanced Features

- [ ] Export recipes as PDF
- [ ] Export recipes as Markdown
- [ ] Print-friendly recipe view
- [ ] Recipe duplication feature
- [ ] Recipe editing capabilities
- [ ] Bulk operations (delete multiple history items, export favorites)

#### Production Tools

- [ ] Integrate Sentry for error tracking
- [ ] Add performance monitoring and analytics
- [ ] Set up CI/CD pipeline
- [ ] Add automated testing in CI
- [ ] Configure deployment pipeline

#### Testing

- [ ] Achieve 80%+ test coverage
- [ ] Unit tests for all utility functions
- [ ] Integration tests for all user flows
- [ ] E2E tests with Playwright
- [ ] Accessibility compliance (WCAG 2.1 AA)

#### Progressive Web App

- [ ] Add PWA manifest
- [ ] Implement service worker
- [ ] Add offline recipe viewing capability
- [ ] Cache static assets

#### Additional Features

- [ ] Image generation for recipes (optional DeepSeek image API)
- [ ] Recipe ratings and notes system
- [ ] Weekly meal prep suggestions based on history
- [ ] Cost estimation per recipe
- [ ] Multi-language support
- [ ] Comprehensive documentation
- [ ] User tutorial/onboarding

#### Priority: **LOW** - Polish and production readiness

---

### 🔮 Phase 5: Post-GA Roadmap

**Objective**: Future enhancements

#### Social Features

- [ ] Share recipes with friends
- [ ] Public recipe gallery
- [ ] User profiles
- [ ] Comments and reviews

#### Data Import

- [ ] Recipe imports from URLs
- [ ] Recipe imports from images (OCR)

#### Smart Features

- [ ] AI-powered pantry management
- [ ] Integration with grocery delivery services
- [ ] Voice input for hands-free cooking mode
- [ ] Cooking timer integration

#### Priority: **FUTURE** - Beyond initial release

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Install additional required packages
npm install @reduxjs/toolkit @tanstack/react-router
npm install tailwindcss postcss autoprefixer
npm install @radix-ui/react-* # ShadCN dependencies
npm install vitest @testing-library/react
npm install -D @vitejs/plugin-react-vite vite

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Lint code
npm run lint
```

---

## 📌 Current Status

- ✅ Project initialized with React + Vite + TypeScript
- ✅ ESLint configured
- 🔄 README decorated
- ⏳ Ready for Phase 1 (POC) development

---

## 📝 Notes for Developers

- All API calls must include proper error handling
- Follow Redux Toolkit conventions for state management
- Use TypeScript strictly - no `any` types
- Write tests alongside features, not after
- Keep components small and reusable
- Use ShadCN for all UI components
- Follow TailwindCSS utility-first approach
- Commit messages should be descriptive

---

**Last Updated**: 2025

**Next Milestone**: Complete POC setup and basic recipe generation
