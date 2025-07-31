import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
  },
  resolve: {
    alias: {
      "@algorithms": path.resolve(__dirname, "source/leetcode/algorithms"),
      "@javascript": path.resolve(__dirname, "source/leetcode/javascript"),
    },
  },
});
