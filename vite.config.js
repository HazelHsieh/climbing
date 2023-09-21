import { fileURLToPath, URL } from 'node:url'

// import eslintPlugin from "vite-plugin-eslint";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "climbing/",
  base: "/",
  plugins: [
    vue(),
    //   eslintPlugin({
    //     include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"],
    //   }),
  ],
  server: {
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
