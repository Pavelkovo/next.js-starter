<!--
*** Thanks for checking out. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! :D
-->

#Simple next.js starter
A simple next.js starter with redux-toolkit, axios, bilt-in features from next.js. Typescript.

### Built With
* [Next.js](https://nextjs.org/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux-toolkit](https://redux-toolkit.js.org/)
* [Axios](https://axios-http.com/)

## Getting Started

This is an example of how you may setting up your project with next and redux-toolkit.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* Node.js 14.0 or later
* MacOS, Windows (including WSL), and Linux

### Installation

1. Clone the repo
  ```sh
  git clone https://github.com/Pavelkovo/next.js-starter.git
  ```
2. Install NPM packages
  ```sh
  npm install
  ```
3. Done!

## Features
### Redux toolkit

This starter comes with a pre-installed and configured redux toolkit. You can also find the example of how to use it in the `store` folder.

#### Creating a store

```javascript
// src/store/store.ts

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';
import { userAPI } from './services/userRTK';

const rootReducer = combineReducers({
  userReducer, // your reducer that you want to add to the store
  [userAPI.reducerPath]: userAPI.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userAPI.middleware),
  });
// we also export types to work correctly with propses and typing
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
```
Reference: `https://redux-toolkit.js.org/tutorials/typescript`

### Axios

This starter comes with a pre-installed and configured axios. For that purpose the wrapper for axios has been created, where an instance and the necessary headers are pre-defined. You can find the example of how to use it in the `lib/apiClient.ts` file.

```javascript
import axios, { AxiosRequestConfig } from 'axios';
import { getCookie } from 'cookies-next';

// url from .env* files;
const baseURL = process.env.NEXT_PUBLIC_API_URL;

const defaultOptions = {
  baseURL,
};

const apiClient = () => {
	// creating an axios instance
  const instance = axios.create(defaultOptions);
	// getting cookies using the cookie-next library. The library can work both on the server and on the client
  const jwt = getCookie('access_token');

  instance.interceptors.request.use(async (request: AxiosRequestConfig) => {
    if (jwt && request?.headers) {
		// setting auth header
      request.headers.Authorization = `Bearer ${jwt}`;
    }
    return request;
  });

  return instance;
};

export default apiClient();
```

### Images

This starter comes with a pre-installed and configured `next/image`.  Provides improved performance, optimization, improved layout shifting and much more.

Reference: `https://nextjs.org/docs/basic-features/image-optimization`

### Fonts

This starter comes with a pre-installed and configured @next/font.
@next/font will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance. @next/font includes built-in automatic self-hosting for any font file.

####Google Fonts
Import the font you would like to use from `@next/font/google` as a function.
```javascript
// src/_app.tsx

import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'],
});
```
wrap your `<Component />` in _app.tsx
```javascript
// src/_app.tsx

<main className={roboto.className}>
	<Component {...pageProps} />
</main>
```

Reference: `https://nextjs.org/docs/basic-features/font-optimization`

### Styles

This starter comes with a pre-installed and configured sass. You can find the example of how to use it in the `styles` folder. Also, don't forget that global styles are imported into `_app.tsx` and local (component level) into the folder with the component itself and have `[name].module.css` naming.

Reference: `https://nextjs.org/docs/basic-features/built-in-css-support`

### Components

Absolute import is used. No more dots and slashes `../../../`. For components - `@components/`, for lib files - `@lib/`, for redux store - `@store/`. You can always expand the list of absolute imports using the settings in the `tsconfig.json` file.

Reference: `https://nextjs.org/docs/advanced-features/module-path-aliases`

### Middleware

Middleware allows you to run code before a request is completed, then based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly. **The code is executed before mounting the components and rendering the page!**
Used to protect the route in authentication flow.

Reference: `https://nextjs.org/docs/advanced-features/middleware`

## License

Distributed under the MIT License. See `LICENSE` for more information.
