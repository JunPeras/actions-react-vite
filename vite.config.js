import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://junperas.github.io',//Link base de nuestro github
  plugins: [react()]
})
