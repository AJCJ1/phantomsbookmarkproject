// import the config definition function from the vite package
import { defineConfig } from "vite";
// import react plugin for vite
import react from "@vitejs/plugin-react";
// export the default configuration object for the vite project
export default defineConfig({
  // add the react plugin to the list of plugins used in the project
  plugins: [react()],
  // define the root directory for the project's source files
  root: "src",
});
