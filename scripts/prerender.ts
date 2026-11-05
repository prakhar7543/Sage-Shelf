/**
 * Sage & Shelf – Static Prerender & Route HTML Generator
 * Generates route-specific HTML files in dist/ for Cloudflare Pages Free static hosting.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

interface RouteMeta {
  route: string;
  title: string;
  description: string;
  structuredData?: object;
}

const articles = JSON.parse(
  fs.readFileSync(path.join(rootDir, "src/data/articles.json"), "utf-8")
);
const categories = JSON.parse(
  fs.readFileSync(path.join(rootDir, "src/data/categories.json"), "utf-8")
);

const routes: RouteMeta[] = [
  {
    route: "/",
    title: "Sage & Shelf – Thoughtful Spaces. Beautifully Organized.",
    description:
      "Practical kitchen organization guides, measurement-first storage calculators, and curated Amazon product recommendations for drawers, under-sink cabinets, and pantries.",
  },
  {
    route: "/articles",
    title: "Kitchen Organization Guides & Blueprints – Sage & Shelf",
    description:
      "Explore comprehensive kitchen organization guides. Learn accurate cabinet measurements, zoning principles, and durable product setups.",
  },
  {
    route: "/calculators",
    title: "Free Kitchen Space & Measurement Calculators – Sage & Shelf",
    description:
      "Input your cabinet dimensions to calculate internal drawer footprints, plumbing clearance corridors, and pantry container capacity.",
  },
  {
    route: "/compare",
    title: "Kitchen Storage Product Comparison Matrix – Sage & Shelf",
    description:
      "Compare dimensions, materials, and renter-friendly status across bamboo cutlery organizers, sliding under-sink racks, and airtight food canisters.",
  },
  {
    route: "/about",
    title: "About Us – Thoughtful Spaces. Beautifully Organized.",
    description:
      "Sage & Shelf is an independent home organization publication dedicated to practical kitchen measurements and honest product recommendations.",
  },
  {
    route: "/contact",
    title: "Contact Editorial Team – Sage & Shelf",
    description:
      "Get in touch with the Sage & Shelf editorial desk for measurement questions, feedback, or editorial corrections.",
  },
  {
    route: "/affiliate-disclosure",
    title: "Amazon Affiliate Disclosure & FTC Compliance – Sage & Shelf",
    description:
      "Learn how affiliate links work on Sage & Shelf, our participation in the Amazon Associates Program, and our commitment to honest recommendations.",
  },
  {
    route: "/editorial-policy",
    title: "Editorial & Product Selection Policy – Sage & Shelf",
    description:
      "Our systematic framework for evaluating kitchen storage products, checking physical dimensions, and preventing sponsored bias.",
  },
  {
    route: "/privacy-policy",
    title: "Privacy Policy – Sage & Shelf",
    description:
      "Understand how Sage & Shelf protects visitor privacy with zero tracking databases and client-side calculators.",
  },
  {
    route: "/terms",
    title: "Terms & Conditions – Sage & Shelf",
    description:
      "Website terms of service, educational disclaimers, and limitation of liability.",
  },
  {
    route: "/cookie-policy",
    title: "Cookie Policy – Sage & Shelf",
    description:
      "Transparent disclosure of cookies, local storage, and third-party merchant links.",
  },
];

// Add Category Pages
for (const cat of categories) {
  routes.push({
    route: `/category/${cat.slug}`,
    title: `${cat.name} Storage & Organization – Sage & Shelf`,
    description: `${cat.heroDescription} Explore tested organizers, measurement advice, and interactive calculators.`,
  });
}

// Add Article Pages
for (const article of articles) {
  routes.push({
    route: `/articles/${article.slug}`,
    title: `${article.title} – Sage & Shelf`,
    description: article.description,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      author: {
        "@type": "Organization",
        name: article.author,
      },
      publisher: {
        "@type": "Organization",
        name: "Sage & Shelf",
        url: "https://sageandshelf.pages.dev",
      },
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      image: `https://sageandshelf.pages.dev${article.featuredImage}`,
    },
  });
}

async function prerender() {
  const templatePath = path.join(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("❌ dist/index.html not found. Run vite build first.");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, "utf-8");

  console.log(`\n🌿 [Sage & Shelf] Prerendering ${routes.length} static routes for Cloudflare Pages...\n`);

  for (const item of routes) {
    let pageHtml = baseHtml;

    // Replace Title
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${item.title}</title>`
    );

    // Replace or Inject Meta Description
    pageHtml = pageHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
      `<meta name="description" content="${item.description}" />`
    );

    // Update OpenGraph & Twitter
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/,
      `<meta property="og:title" content="${item.title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/,
      `<meta property="og:description" content="${item.description}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:title" content="${item.title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:description" content="${item.description}" />`
    );

    // Add Canonical link
    const canonicalUrl = `https://sageandshelf.pages.dev${item.route === "/" ? "" : item.route}`;
    if (!pageHtml.includes('rel="canonical"')) {
      pageHtml = pageHtml.replace(
        "</head>",
        `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`
      );
    }

    // Inject Structured Data if available
    if (item.structuredData) {
      const scriptTag = `  <script type="application/ld+json">\n${JSON.stringify(
        item.structuredData,
        null,
        2
      )}\n  </script>\n`;
      pageHtml = pageHtml.replace("</head>", `${scriptTag}</head>`);
    }

    // Determine output file path
    let outputPath: string;
    if (item.route === "/") {
      outputPath = path.join(distDir, "index.html");
    } else {
      const routeDir = path.join(distDir, item.route.replace(/^\//, ""));
      fs.mkdirSync(routeDir, { recursive: true });
      outputPath = path.join(routeDir, "index.html");
    }

    fs.writeFileSync(outputPath, pageHtml, "utf-8");
    console.log(`  ✓ Prerendered HTML: ${item.route} -> ${path.relative(rootDir, outputPath)}`);
  }

  // Also support /blog alias to /articles
  const blogDir = path.join(distDir, "blog");
  fs.mkdirSync(blogDir, { recursive: true });
  fs.copyFileSync(path.join(distDir, "articles", "index.html"), path.join(blogDir, "index.html"));
  console.log(`  ✓ Created alias route: /blog -> dist/blog/index.html`);

  // Create 404.html for Cloudflare Pages fallback
  fs.copyFileSync(path.join(distDir, "index.html"), path.join(distDir, "404.html"));
  console.log(`  ✓ Created 404.html fallback for Cloudflare Pages`);

  console.log(`\n✅ Prerender complete! All routes generated as static HTML.\n`);
}

prerender();
