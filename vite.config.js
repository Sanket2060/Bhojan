import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/


//At vite.config.js
export default defineConfig({
  server:{
    proxy:{
      '/v1':'http://localhost:9005/api'
    }
  },
  plugins: [react()],
}
)