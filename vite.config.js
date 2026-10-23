import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // "@/components/..." resolves to src/components/...
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
