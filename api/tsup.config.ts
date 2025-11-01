import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/server.ts"],
  outDir: "dist",
  format: ["esm"], // or ["cjs"] if you're using require()
  target: "node22",
  sourcemap: true,
  clean: true,
  dts: false, // or true if you want type declarations
  tsconfig: "tsconfig.json",
});
