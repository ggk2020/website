import { defineConfig } from 'vite';

// IMPORTANT: Change 'website-1' below to match your GitHub repository name exactly.
// e.g. if your repo is github.com/ggk2020/website, use base: '/website/'
export default defineConfig({
  base: '/website-1/',
  build: {
    outDir: 'dist',
  },
});
