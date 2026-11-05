/**
 * Sage & Shelf – Cloudflare Pages Build & Integrity Validator
 * Validates file sizes, total file count, article references, and product integrity.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const MAX_INDIVIDUAL_ASSET_BYTES = 25 * 1024 * 1024; // 25 MiB Cloudflare constraint
const MAX_TOTAL_FILES = 20000; // Cloudflare Free constraint

let errorCount = 0;
let warningCount = 0;

console.log("\n🌿 [Sage & Shelf] Running Build & Integrity Validation...\n");

// 1. Verify JSON Databases Exist
const productsPath = path.join(rootDir, "src/data/products.json");
const articlesPath = path.join(rootDir, "src/data/articles.json");
const categoriesPath = path.join(rootDir, "src/data/categories.json");

if (!fs.existsSync(productsPath)) {
  console.error("❌ Missing products database:", productsPath);
  errorCount++;
}
if (!fs.existsSync(articlesPath)) {
  console.error("❌ Missing articles database:", articlesPath);
  errorCount++;
}
if (!fs.existsSync(categoriesPath)) {
  console.error("❌ Missing categories database:", categoriesPath);
  errorCount++;
}

// 2. Validate Product IDs & Article References
if (fs.existsSync(productsPath) && fs.existsSync(articlesPath)) {
  const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
  const articles = JSON.parse(fs.readFileSync(articlesPath, "utf-8"));

  const productIds = new Set(products.map((p) => p.id));

  // Check duplicate product IDs
  if (productIds.size !== products.length) {
    console.error("❌ Duplicate product IDs detected in products.json");
    errorCount++;
  } else {
    console.log(`✅ Verified ${products.length} unique products in database.`);
  }

  // Check each article references valid products
  for (const article of articles) {
    if (!article.productIds || !Array.isArray(article.productIds)) {
      console.error(`❌ Article "${article.slug}" is missing productIds array`);
      errorCount++;
      continue;
    }

    for (const pId of article.productIds) {
      if (!productIds.has(pId)) {
        console.error(`❌ Article "${article.slug}" references non-existent product ID: "${pId}"`);
        errorCount++;
      }
    }
  }
  console.log(`✅ Verified product references across ${articles.length} editorial articles.`);
}

// 3. Verify Static MDX Content Files Exist
const mdxDir = path.join(rootDir, "src/content/articles");
if (fs.existsSync(mdxDir)) {
  const files = fs.readdirSync(mdxDir).filter((f) => f.endsWith(".mdx"));
  console.log(`✅ Found ${files.length} MDX article source files in ${mdxDir}`);
  if (files.length < 3) {
    console.warn(`⚠️ Warning: Expected at least 3 MDX articles, found ${files.length}`);
    warningCount++;
  }
} else {
  console.error("❌ Missing MDX directory:", mdxDir);
  errorCount++;
}

// 4. Verify Static Assets & Directory Limits (if dist exists)
const distDir = path.join(rootDir, "dist");
if (fs.existsSync(distDir)) {
  let totalFiles = 0;
  let oversizedFiles = 0;

  function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else {
        totalFiles++;
        const stat = fs.statSync(fullPath);
        if (stat.size > MAX_INDIVIDUAL_ASSET_BYTES) {
          console.error(`❌ File exceeds 25 MiB: ${fullPath} (${stat.size} bytes)`);
          oversizedFiles++;
          errorCount++;
        }
      }
    }
  }

  walkDir(distDir);
  console.log(`✅ Dist directory verified: ${totalFiles} total files.`);

  if (totalFiles > MAX_TOTAL_FILES) {
    console.error(`❌ Total file count (${totalFiles}) exceeds Cloudflare Pages limit (20,000 files)`);
    errorCount++;
  }
} else {
  console.log("ℹ️ Note: dist directory not yet built (run vite build first).");
}

// Summary
console.log("\n------------------------------------------------");
if (errorCount === 0) {
  console.log(`✨ Validation Passed! (Errors: 0, Warnings: ${warningCount})\n`);
  process.exit(0);
} else {
  console.error(`💥 Validation Failed with ${errorCount} error(s).\n`);
  process.exit(1);
}
