import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import replace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    replace({
      'preventAssignment': true,
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    })
  ],
  build: {
    minify: false,
    assetsDir: "dist",
    outDir: path.join(__dirname, "dist"),
    emptyOutDir: true,
    lib: {
      entry: "./src/main.ts",
      name: "shezzyStepper",
      formats: ["iife"],
      fileName: "shezzy-stepper",
    },
    rollupOptions: {
      output: {
        assetFileNames: "[name].[ext]",
      },
    }
  },
  resolve: {
    alias: {
      "@/": path.resolve(__dirname,"/src"),
    }
  }
})
