# Sage & Shelf — Thoughtful Spaces. Beautifully Organized.

A high-performance, mobile-first static editorial and Amazon affiliate marketing platform built with **React, Vite, TypeScript, Tailwind CSS**, and automated prerendering for **Cloudflare Pages Free**.

Focused exclusively on three high-intent kitchen storage categories:
1. **Kitchen Drawer Organization**
2. **Under-Sink Storage**
3. **Pantry Organization**

---

## 🌟 Key Architecture & Competitive Advantages

- **Zero-Backend Architecture**: 100% static React + Vite build. Runs completely on the Cloudflare Pages Free tier with zero server costs, zero database fees, and zero paid API dependencies.
- **Static HTML Prerendering**: Every route (homepage, category hubs, MDX guides, calculators, and legal pages) generates real HTML in `dist/` during build time. Full SEO crawlability, social card previews, and instantaneous first contentful paint.
- **Client-Side Spatial Calculators**:
  - *Kitchen Drawer Calculator*: Calculates internal square-inch footprints and recommended tray widths with safety clearance buffers.
  - *Under-Sink Clearance Calculator*: Models central P-trap and disposal exclusion envelopes to determine usable side-flank storage.
  - *Pantry Shelf Calculator*: Simulates container capacities across standard modular jars, canned soup risers, and turntable clearances.
- **FTC & Amazon Associates Compliance**: Clear, accessible disclosures across article headers, comparison tables, and a dedicated compliance disclosure page.
- **Centralized Data Management**:
  - Products catalog in `src/data/products.json`
  - MDX articles in `src/content/articles/*.mdx`
  - Category blueprints in `src/data/categories.json`

---

## 🚀 Quick Start & Local Development

### 1. Installation
Clone the repository and install all dependencies:
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The application will launch on `http://localhost:3000`.

### 3. Production Build & Prerender
```bash
npm run build
```
This executes:
1. `vite build` — Compiles and tree-shakes the client bundle into `dist/`
2. `tsx scripts/prerender.ts` — Generates static pre-rendered HTML for all routes into `dist/`
3. `node scripts/validate-build.js` — Audits asset sizes (<25 MiB), total file count (<20,000), and link integrity.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ☁️ Cloudflare Pages Free Deployment Guide

This project is tailored to Cloudflare Pages Free.

### Step 1: Push Repository to GitHub
```bash
git init
git add .
git commit -m "Initial commit of Sage & Shelf"
git remote add origin https://github.com/your-username/sage-and-shelf.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, click **Compute (Workers) > Pages**.
3. Click **Create application** > **Connect to Git**.
4. Select your `sage-and-shelf` GitHub repository.

### Step 3: Configure Build Settings
Under **Set up builds and deployments**, configure:
- **Framework preset**: `None` or `Vite`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js Version**: In **Environment variables**, set `NODE_VERSION` = `20` (or `22`).

### Step 4: Deploy & Verify
Click **Save and Deploy**. Cloudflare Pages will clone the repository, run the build and prerender script, and deploy the site in ~45 seconds to a free `*.pages.dev` subdomain (e.g., `https://sage-and-shelf.pages.dev`).

---

## 🌐 Custom Domain Setup

When you purchase a custom domain (e.g. `sageandshelf.com`):
1. In Cloudflare Pages, go to **Custom domains** > **Set up a custom domain**.
2. Enter your domain (e.g. `www.sageandshelf.com`).
3. If using Cloudflare DNS, DNS records will be routed automatically with free SSL/TLS certificates.
4. Update `url` in `src/config/site.ts`:
   ```ts
   export const siteConfig = {
     url: "https://www.sageandshelf.com",
     ...
   }
   ```
5. Commit and push to trigger an automatic redeployment.

---

## 🛒 Amazon Associates Configuration

When your Amazon Associates US application is approved:
1. Open `src/config/affiliate.ts`.
2. Update the `tag` and activate the affiliate links:
   ```ts
   export const affiliateConfig = {
     tag: "your-store-id-20", // Replace with your approved Amazon Store ID
     defaultDomain: "www.amazon.com",
     isActivated: true,
     ...
   };
   ```
3. Update products in `src/data/products.json` with real ASINs or product URLs. All buttons, tables, and comparison tools will automatically route using your tracking tag.

---

## 📝 Publishing New Articles

1. Create a new `.mdx` file in `src/content/articles/` (e.g., `knife-storage-solutions.mdx`).
2. Include the standard YAML frontmatter:
   ```yaml
   ---
   title: "Best In-Drawer Knife Storage Solutions"
   slug: "knife-storage-solutions"
   category: "Kitchen Drawer Organization"
   categorySlug: "kitchen-drawers"
   description: "Safe and sharp storage ideas for kitchen cutlery."
   author: "Sage & Shelf Editorial Team"
   publishedAt: "2026-11-05"
   readingTime: 7
   featured: false
   productIds:
     - "bamboo-expandable-organizer-01"
   ---
   ```
3. Register the article entry in `src/data/articles.json`.
4. Run `npm run build` to verify that `validate-build.js` approves all product references and generates the prerendered HTML page.

---

## 🛡️ License & Attributions

- Content and Design: &copy; 2026 Sage & Shelf. All rights reserved.
- Codebase: Apache 2.0.
