import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    vue(),
  ],  
  resolve: {
    extensions: [
      ".mjs",
      ".js",
      ".ts",
      ".jsx",
      ".tsx",
      ".json",
      ".vue",
      ".scss",
    ],    
    alias: {
      stream: "stream-browserify",
      util: "util",
      buffer: "buffer"
    },
  },
});
