// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import replace from "@rollup/plugin-replace";

var vite_config_default = defineConfig({
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
    },    
  },
  resolve: {
    alias: {
      "@/": path.resolve(__dirname,"/src"),
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWNzcy1pbmplY3RlZC1ieS1qcydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBjc3NJbmplY3RlZEJ5SnNQbHVnaW4oKVxyXG4gIF0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIG1pbmlmeTogZmFsc2UsXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQC8nOiBuZXcgVVJMKCcuL3NyYy8nLCBcImZpbGU6Ly9DOlxcXFxVc2Vyc1xcXFxiZW52aDAxXFxcXFByb2plY3RzXFxcXHlvdWktd2lkZ2V0c1xcXFxZb3VpLldpZGdldHNcXFxcdWlcXFxcdml0ZS5jb25maWcudHNcIikucGF0aG5hbWVcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUDtBQUFBLElBQ0E7QUFBQTtBQUFBLEVBRUYsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBO0FBQUEsRUFFVixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxNQUFNLElBQUksSUFBSSxVQUFVLHVGQUF1RjtBQUFBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
