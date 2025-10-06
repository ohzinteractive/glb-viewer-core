import { defineConfig } from 'vite';
import { renderPug } from './tasks/vite_plugins/render_pug.mjs';
import { watchPugFiles } from './tasks/vite_plugins/watch_pug_files.mjs';

import fs from 'fs';
import path from 'path';

function copyPublic() {
  return {
    name: 'copy-public',
    apply: 'build',
    writeBundle: () => {
      fs.cpSync('public', '../public/webview', { recursive: true });
      console.log('Copied public to dist');
      return true;
    },
  };
}

export default defineConfig({
  root: 'src/webview',
  build: {
    outDir: '../../../public/webview',
    emptyOutDir: true,
    chunkSizeWarningLimit: 700,
    minify: 'esbuild',
    esbuild: {
      drop: ['console', 'debugger'],
      treeShaking: true
    },
    rollupOptions: {
      input: {
        html: path.resolve(__dirname, 'src/webview/index.html'),
        main: path.resolve(__dirname, 'src/webview/js/main.js'),
        css: path.resolve(__dirname, 'src/webview/styles/style.scss'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        manualChunks: {
          'three': ['three'],
          'three-addons': [
            'three/examples/jsm/Addons.js',
            'three/examples/jsm/controls/OrbitControls',
            'three/examples/jsm/loaders/DRACOLoader',
            'three/examples/jsm/loaders/GLTFLoader'
          ],
          'pit-js': ['pit-js']
        }
      }
    }
  },
  plugins: [
    watchPugFiles(),
    renderPug(),
    copyPublic()
  ],
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  base: './',
  optimizeDeps: {
    include: ['three']
  }
});
