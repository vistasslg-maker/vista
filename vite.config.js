import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Plugin to parse .config files as JSON
function configAsJsonPlugin() {
  return {
    name: 'config-as-json',
    transform(code, id) {
      if (id.endsWith('.config')) {
        return {
          code: `export default ${code};`,
          map: null,
        };
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [configAsJsonPlugin(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@data': path.resolve(__dirname, './data'),
      '@config': path.resolve(__dirname, './config'),
      '@content': path.resolve(__dirname, './content'),
      '@components': path.resolve(__dirname, './components'),
      '@styles': path.resolve(__dirname, './styles'),
      '@assets': path.resolve(__dirname, './assets'),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
