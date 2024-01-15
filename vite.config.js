import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/


//At vite.config.js
export default defineConfig({
  server:{
    proxy:{
      '/api':'http://localhost:9005'
    }
  },
  plugins: [react()],
}
)