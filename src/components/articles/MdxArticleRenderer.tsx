import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../../types";
import { affiliateConfig } from "../../config/affiliate";
import { TableOfContents } from "./TableOfContents";
import { FAQSection } from "./FAQSection";
import { ProductCard } from "./ProductCard";
import { ProductComparisonTable } from "./ProductComparisonTable";
import { ProsCons } from "./ProsCons";
import { TipBox, WarningBox, InfoBox, MeasurementGuide } from "./EditorialBoxes";
import { ImageWithCaption, BeforeAfterGallery, VideoEmbed, RelatedArticles } from "./MediaComponents";
import { Clock, Calendar, User, ShieldAlert, ArrowLeft } from "lucide-react";

interface MdxArticleRendererProps {
  article: Article;
  rawMdxContent?: string;
}

export function MdxArticleRenderer({ article }: MdxArticleRendererProps) {
  return (
    <article className="min-h-screen bg-[#F9F8F6] pb-24">
      {/* Editorial Header Hero */}
      <header className="border-b border-[#EFECE6] bg-[#FFFFFF] pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb kicker (unboxed text complying with Zero-Pill rule) */}
          <div className="flex items-center gap-2 text-xs text-[#2C3531]/60 mb-4">
            <Link to="/" className="hover:text-[#7A8C7D] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to={`/category/${article.categorySlug}`} className="hover:text-[#7A8C7D] transition-colors">
              {article.category}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#2C3531] font-medium truncate max-w-[200px]">
              {article.title}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2C3531] tracking-tight leading-[1.15] text-balance">
            {article.title}
          </h1>

          <p className="mt-4 text-base md:text-lg text-[#2C3531]/80 leading-relaxed max-w-3xl">
            {article.description}
          </p>

          {/* Clean unboxed editorial metadata with typographic separators (frontend-design §1.A) */}
          <div className="mt-6 pt-6 border-t border-[#EFECE6] flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#2C3531]/70">
            <div className="flex items-center gap-1.5 font-medium text-[#2C3531]">
              <User className="w-3.5 h-3.5 text-[#7A8C7D]" />
              <span>{article.author}</span>
            </div>
            <span aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#7A8C7D]" />
              <span>Published {article.publishedAt}</span>
            </div>
            <span aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#7A8C7D]" />
              <span>{article.readingTime} min read</span>
            </div>
            <span aria-hidden="true">·</span>
            <span className="text-[#58685B] font-medium">{article.category}</span>
          </div>
        </div>
      </header>

      {/* Featured Hero Media */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-4 mb-12">
        <div className="rounded-2xl overflow-hidden shadow-sm border border-[#EFECE6] bg-white">
          <img
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            className="w-full h-auto max-h-[560px] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="text-right text-[11px] text-[#2C3531]/50 mt-2 px-1">
          {article.featuredImageAlt}
        </div>
      </div>

      {/* Main Reading Layout: Prose + Sticky Sidebar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content Column */}
          <div className="lg:col-span-8 prose prose-slate max-w-none text-[#2C3531]">
            {/* Prominent Affiliate Disclosure Notice */}
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#EFECE6] text-xs text-[#2C3531]/80 mb-8 flex items-start gap-3 shadow-2xs">
              <ShieldAlert className="w-4 h-4 text-[#7A8C7D] shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong>Affiliate Disclosure:</strong> {affiliateConfig.shortDisclosure}{" "}
                When you click our links to Amazon, we may earn an affiliate commission at no extra charge to you. We only recommend products based on practical dimensional standards and spatial utility.
              </div>
            </div>

            {/* Render Category-Specific Rich Editorial Sections */}
            {article.slug === "kitchen-drawer-organization" && <DrawerArticleContent />}
            {article.slug === "under-sink-storage" && <UnderSinkArticleContent />}
            {article.slug === "pantry-organization" && <PantryArticleContent />}

            {/* Reusable Embedded FAQ Component */}
            <FAQSection faqs={article.faqs} />

            {/* Related Articles Component */}
            <RelatedArticles currentSlug={article.slug} relatedSlugs={article.relatedSlugs} />
          </div>

          {/* Sidebar Column: Sticky Table of Contents & Quick Tools */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Table of Contents */}
              {article.tableOfContents && (
                <TableOfContents headings={article.tableOfContents} />
              )}

              {/* Quick Calculator Card */}
              <div className="bg-[#FFFFFF] border border-[#EFECE6] rounded-xl p-5 shadow-2xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A8C7D] block mb-1">
                  Interactive Assistant
                </span>
                <h4 className="font-serif text-base font-semibold text-[#2C3531] mb-2">
                  Need Help with Measurements?
                </h4>
                <p className="text-xs text-[#2C3531]/75 leading-relaxed mb-4">
                  Use our browser-based calculators to calculate exact drawer footprints or plumbing clearances in seconds.
                </p>
                <Link
                  to="/calculators"
                  className="block text-center py-2.5 px-4 bg-[#58685B] hover:bg-[#2C3531] text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Open Free Calculators
                </Link>
              </div>

              {/* Product Comparison Shortcut */}
              <div className="bg-[#FFFFFF] border border-[#EFECE6] rounded-xl p-5 shadow-2xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C86D51] block mb-1">
                  Comparison Matrix
                </span>
                <h4 className="font-serif text-base font-semibold text-[#2C3531] mb-2">
                  Side-by-Side Product Specs
                </h4>
                <p className="text-xs text-[#2C3531]/75 leading-relaxed mb-4">
                  Compare dimensions, materials, and renter-friendly ratings across all {article.category} products.
                </p>
                <Link
                  to="/compare"
                  className="block text-center py-2.5 px-4 bg-[#F9F8F6] hover:bg-[#EFECE6] text-[#2C3531] border border-[#EFECE6] text-xs font-semibold rounded-lg transition-colors"
                >
                  Launch Product Matrix
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

// ---------------------------------------------------------
// Category-Specific MDX Editorial Bodies
// ---------------------------------------------------------

function DrawerArticleContent() {
  return (
    <div className="space-y-6 text-sm md:text-base leading-relaxed text-[#2C3531]/90">
      <p>
        Kitchen drawers are the workhorses of daily cooking. Unlike upper cabinets or deep pantries where items stay stationary for weeks, a kitchen drawer is pulled, searched, and shut dozens of times each day. Yet in most American homes, kitchen drawers quickly succumb to the "drawer creep" phenomenon: loose measuring spoons slide into the back, potato mashers catch on the face frame, and duplicate spice tins roll into disorganized piles.
      </p>

      <p>
        The secret to lasting drawer organization is not buying more plastic bins. It begins with <strong>honest categorization, precision measurement, and dedicated zoning</strong>.
      </p>

      <TipBox title="The Golden Drawer Rule">
        Never buy an organizer hoping it will make your items fit. Empty the drawer completely, categorize your items by frequency of use, and measure the drawer's internal footprint before browsing products.
      </TipBox>

      <h2 id="why-drawers-fail" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        Why Kitchen Drawers Become Cluttered
      </h2>

      <p>
        Most drawer disorganization stems from three universal pain points:
      </p>

      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          <strong>The Overfill Cycle:</strong> When a drawer has no rigid dividers, items shift every time the drawer accelerates or decelerates. Silverware slides backward, creating an illusion of empty space in front that invites more clutter.
        </li>
        <li>
          <strong>The "Catch Point" Problem:</strong> Cooking utensils with bent handles (like ladles, potato mashers, and whisks) easily rotate upward during movement. When the handle catches the upper cabinet rail, the drawer jams shut, causing frustration and damage to cabinet tracks.
        </li>
        <li>
          <strong>Mismatched Organizer Depths:</strong> Standard American kitchen base cabinets are 24 inches deep externally, which yields an interior drawer box depth between 18 and 21 inches. Off-the-shelf organizers measuring only 15 inches leave 3 to 6 inches of "dead zone" at the back where small tools vanish.
        </li>
      </ul>

      <MeasurementGuide
        title="The 3-Step Drawer Measurement Method"
        step1="Interior Width: Measure wall-to-wall inside the drawer box at both front and rear. If the drawer tapers slightly, use the narrower measurement."
        step2="Interior Depth: Measure from the inside face of the drawer front to the inside face of the back wall."
        step3="Vertical Clearance: Measure from the drawer floor up to the bottom edge of the cabinet face frame, NOT the top of the drawer side wall. This is your true height limit."
      />

      <h2 id="choosing-materials" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        Bamboo vs. Acrylic: Material Comparison
      </h2>

      <p>
        When choosing dividers and trays, material choice dictates durability, acoustic dampening, and aesthetic cohesion. Moso bamboo is naturally renewable, resilient, and offers tactile warmth that softens the clatter of metal silverware. When side-expandable wings are included, a single tray adapts to drawer widths from 13 up to 20 inches, eliminating unsightly gaps along the drawer sides.
      </p>

      <ProductCard productId="bamboo-expandable-organizer-01" />

      <h2 id="utensil-organization" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        Utensil Organization: The Primary vs. Secondary Tool Split
      </h2>

      <p>
        A common mistake is storing everyday cutlery in the same drawer as specialty cooking tools. Establish two distinct zones:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 p-4 bg-white rounded-xl border border-[#EFECE6]">
        <div>
          <h4 className="font-semibold text-sm text-[#58685B] mb-1">Zone 1: Daily Flatware</h4>
          <p className="text-xs text-[#2C3531]/80 leading-relaxed">
            Limit this drawer strictly to everyday dinner forks, salad forks, knives, tablespoons, teaspoons, and steak knives. Keep the layout uncluttered so family members can unload dishwashers in under 60 seconds.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-[#58685B] mb-1">Zone 2: Long Prep Tools</h4>
          <p className="text-xs text-[#2C3531]/80 leading-relaxed">
            Reserve a deeper drawer or dedicated partitioned tray for tools exceeding 12 inches: silicone spatulas, stainless steel tongs, wooden stirring spoons, and meat thermometers.
          </p>
        </div>
      </div>

      <h2 id="deep-drawers" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        Taming Deep Cookware & Pot Lid Drawers
      </h2>

      <p>
        Deep bottom drawers (often 8 to 12 inches tall) are a blessing for cookware, but without vertical division, nesting skillets results in scratched non-stick coatings and loud metal clanging.
      </p>

      <ProductCard productId="spring-bamboo-dividers-02" />

      <ProsCons
        pros={[
          "Vertical file-fold storage prevents Teflon and ceramic scratch marks",
          "Instantly see all lids without rummaging",
          "Tension springs require zero adhesive or cabinet screws; 100% renter friendly"
        ]}
        cons={[
          "Requires minimum 4-inch drawer depth",
          "Not suitable for very wide stockpots that exceed divider height"
        ]}
      />

      <h2 id="spice-drawer-system" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        The Tiered In-Drawer Spice Setup
      </h2>

      <p>
        Countertop spice carousels collect grease and dust, while deep wall cabinets force you to read tiny jar lids from below. Moving spices into a top drawer at 30-degree slanted tiers provides instant visual scanning.
      </p>

      <ProductCard productId="tiered-drawer-spice-rack-03" />

      <WarningBox title="Spice Clearance Warning">
        A standard 4oz spice jar lying on an angled tier needs at least 3.25 to 3.5 inches of internal vertical clearance. Always measure from the drawer floor to the upper cabinet rail before purchasing.
      </WarningBox>

      <h2 id="comparison-table" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        Product Comparison Matrix
      </h2>

      <ProductComparisonTable
        productIds={["bamboo-expandable-organizer-01", "spring-bamboo-dividers-02", "tiered-drawer-spice-rack-03"]}
      />

      <BeforeAfterGallery
        beforeImage="/images/categories/kitchen_drawers.jpg"
        afterImage="/images/categories/kitchen_drawers.jpg"
        beforeLabel="Unpartitioned Drawer"
        afterLabel="Partitioned Bamboo Layout"
        description="A real kitchen drawer transformation: replacing loose metal clutter with customized expandable bamboo partitions."
      />
    </div>
  );
}

function UnderSinkArticleContent() {
  return (
    <div className="space-y-6 text-sm md:text-base leading-relaxed text-[#2C3531]/90">
      <p>
        The space beneath the kitchen sink is notoriously difficult to organize. Between the bulky garbage disposal unit, curved PVC P-trap drainpipes, hot and cold water shutoff valves, and flexible braided supply hoses, standard shelving simply will not fit.
      </p>

      <p>
        Without a deliberate system, this dark cavern quickly accumulates half-empty bottles of dish soap, damp sponges, and duplicate multi-surface sprays shoved into the dark rear corners.
      </p>

      <TipBox title="Step Zero: Protect Your Cabinet Base">
        Before installing any organizers, lay down a flexible silicone under-sink drip mat with a raised 0.5-inch perimeter lip. If a drain line develops a slow drip or a detergent bottle leaks, the mat traps up to 2 gallons of liquid and prevents floorboard rot.
      </TipBox>

      <h2 id="the-under-sink-challenge" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        The Anatomy of the Under-Sink Cabinet
      </h2>

      <p>
        Standard US sink base cabinets measure 30 to 36 inches wide and 24 inches deep. However, usable interior space is divided into distinct zones:
      </p>

      <ul className="list-disc list-inside space-y-2 pl-2">
        <li><strong>The Center Plumbing Corridor:</strong> Where the sink strainer and P-trap drop down to the wall or floor.</li>
        <li><strong>The Garbage Disposal Zone:</strong> A heavy 10-to-14-inch cylinder hanging directly beneath one of the sink basins.</li>
        <li><strong>The Open Flank Zones:</strong> The 9-to-14-inch wide open spaces to the left and right of the plumbing. This is your primary real estate for two-tier sliding systems.</li>
        <li><strong>The Vertical Door Panels:</strong> The inside surface of your cabinet doors, ideal for lightweight wire caddies and microfiber cloths.</li>
      </ul>

      <MeasurementGuide
        title="How to Measure Around Plumbing Obstructions"
        step1="Width Left & Right: Measure from the side cabinet wall to the closest point of the center P-trap or garbage disposal."
        step2="Vertical Clearance Under Disposal: Measure from the cabinet floor to the lowest electrical housing of the disposal canister."
        step3="Depth Clearance: Measure from the back cabinet wall (accounting for water valve handles) to the inside edge of the front door frame."
      />

      <h2 id="sliding-vs-stationary" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        Sliding Pull-Outs vs. Stationary Bins
      </h2>

      <p>
        In deep 24-inch cabinets, stationary plastic bins force you to kneel on the floor and reach into the dark to grab items stored at the back. Sliding track organizers solve this by bringing the entire inventory forward with one pull.
      </p>

      <ProductCard productId="two-tier-sliding-undersink-04" />

      <h2 id="renter-friendly-tactics" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        Heavy-Duty U-Shaped Full-Width Solutions
      </h2>

      <p>
        For homeowners looking for a permanent, commercial-grade upgrade, a U-shaped sliding wire drawer mounts directly to the cabinet floor and wraps cleanly around the center drain assembly.
      </p>

      <ProductCard productId="ushaped-pullout-wire-rack-05" />

      <WarningBox title="Installation Note for Screw-Mount Organizers">
        Permanent sliding wire shelves require screwing into the cabinet floor. If you are renting or have delicate laminate cabinet bases, opt for freestanding sliding units with non-skid rubber feet.
      </WarningBox>

      <h2 id="door-mounted-efficiency" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        Unlocking Door-Mounted Storage
      </h2>

      <p>
        The inside of your cabinet doors is often overlooked. Installing an over-the-door or adhesive wire caddy keeps your daily essentials right at your fingertips without taking up floor space.
      </p>

      <ProductCard productId="over-cabinet-door-organizer-06" />

      <h2 id="comparison-table" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        Product Comparison Matrix
      </h2>

      <ProductComparisonTable
        productIds={["two-tier-sliding-undersink-04", "ushaped-pullout-wire-rack-05", "over-cabinet-door-organizer-06"]}
      />
    </div>
  );
}

function PantryArticleContent() {
  return (
    <div className="space-y-6 text-sm md:text-base leading-relaxed text-[#2C3531]/90">
      <p>
        A well-organized pantry is more than a social media trend. It is the culinary nerve center of your home. When dry staples, cooking oils, snacks, and canned goods have designated, visible homes, grocery shopping takes less time, meal prep flows smoothly, and food waste drops dramatically.
      </p>

      <TipBox title="The Decanting Reality Check">
        Only decant items that you buy repeatedly and use frequently: flour, sugar, rolled oats, rice, pasta, and snacks. Specialty ingredients that you buy once a year for Thanksgiving dinner should remain in their original packaging inside labeled category bins.
      </TipBox>

      <h2 id="pantry-zoning-principles" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        The 5-Zone Vertical Pantry System
      </h2>

      <p>
        Human eye level is the most valuable real estate in your pantry. Arrange your shelves according to the principle of ergonomic frequency:
      </p>

      <ul className="list-disc list-inside space-y-2 pl-2">
        <li><strong>Top Shelf (Above Eye Level):</strong> Lightweight paper goods, extra paper towel rolls, seasonal holiday bakeware, and rarely used appliances.</li>
        <li><strong>Eye-Level Shelf (The Prime Zone):</strong> Daily breakfast items, cereal canisters, coffee beans, tea, and everyday cooking oils.</li>
        <li><strong>Mid-Lower Shelf (Prep & Baking Zone):</strong> Decanted flours, sugars, grains, pasta, and canned tomatoes on stepped risers.</li>
        <li><strong>Child-Accessible Shelf (Snack Zone):</strong> Open-top woven or clear acrylic bins holding portioned kid snacks, granola bars, and dried fruit.</li>
        <li><strong>Bottom Floor / Heavy Shelf):</strong> Bulk potatoes and onions in breathable wire baskets, 12-pack sparkling water, and heavy dutch ovens.</li>
      </ul>

      <MeasurementGuide
        title="The Pantry Shelf Measurement Protocol"
        step1="Usable Shelf Depth: Measure from back wall to the front shelf lip. Deep pantry shelves (over 16 inches) require pull-out bins or lazy Susans to prevent back-row loss."
        step2="Vertical Shelf Spacing: Measure the distance between shelf tiers. Modular canisters stack in 3-inch, 6-inch, and 9-inch increments."
        step3="Clearance Buffer: Leave at least 1.5 inches of clearance above containers so your hand can comfortably lift canisters without scraping knuckles."
      />

      <h2 id="decanting-containers" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        Airtight Decanting: Containers That Protect Food
      </h2>

      <p>
        Open cardboard flour boxes and thin plastic pasta bags allow humidity, pantry moths, and odors to compromise your food. Modular airtight canisters solve both preservation and vertical storage.
      </p>

      <ProductCard productId="airtight-food-canister-set-07" />

      <h2 id="corner-and-depth-tactics" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        Defeating Deep Shelf Dead Zones with Turntables
      </h2>

      <p>
        Deep shelf corners are where duplicate bottles of soy sauce, balsamic vinegar, and honey vanish. A 10-inch to 12-inch rotating bamboo or acrylic lazy Susan turns an inaccessible 90-degree corner into an active rotation zone.
      </p>

      <ProductCard productId="bamboo-lazy-susan-turntable-08" />

      <h2 id="canned-goods-risers" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        Stadium Tiering for Cans and Jars
      </h2>

      <p>
        When canned goods sit flat on a deep shelf, you can only see the front row. A 3-tier stepped riser lifts each consecutive row by 1.5 inches, giving you stadium seating for canned goods and spice jars.
      </p>

      <ProductCard productId="expandable-shelf-riser-09" />

      <h2 id="comparison-table" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        Product Comparison Matrix
      </h2>

      <ProductComparisonTable
        productIds={["airtight-food-canister-set-07", "bamboo-lazy-susan-turntable-08", "expandable-shelf-riser-09"]}
      />

      <h2 id="maintenance-routine" className="font-serif text-2xl font-semibold text-[#2C3531] pt-4">
        The 5-Minute Monthly Reset Routine
      </h2>

      <p>
        An organized pantry is not an immovable museum exhibit; it is an active kitchen station. Protect your investment with this rapid monthly habit:
      </p>

      <div className="p-4 bg-white rounded-xl border border-[#EFECE6] space-y-2 text-xs">
        <div><strong>1. Sweep the Crumb Catchers:</strong> Take 2 minutes to wipe down the child snack bins and potato basket bottoms.</div>
        <div><strong>2. Front-Face Cans:</strong> Rotate newer canned goods to the back of the stepped riser and pull older expiration dates forward.</div>
        <div><strong>3. Refill Decanters:</strong> Transfer half-empty bags from the overflow bin into your main airtight canisters before grocery shopping.</div>
      </div>
    </div>
  );
}
