import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      ui: `${path.resolve(__dirname, "./src/components/ui/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      pages: `${path.resolve(__dirname, "./src/pages/")}`,
      constants: `${path.resolve(__dirname, "./src/constants/")}`
    },
  },
  server: {
    port: 3000,
  }
})
