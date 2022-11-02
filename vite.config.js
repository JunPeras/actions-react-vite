import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://junperas.github.io/actions-react-vite',//Link base de nuestro github
  plugins: [react()]
})
