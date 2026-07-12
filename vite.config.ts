import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  build: {
    manifest: !isSsrBuild,
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/') || id.includes('node_modules/react-router') || id.includes('node_modules/react-helmet-async')) {
                return 'vendor'
              }
              if (id.includes('node_modules/lucide-react')) {
                return 'icons'
              }
              if (id.includes('node_modules/@supabase')) {
                return 'supabase'
              }
              if (id.includes('/data/blogPosts') || id.includes('/data/newBlogPosts')) {
                return 'blog-data'
              }
              if (id.includes('/data/counties') || id.includes('/data/countyPages')) {
                return 'county-data'
              }
              if (id.includes('/data/service-locations/residential-stucco')) return 'sl-residential'
              if (id.includes('/data/service-locations/commercial-stucco')) return 'sl-commercial'
              if (id.includes('/data/service-locations/stucco-repair')) return 'sl-repair'
              if (id.includes('/data/service-locations/eifs-contractor')) return 'sl-eifs'
              if (id.includes('/data/service-locations/interior-plaster')) return 'sl-interior'
              if (id.includes('/data/service-locations/thin-stone-veneer')) return 'sl-veneer'
            },
          },
        },
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
}))
