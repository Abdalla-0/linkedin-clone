import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@store": path.resolve(__dirname, "src/store"),
      "@templates": path.resolve(__dirname, "src/templates"),
      "@types": path.resolve(__dirname, "src/types"),
      "@fireBase": path.resolve(__dirname, "src/fireBase.ts"),
    }
  },

  plugins: [react()],
})
