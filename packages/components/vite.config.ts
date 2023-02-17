import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react-swc";
import dtsPlugin from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "Components",
      formats: ["es"],
      fileName: "[name]",
    },
    rollupOptions: {
      external: ["react", "react-dom", "@ahmic/commons"],
      output: {
        dir: "dist",
        format: "es",
        sourcemap: true,
        globals: {
          react: "React",
        },
        exports: "named",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
  },
  resolve: {
    alias: {
      "@ahmic/commons": path.resolve(__dirname, "../commons/src/index.ts"),
    },
  },
  plugins: [reactPlugin(), dtsPlugin()],
});
