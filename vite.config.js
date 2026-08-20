import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Serves /api/products the same way Vercel's rewrites do, so extensionless
// API URLs behave identically in `npm run dev`, `npm run preview` and production.
const apiRewrites = () => {
  const middleware = (req, _res, next) => {
    const [path, search = ''] = req.url.split('?')
    if (path === '/api') {
      req.url = '/api/index.json'
    } else if (/^\/api\/[a-z0-9-]+(\/[a-z0-9-]+)?$/.test(path)) {
      req.url = `${path}.json${search ? `?${search}` : ''}`
    }
    next()
  }

  // Block bodies matter: returning a value from configureServer makes Vite treat
  // it as a post-internal hook, which lands after the SPA fallback.
  return {
    name: 'api-rewrites',
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), apiRewrites()],
})
