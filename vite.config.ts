import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import gzipPlugin from "rollup-plugin-gzip";

import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      plugins: [
        gzipPlugin({
          filter: /\.(js|css|html|json|svg)$/,
          minSize: 1024,
        }),
      ],
    },
  },
});
