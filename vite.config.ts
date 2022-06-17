import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

const VUE_SASS_AUTO_IMPORT = `@import "./src/styles/variables";
@import "./src/styles/functions";
@import "./src/styles/mixins";`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: VUE_SASS_AUTO_IMPORT,
        sassOptions: {
          precision: 8,
          outputStyle: "compressed",
          sourceComments: false,
          includePaths: ["./src/styles"],
          quietDeps: true,
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
