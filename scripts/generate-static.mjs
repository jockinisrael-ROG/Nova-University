import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const distClientDir = join(process.cwd(), "dist", "client");
const assetsDir = join(distClientDir, "assets");

/**
 * Find the main entry point JS file and styles
 * Uses the largest JS file as the entry point (likely the complete bundle)
 */
function findAssets() {
  let jsFile = null;
  let cssFile = null;

  if (!readdirSync(assetsDir, { withFileTypes: true }).length) {
    console.warn("⚠ No assets found in dist/client/assets/");
    return { js: null, css: null };
  }

  // Find the largest JS file (most likely the main app bundle)
  const jsFiles = readdirSync(assetsDir)
    .filter(f => f.endsWith(".js") && !f.startsWith("_"))
    .map(f => ({
      name: f,
      size: statSync(join(assetsDir, f)).size,
    }))
    .sort((a, b) => b.size - a.size);

  if (jsFiles.length === 0) {
    console.error("❌ No JS files found in dist/client/assets/");
    return { js: null, css: null };
  }

  jsFile = jsFiles[0].name;
  console.log(`Found JS files (by size):`);
  jsFiles.slice(0, 3).forEach(f => {
    console.log(`  - ${f.name} (${(f.size / 1024).toFixed(2)} KB)`);
  });

  // Find CSS file
  const cssFiles = readdirSync(assetsDir).filter(f => f.endsWith(".css"));
  if (cssFiles.length > 0) {
    cssFile = cssFiles[0];
  }

  return { js: jsFile, css: cssFile };
}

const { js, css } = findAssets();

if (!js) {
  console.error("❌ Could not find main JS bundle in dist/client/assets/");
  process.exit(1);
}

console.log(`✓ Using JS entry point: ${js}`);
console.log(`✓ Using CSS: ${css || "none"}`);

// Generate HTML with correct asset paths
const generateIndexHtml = () => {
  const cssLink = css ? `  <link rel="stylesheet" href="/Nova-University/assets/${css}" />\n` : "";
  
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
${cssLink}</head>
<body>
  <div id="root"></div>
  <script type="module" src="/Nova-University/assets/${js}"><\/script>
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
writeFileSync(join(distClientDir, "404.html"), generateIndexHtml());
console.log("✓ Generated 404.html for SPA fallback");
