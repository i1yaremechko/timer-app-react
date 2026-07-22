import react from "@vitejs/plugin-react"
import path from "path"
import {defineConfig} from "vite"

export default defineConfig({
  plugins: [react()],
  base: "/timer-app-react/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@common": path.resolve(__dirname, "./src/common"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@assets": path.resolve(__dirname, "./src/assets")
    }
  }
})
