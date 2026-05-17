import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const distClientDir = join(process.cwd(), "dist", "client");

// Generate a static HTML entry point for GitHub Pages
const generateIndexHtml = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Nova University</title>
  <meta name="description" content="A modern university landing page with premium UI/UX, built with React and Tailwind CSS." />
  <meta name="author" content="Nova University" />
  <meta property="og:title" content="Nova University" />
  <meta property="og:description" content="A modern university landing page with premium UI/UX, built with React and Tailwind CSS." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Nova University" />
  <meta name="twitter:description" content="A modern university landing page with premium UI/UX, built with React and Tailwind CSS." />
  <link rel="stylesheet" href="/Nova-University/assets/styles-DimEB2o2.css" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/Nova-University/assets/index-BlJosWfk.js"></script>
  <noscript>
    <p>This application requires JavaScript to be enabled.</p>
  </noscript>
</body>
</html>`;
};

// Write index.html to dist/client
mkdirSync(distClientDir, { recursive: true });
writeFileSync(join(distClientDir, "index.html"), generateIndexHtml());
console.log("✓ Generated index.html for GitHub Pages");

// Also create 404.html for SPA routing fallback
// GitHub Pages will serve this for any non-existent routes, allowing client-side routing to work
writeFileSync(join(distClientDir, "404.html"), generateIndexHtml());
console.log("✓ Generated 404.html for SPA fallback");
