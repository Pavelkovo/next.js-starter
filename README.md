# Owner

Pavel Tonkovich

# Simple next.js starter

A simple next.js starter with react-query, zustand and built-in features from next.js. Typescript. Modular architecture.

### Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [React-query](https://tanstack.com/query/latest)
- [Zustand](https://zustand-demo.pmnd.rs/)

## Getting Started

This is an example of how you may setting up your project with next.js, react-query and zustand.
To get a local copy up and running follow these simple example steps.

### Prerequisites

- Node.js 18.0 or later
- MacOS, Windows (including WSL), and Linux

### Installation

1. Clone the repository

```sh
git clone https://github.com/Pavelkovo/next.js-starter.git
```

2. Install NPM packages

```sh
npm install
```

3. You're all set! 🎉

## Next.js core concepts

### Routes

Next.js uses a **file-system based router** where folders are used to define routes.
Each folder represents a route segment that maps to a URL segment. This intuitive and flexible system simplifies navigation and organization of your application. To create a nested route, simply nest folders within each other.

Reference: `https://nextjs.org/docs/app/building-your-application/routing/defining-routes`

### Rendering

React and Next.js allow you to create hybrid web applications where parts of your code can be rendered on the server or the client.

By **default**, Next.js uses Server Components (SSR) rendering your application's initial HTML on the server for faster page load times and improved SEO. This allows you to automatically implement server rendering with no additional configuration, and you can opt into using Client Components (CSR) when needed.

##### Client Components

Client Components allow you to write interactive UI that can be rendered on the client at request time. In Next.js, client rendering is **opt-in**, meaning you have to explicitly decide what components React should render on the client.

To use Client Components, you can add the React `"use client"` directive at the top of a file, above your imports.

`"use client"` is used to declare a boundary between a Server and Client Component modules. This means that by defining a `"use client"` in a file, all other modules imported into it, including child components, are considered part of the client bundle.

#### When to use Server and Client Components?

The choice between Server and Client Components depends on the specific requirements of your application. Here's a quick guide to help you decide:

| What do you need to do?                                                            | Server Component | Client Component |
| ---------------------------------------------------------------------------------- | ---------------- | ---------------- |
| Fetch data                                                                         | yes              | x                |
| Access backend resources (directly)                                                | yes              | x                |
| Keep sensitive information on the server (access tokens, API keys, etc)            | yes              | x                |
| Keep large dependencies on the server / Reduce client-side JavaScript              | yes              | x                |
| Add interactivity and event listeners (`onClick()`, `onChange()`, etc)             | x                | yes              |
| Use State and Lifecycle Effects (`useState()`, `useReducer()`, `useEffect()`, etc) | x                | yes              |
| Use browser-only APIs                                                              | x                | yes              |
| Use custom hooks that depend on state, effects, or browser-only APIs               | x                | yes              |
| Use [React Class components](https://react.dev/reference/react/Component)          | x                | yes              |

Reference: `https://nextjs.org/docs/app/building-your-application/rendering`

### Pages and Layouts

A **page** is UI that is unique to a route. You can define pages by exporting a component from a `page.js` file. Nested folders create nested routes, and each folder with a `page.js` file becomes publicly accessible.

**Layouts** provide a consistent and reusable structure for multiple pages. They **preserve state**, remain interactive, and don't re-render on navigation. Layouts can also be nested, allowing you to achieve complex UI structures.

You can define a layout by `default` exporting a React component from a layout.js file. The component should accept a `children` prop that will be populated with a child layout (if it exists) or a child page during rendering.

The **root layout** is the outermost layout, defined at the top level of the `app` directory. It applies to **all routes** and provides a centralized point for modifying the initial HTML returned from the server. By customizing the root layout, you can control the overall styling and behavior of your application.

Reference: `https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts`

## Modular architecture

#### A few words about

This project adopts a modular architecture, a powerful approach to structuring code into independent, self-contained blocks called modules. This modular approach offers several benefits that enhance code organization, reusability, maintainability, and scalability.

Modular programming is the organization of the program as a set of small independent blocks, called modules, the structure and behavior of which are subject to certain rules.

A modular application must meet the following requirements:

- The entire module code is located in one folder. To completely remove a module from the program, just delete the corresponding folder. Removal of a module does not affect the performance of other modules, but deprives the application of some functionality.
- Modules are not dependent on each other. Modification of any module does not affect operation of other modules. Dependence of the modules on the "kernel" of the system is allowed.
- The kernel of the system contains a public exports that provides modules with input/output means and a set of components for creating UI.
- All blocks must have their general export and must export only what is necessary.

```javascript
import Module1 from '../../modules/components/Module1' - bad!
import { Module1 } from '../../modules' - good!
```

#### Project structure

```
├── core files
|   ├── public
|   |   ├── assets
|   ├── src
|   |   ├── app
|   |   |   ├── layout.tsx
|   |   |   ├── page1
|   |   |   |   ├── layout.tsx
|   |   |   |   ├── page.tsx
|   |   ├── components
|   |   ├── hooks
|   |   ├── lib
|   |   ├── modules
|   |   |  ├── Module1
|   |   |  |   ├── api
|   |   |  |   ├── components
|   |   |  |   ├── constants
|   |   |  |   ├── helpers
|   |   |  |   ├── store
|   |   ├── providers
|   |   ├── styles
```

- public - static assets like images, fonts, and icons.
- src - containes the application's source code
  - app - root component and entry point for the application. Should be as "thin" as possible and use modules
  - root layout - required for defining the global application layout.
    - page1 - a folder representing a page within the application
      - layout - defines the layout for this specific page (and **nested** pages).
      - page - contains the main content and functionality for this page.
  - components - top-level components that can be used in modules. Such as wrappers, navigation menus, etc. No business logic is used. Also can contain UI folder - the smallest components of the application. User interface. Buttons, instances, checkboxes. All components must be pure components
  - hooks - custom React hooks for reusable functionality
  - lib - general utility functions and classes that can be used in all modules
  - modules - individual application blocks that work as independent units
    - api - API calls and data fetching for Module1
    - components - UI components specific to Module1
    - constants - constants and shared values for Module1
    - helpers - helper functions and utilities for Module1
    - store - state management for Module1
  - providers - global context providers for application-wide functionalities
  - styles - contains global styles for styling the application's UI
- core files
  - next.config.js - configuration file for Next.js
  - middleware.ts - Next.js request middleware
  - .env.production - production environment variables
  - .env.development - development environment variables

#### Benefits of the Project's Structure

The modular architecture of this project offers several advantages:

- **Code Organization:** Clear separation of concerns and well-defined modules make it easy to navigate and maintain the codebase.
- **Reusability:** Reusable components and modules promote code efficiency and reduce duplication.
- **Maintainability:** The modular structure simplifies code updates and bug fixes, making maintenance more manageable.
- **Scalability:** As the project grows, the modular architecture allows for seamless integration of new modules and functionalities without disrupting existing code.

## Features

### Zustand State Management Library

This starter comes with a pre-installed and configured Zustand State Management Library. Zustand is a lightweight and flexible state management library for React applications. It provides a simple and intuitive API for managing state without the overhead of complex concepts or boilerplate code.
You can also find the example of how to use it in the `store` folder of each module.

#### Creating a hook

```typescript
// src/modules/Article/store/useArticleControls.ts

import { create } from 'zustand';

interface ArticleControlsState {
  search: string;
  onSearch: (search: string) => void;
  show: boolean;
}

export const useArticleControls = create<ArticleControlsState>((set) => ({
  search: '',
  onSearch: (search) => set({ search }),
  show: false,
}));
```

then use this hook in our components

```typescript
'use client';

const { search, onSearch, show } = useArticleControls();
```

### React Query Data Fetching Library

React Query is a powerful and versatile data fetching library for React applications that simplifies data management and improves performance. It provides a declarative approach to data fetching, automatic caching, real-time updates, mutations, and extensive configuration options.

```typescript
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const QueryProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
```

then use this provider in our main provider

```typescript
'use client';

import QueryProvider from './query-provider';

const Providers = ({ children }: React.PropsWithChildren) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Providers;
```

### Images

This starter comes with a pre-installed and configured `next/image`. Provides improved performance, optimization, improved layout shifting and much more.

Reference: `https://nextjs.org/docs/app/api-reference/components/image`

### Link

It is a React component that extends the HTML `<a>` element to provide prefetching and client-side navigation between routes. It is the **primary way** to navigate between routes in Next.js.

Reference: `https://nextjs.org/docs/app/api-reference/components/link`

### Fonts

This starter comes with a pre-installed and configured @next/font.
@next/font will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance. @next/font includes built-in automatic self-hosting for any font file.

Reference: `https://nextjs.org/docs/app/api-reference/components/font`

#### Google Fonts

Import the font you would like to use from `@next/font/google` as a function.

```typescript
// src/providers/providers.tsx

import { Inter } from 'next/font/google';

import QueryProvider from './query-provider';

const inter = Inter({ subsets: ['latin'] });

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryProvider>
      <body className={inter.className}>{children}</body>
    </QueryProvider>
  );
};

export default Providers;
```

Reference: `https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts`

### Components

Absolute import is used. No more dots and slashes `../../../`. For components - `@components/`, for modules - `@modules/`, for lib - `@lib/`. You can always expand the list of absolute imports using the settings in the `tsconfig.json` file.

Reference: `https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases`

### Middleware

Middleware allows you to run code before a request is completed, then based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly. **The code is executed before mounting the components and rendering the page!**
Used to protect the route in authentication flow.

Reference: `https://nextjs.org/docs/app/building-your-application/routing/middleware`

## License

Distributed under the MIT License. See `LICENSE` for more information.
