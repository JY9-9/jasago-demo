# Technical Context

## Technology Stack

### Core Technologies
- **Next.js 14**
  - App Router
  - Server Components
  - Client Components
  - TypeScript Integration

- **TypeScript**
  - Strict type checking
  - Type safety across components
  - Enhanced developer experience

- **Tailwind CSS**
  - Utility-first CSS framework
  - JIT (Just-In-Time) compilation
  - Custom configuration in `tailwind.config.ts`

### UI Framework
- **shadcn/ui**
  - Accessible components
  - Tailwind CSS styling
  - Customizable through `components.json`
  - Extensive component library

## Development Setup

### Project Structure
```
├── app/                 # Next.js app directory
├── components/          # Reusable components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Global styles
```

### Configuration Files
- `next.config.mjs`: Next.js configuration
- `tsconfig.json`: TypeScript configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `postcss.config.mjs`: PostCSS configuration
- `components.json`: shadcn/ui configuration

## Dependencies

### Core Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "typescript": "^5.0.0"
}
```

### UI Dependencies
```json
{
  "tailwindcss": "^3.0.0",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0"
}
```

## Technical Constraints

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- No IE11 support required

### Performance Requirements
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Core Web Vitals compliance

### Security Considerations
- HTTPS required
- Authentication tokens
- Role-based access control
- Input validation
- XSS prevention

## Development Tools

### Required Tools
- Node.js (v18+)
- npm/yarn/pnpm
- Git
- VS Code (recommended)

### VS Code Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript tools

## Build & Deployment

### Build Process
```bash
# Development
npm run dev

# Production Build
npm run build
npm start
```

### Environment Variables
- Required for:
  - API endpoints
  - Authentication services
  - External services

### Optimization
- Image optimization through Next.js
- Code splitting
- Route prefetching
- Static page generation where applicable
