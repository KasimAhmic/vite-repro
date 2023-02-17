import { defineConfig, PluginOption } from "vite";
import reactPlugin from "@vitejs/plugin-react-swc";
import svgrPlugin from "vite-plugin-svgr";
import { visualizer as bundleVisualizerPlugin } from "rollup-plugin-visualizer";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["react-dom"],
    exclude: ["@ahmic/commons", "@ahmic/components"],
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    sourcemap: true,
    target: "esnext",
    outDir: "build",
  },
  resolve: {
    alias: {
      "@ahmic/commons": path.resolve(__dirname, "../commons/src/index.ts"),
      "@ahmic/components": path.resolve(__dirname, "../components/src/index.ts"),
    },
  },
  plugins: [
    reactPlugin(),
    svgrPlugin(),
    bundleVisualizerPlugin({
      title: "App Bundle Analysis",
      filename: "app-bundle-analysis.html",
      gzipSize: true,
      brotliSize: true,
    }) as PluginOption,
  ],
});
