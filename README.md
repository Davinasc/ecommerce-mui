# Extia FE Assessment – E-commerce App

This project is a modern e-commerce web application built with the latest React ecosystem and best practices for scalable, maintainable, and testable front-end development.


## Getting Started

```bash
# Install dependencies
yarn install

# Start the development server
yarn dev

# Run tests
yarn test
```

## Tech Stack

- **React** – UI library for building interactive interfaces
- **TypeScript** – Static typing for safer, more robust code
- **Vite** – Lightning-fast build tool and dev server
- **Material UI** – Ready-to-use, accessible React UI components
- **Styled Components** – CSS-in-JS styling for custom components
- **React Router** – Declarative routing for React apps
- **Axios** – Promise-based HTTP client for API requests
- **SWR** – React Hooks library for remote data fetching
- **MSW (Mock Service Worker)** – API mocking for development and testing
- **React Hook Form** – Performant, flexible forms with easy validation
- **Zod** – TypeScript-first schema validation
- **Vitest** – Fast unit/integration testing framework
- **Jest** – JavaScript testing framework
- **ESLint** – Linting for code quality and consistency
- **Prettier** – Code formatter for consistent style
- **Husky** – Git hooks for enforcing code standards
- **lint-staged** – Run linters on staged git files

## App Features

- 🛒 Product listing and cart management
- 🔒 Authentication-ready structure
- ⚡️ Fast, type-safe forms and validation
- 🧪 Comprehensive testing setup
- 🎨 Responsive, accessible UI
- 🧩 Modular, scalable architecture
- 🔄 Mocked API for local development

## Backlog

- [x] DefaultLayout
  - [x] Mobile
  - [x] Desktop

- [In Progress] Header
  - [ ] Add logo
  - [ ] Add active link based on the current route
  - [x] Customize Style
    - [x] Responsivity
    - [x] Positioning on scroll
  - [In Progress] Add navigation links
    - [x] Cart
      - [x] Button
      - [x] Responsivity
      - [x] Improve code syntax
      - [x] Add badge styling
      - [x] Add dynamic counter
    - [In Progress] Login
      - [x] Button
      - [x] Responsivity
      - [x] Improve code syntax
      - [ ] Add dynamic profile image if logged in
    - [ ] Avatar
      - [ ] Menu
      - [ ] Responsivity
  - [x] Add mobile drawer
    - [x] Add menu button
    - [x] Add navigation links
    - [x] Refine styles
    - [x] Improve code syntax

- [In Progress] Routing
  - [x] Add base router
  - [ ] Add authorization mechanism based on authentication
  - [ ] Add Error Boundary

- [x] API integration
  - [x] Http client setup
  - [x] Mock server setup

- [In Progress] Unit testing
  - [ ] Setup
  - [ ] Test

- [In Progress] Shop
  - [In Progress] Page
    - [In Progress] List products
      - [x] Responsivity
      - [x] BE integration
      - [ ] Add product images
      - [ ] Amplify image on click

- [In Progress] Cart
  - [x] Global context
  - [In Progress] Page
    - [ ] List products
    - [ ] Empty list
    - [ ] Add / Remove unit
    - [ ] Remove from cart
      - [ ] Confirmation

- [In Progress] Login
  - [ ] Page
    - [ ] Form
    - [ ] Validations
    - [ ] BE integration
  - [ ] Persist login
  - [ ] Logout

- [In Progress] Register
  - [ ] Page
    - [ ] Form
    - [ ] Validations
    - [ ] BE integration
  - [ ] Persist login

- [ ] Checkout
  - [ ] Page

- [ ] Optimize MUI imports
- [ ] Add pre-commit hook
