import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// FUTURE: bundle is ~555KB raw / ~175KB gzip after the Leerpad 5 + glossary
// release. Vite warns >500KB raw, but gzip is what matters on the wire and
// 175KB is fine for an SPA. Revisit when content roughly doubles again:
// either bump build.chunkSizeWarningLimit to silence, or code-split routes
// with React.lazy + dynamic import.meta.glob to shed content from the
// initial chunk.

export default defineConfig({
  plugins: [react()],
});
