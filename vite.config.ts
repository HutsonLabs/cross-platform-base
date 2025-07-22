import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Keep same dev server port as CRA for Electron compatibility
  server: {
    port: 3000,
    host: true
  },
  
  // Handle path resolution for your existing imports
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  
  // Environment variables - Vite uses VITE_ prefix instead of REACT_APP_
  define: {
    // Preserve any existing environment variables your app might be using
    global: 'globalThis',
  },
  
  // Ensure CSS and static assets work correctly
  publicDir: 'public',
  
  // Use 'build' folder to match your existing Electron/Capacitor setup
  build: {
    outDir: 'build',
    sourcemap: true,
    // Ensure compatibility with your target platforms (mobile + electron)
    target: ['es2015'],
    cssTarget: ['safari11', 'chrome64'],
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          radix: ['@radix-ui/react-dialog', '@radix-ui/react-select']
        }
      }
    }
  }
})