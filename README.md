# 🍳 Smart Recipe Generator

> **AI-Powered Recipe Creation Made Simple**

Smart Recipe Generator is a modern React-based web application that leverages generative AI to help users instantly create personalized recipes based on their available ingredients, dietary preferences, and cuisine styles. Designed with a cutting-edge tech stack and a focus on user experience, it's the perfect showcase for junior and mid-level frontend skills.

---

## 📋 Table of Contents

-   [Overview](#-project-overview)
-   [Technology Stack](#-technology-stack)
-   [Use Cases](#-use-cases)
-   [Project Structure](#-project-structure)
-   [Roadmap](#-roadmap)
    -   [POC - Proof of Concept](#poc-proof-of-concept)
    -   [MVP - Minimum Viable Product](#mvp-minimum-viable-product)
    -   [EA - Early Access](#ea-early-access)
    -   [GA - General Availability](#ga-general-availability)
    -   [Post-GA Roadmap](#post-ga-roadmap)

---

## 🎯 Project Overview

Smart Recipe Generator combines the power of **DeepSeek's generative AI API** and a lightning-fast React frontend to deliver instant, creative, and nutritious meal ideas. Users simply input their ingredients—like "chicken, tomatoes, garlic"—select preferences or restrictions (vegan, keto, gluten-free, etc.), and let the app craft detailed recipes including instructions, quantities, and even nutritional info.

The project demonstrates modern frontend patterns: type-safe routing, state management, persistent saved data (recipes & favorites), and a beautiful responsive UI with **TailwindCSS** and **ShadCN** components.

---

## 🛠 Technology Stack

### Frontend

-   ⚛️ **React** (with Vite for ultra-fast builds and HMR)
-   🛣️ **TanStack Router** (type-safe React routing)
-   🗄️ **Redux Toolkit** (RTK) and RTK Query (state and API management)
-   🎨 **ShadCN components** + **TailwindCSS** (UI and design system)
-   🧪 **Vitest** (unit/integration testing)
-   💾 **IndexedDB/localStorage** (client-side persistence)

### AI API

-   🤖 **DeepSeek SDK** for generative recipe logic

---

## 💡 Use Cases

-   🏠 **Households**: Quickly find meal inspiration based on pantry items
-   🍽️ **Meal Preppers**: Plan weekly menus and shopping lists with ease
-   🥗 **Diet-Conscious Users**: Discover recipes that fit health and lifestyle goals
-   🔬 **Kitchen Experimenters**: Explore new cuisines and techniques effortlessly

---

## 🗺️ Roadmap

### 🟢 POC (Proof of Concept)

**Core Validation Features**

-   ✅ Basic recipe generation from 3-5 ingredients using DeepSeek API
-   ✅ Simple text input for ingredients (comma-separated list)
-   ✅ Display generated recipe with title, ingredients list, and basic instructions
-   ✅ Single dietary filter (vegetarian/non-vegetarian toggle)
-   ✅ Minimal UI with unstyled form and result display
-   ✅ Basic error handling for API failures

### 🔵 MVP (Minimum Viable Product)

**Essential User Experience**

-   🏷️ Enhanced ingredient input with tag-based selection (ShadCN Input + Badge components)
-   🥘 Multiple dietary filters (vegan, gluten-free, keto, low-carb, dairy-free)
-   🌍 Cuisine preference selection (Italian, Asian, Mexican, Mediterranean)
-   📦 Recipe history stored in IndexedDB (last 20 recipes)
-   ⭐ Favorites system with basic tagging (RTK slice for state)
-   📱 Responsive layout with ShadCN components and Tailwind styling
-   🍳 Recipe card component with ingredient list, step-by-step instructions, prep/cook time
-   ⏳ Loading states and error messages
-   🧪 Basic unit tests for core functions (Vitest)

### 🟡 EA (Early Access)

**Advanced Features & Optimization**

-   📅 Meal planning calendar with drag-and-drop interface (dnd-kit integration)
-   🛒 Shopping list generator that consolidates ingredients from multiple recipes
-   🔄 Recipe scaling functionality (adjust servings with automatic recalculation)
-   📊 Nutritional estimation display (calories, protein, carbs, fats per serving)
-   🔁 Ingredient substitution suggestions via DeepSeek
-   🔍 Advanced filtering and search in history (by ingredients, cuisine, date)
-   🏷️ Recipe categories and custom tags management
-   🔗 Share recipe via URL with TanStack Router search params
-   ⚡ Performance optimizations (lazy loading, code splitting with Vite)
-   ✅ Integration tests covering critical user flows
-   🚦 Rate limiting for DeepSeek API calls
-   ⚙️ User preferences storage (default dietary restrictions, favorite cuisines)

### 🟣 GA (General Availability)

**Production-Ready Release**

-   ✨ All EA features polished and stable
-   📄 Export recipes as PDF or Markdown
-   🖨️ Print-friendly recipe view
-   ✏️ Recipe duplication and editing capabilities
-   📋 Bulk operations (delete multiple history items, export favorites)
-   🐛 Comprehensive error tracking (Sentry integration)
-   📈 Performance monitoring and analytics
-   🧪 Full test coverage (unit, integration, E2E with Playwright)
-   ♿ Accessibility compliance (WCAG 2.1 AA)
-   📲 Progressive Web App (PWA) capabilities (offline recipe viewing)
-   🖼️ Image generation for recipes (optional DeepSeek image API)
-   ⭐ Recipe ratings and notes system
-   🗓️ Weekly meal prep suggestions based on history
-   💰 Cost estimation per recipe
-   🌐 Multi-language support
-   👋 Onboarding tutorial for first-time users
-   📚 Comprehensive documentation

### 🔮 Post-GA Roadmap

-   👥 Social features (share with friends, public recipe gallery)
-   📥 Recipe imports from URLs or images
-   🤖 AI-powered pantry management
-   🛍️ Integration with grocery delivery services
-   🎤 Voice input for hands-free cooking mode
-   ⏱️ Cooking timer integration

---

## 📁 Project Structure

The project follows a clean, scalable architecture with clear separation of concerns:

```bash
src/
├── 📦 components/      # Reusable React components (Button, Card, Input, etc.)
├── 📄 pages/          # Top-level pages (Home, History, Favorites, Planner)
├── 🔌 api/            # API clients (DeepSeek, IndexedDB helpers)
├── 🗄️  store/          # Redux store & slices (history, favorites, planner)
├── 🎣 hooks/          # Custom React hooks (useRecipeGenerator, useLocalStorage)
├── 🛠️  utils/          # Utility/factory functions (prompt builder, formatters)
├── 📝 types/           # TypeScript interfaces/types (Recipe, Ingredient, etc.)
└── ⚛️  App.tsx         # App root, routing with TanStack Router
```

### Directory Descriptions

-   📦 **components/**: Reusable UI components built with ShadCN (Button, Card, Input, Badge, etc.)
-   📄 **pages/**: Top-level page components (Home page with recipe generator, History, Favorites, Meal Planner)
-   🔌 **api/**: API integration layer (DeepSeek SDK client, IndexedDB wrapper utilities)
-   🗄️ **store/**: Redux Toolkit store configuration and state slices (history, favorites, planner state)
-   🎣 **hooks/**: Custom React hooks for business logic (useRecipeGenerator, useLocalStorage, etc.)
-   🛠️ **utils/**: Helper functions and utilities (prompt builders for AI, data formatters)
-   📝 **types/**: TypeScript type definitions and interfaces shared across the app
-   ⚛️ **App.tsx**: Root component with TanStack Router configuration
