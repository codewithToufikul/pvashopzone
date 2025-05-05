import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/', // if you are deploying on main domain like mysite.com
  plugins: [react(), tailwindcss()],
});
