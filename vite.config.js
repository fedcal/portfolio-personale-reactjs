import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginTransformCssModules from 'vite-plugin-transform-css-modules';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginTransformCssModules(),
    babel()
  ],
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
