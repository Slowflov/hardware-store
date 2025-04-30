import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),],
  server: {
    port: 5173, // Порт, на котором будет работать сервер разработки
    open: true,  // Автоматически открывает браузер при запуске
  },
  build: {
    outDir: 'dist',  // Папка, куда будет собираться проект
  },
})
