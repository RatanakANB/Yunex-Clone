import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const pagesDir = resolve(__dirname, 'pages')
const htmlFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'))

const input = {
  main: resolve(__dirname, 'index.html'),
  ...Object.fromEntries(
    htmlFiles.map(file => [
      file.replace(/\.html$/, ''),
      resolve(pagesDir, file)
    ])
  )
}

export default defineConfig({
  base: process.env.BASE_URL || '/',
  build: {
    rollupOptions: { input },
    outDir: 'dist',
  },
  publicDir: false,
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'assets',
          dest: '.',
        },
      ],
    }),
  ],
})
