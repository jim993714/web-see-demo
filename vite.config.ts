import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

export default defineConfig({
  plugins: [vue(), VueSetupExtend()],

  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"),
    },
  },
});
