import react from "@vitejs/plugin-react"
import path from "path"
import {defineConfig} from "vite"

export default defineConfig({
  plugins: [react()],
  base: "/timer-app-react/",
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "./src/common"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@images": path.resolve(__dirname, "./public/images")
    }
  }
})
