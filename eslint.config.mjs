import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
  {
    extends: [...nextCoreWebVitals],
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "react-hooks/purity": "off",
    },
  },
]);
