import typescript from "rollup-plugin-typescript2";
import css from "rollup-plugin-import-css";
import pkg from "./package.json";

const config = {
  input: "./index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    css(),
    typescript({
      clean: true,
      tsconfig: "tsconfig-rollup.json",
      typescript: require("typescript"),
    }),
  ],
};

export default config;
