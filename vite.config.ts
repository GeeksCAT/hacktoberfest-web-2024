import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remixCloudflareDevProxy(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/_index.tsx", () => {
            route("/add", "routes/projects/_add.tsx");
          });
          route("/agenda", "routes/agenda/_index.tsx");
          route("/open-soruce-projects", "routes/projects/_manage.tsx");
        });
      },
    }),
    tsconfigPaths(),
  ],
});
