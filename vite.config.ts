import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: ['jotai/babel/preset']
      }
    }),
    generouted()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
