import { defineConfig } from 'vite';

export default defineConfig({
  // If you are deploying to https://<USERNAME>.github.io/<REPO>/
  // set base to '/<REPO>/'.
  // For example, if your repo is 'voxel-witch-wars', set base to '/voxel-witch-wars/'.
  // If you are deploying to https://<USERNAME>.github.io/, set base to '/'.
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
