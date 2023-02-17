import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react-swc";
import dtsPlugin from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "Commons",
      formats: ["es"],
      fileName: "[name]",
    },
    rollupOptions: {
      external: [
        "@mui/material/styles",
        "@mui/material/useMediaQuery",
        "@reduxjs/toolkit",
        "@reduxjs/toolkit/query",
        "@reduxjs/toolkit/query/react",
        "react",
        "react-dom",
        "react-dom/test-utils",
        "react-redux",
        "react-router-dom",
      ],
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
  plugins: [reactPlugin(), dtsPlugin()],
});
