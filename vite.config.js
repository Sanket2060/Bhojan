import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/


//At vite.config.js
export default defineConfig({
  server:{
    // proxy:{
    //   '/v1':'https://api.khana.me/api'
    // }
  },
  plugins: [react()],
}
)