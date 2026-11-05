import React, { useState } from "react";
import { Ruler, RefreshCw, AlertCircle, CheckCircle2, Info } from "lucide-react";

export function KitchenDrawerCalculator() {
  const [width, setWidth] = useState<string>("16.5");
  const [depth, setDepth] = useState<string>("19.0");
  const [height, setHeight] = useState<string>("3.5");
  const [clearance, setClearance] = useState<string>("0.5");

  const w = parseFloat(width) || 0;
  const d = parseFloat(depth) || 0;
  const h = parseFloat(height) || 0;
  const c = parseFloat(clearance) || 0;

  const isValid = w > 0 && d > 0 && h > 0;

  const usableWidth = Math.max(0, w - c * 2);
  const usableDepth = Math.max(0, d - c);
  const usableHeight = Math.max(0, h - c);

  const footprintSqIn = Math.round(w * d * 10) / 10;
  const footprintSqFt = Math.round((footprintSqIn / 144) * 100) / 100;
  const volumeCubicIn = Math.round(w * d * h * 10) / 10;

  // Organizer recommendations based on width
  const getRecommendation = () => {
    if (w < 10) {
      return {
        type: "Narrow Spice / Utility Drawer",
        suggestion: "Best suited for single-column dividers, in-drawer knife docks, or spice jars on a single slanted strip.",
        maxTrayWidth: `${usableWidth.toFixed(1)}"`,
      };
    } else if (w < 18) {
      return {
        type: "Standard Cutlery Drawer",
        suggestion: "Ideal for a 5-to-6 compartment expandable bamboo cutlery tray (typically 12\" to 17\" wide).",
        maxTrayWidth: `${usableWidth.toFixed(1)}"`,
      };
    } else {
      return {
        type: "Wide Cookware / Prep Drawer",
        suggestion: "Can accommodate an expanded 8-compartment tray plus additional spring-loaded bamboo tension dividers or modular bins.",
        maxTrayWidth: `${usableWidth.toFixed(1)}"`,
      };
    }
  };

  const handleReset = () => {
    setWidth("");
    setDepth("");
    setHeight("");
    setClearance("0.5");
  };

  const rec = getRecommendation();

  return (
    <div className="bg-[#FFFFFF] border border-[#EFECE6] rounded-xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center justify-between border-b border-[#EFECE6] pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#7A8C7D] font-medium tracking-wide uppercase">
            <Ruler className="w-4 h-4" />
            <span>Interactive Tool</span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif text-[#2C3531] mt-1">
            Kitchen Drawer Space Calculator
          </h3>
        </div>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 text-xs text-[#2C3531]/70 hover:text-[#C86D51] transition-colors py-1.5 px-3 rounded-lg hover:bg-[#F9F8F6]"
          title="Reset measurements"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      <p className="text-sm text-[#2C3531]/80 mb-6">
        Enter your drawer's internal box dimensions in inches. Our calculator computes usable storage footprint, safety clearance margins, and recommended organizer widths.
      </p>

      {/* Input Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold text-[#2C3531] mb-1.5">
            Internal Width (inches)
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="e.g. 16.5"
            className="w-full px-3 py-2 text-sm bg-[#F9F8F6] border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D] focus:ring-1 focus:ring-[#7A8C7D] transition-all"
          />
          <span className="text-[11px] text-[#2C3531]/60 mt-1 block">Wall-to-wall inside</span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#2C3531] mb-1.5">
            Internal Depth (inches)
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            placeholder="e.g. 19.0"
            className="w-full px-3 py-2 text-sm bg-[#F9F8F6] border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D] focus:ring-1 focus:ring-[#7A8C7D] transition-all"
          />
          <span className="text-[11px] text-[#2C3531]/60 mt-1 block">Front to back inside</span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#2C3531] mb-1.5">
            Internal Height (inches)
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 3.5"
            className="w-full px-3 py-2 text-sm bg-[#F9F8F6] border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D] focus:ring-1 focus:ring-[#7A8C7D] transition-all"
          />
          <span className="text-[11px] text-[#2C3531]/60 mt-1 block">Floor to upper cabinet lip</span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#2C3531] mb-1.5">
            Clearance Buffer (inches)
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="2"
            value={clearance}
            onChange={(e) => setClearance(e.target.value)}
            placeholder="0.5"
            className="w-full px-3 py-2 text-sm bg-[#F9F8F6] border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D] focus:ring-1 focus:ring-[#7A8C7D] transition-all"
          />
          <span className="text-[11px] text-[#2C3531]/60 mt-1 block">Wiggle room per side</span>
        </div>
      </div>

      {/* Results View */}
      {isValid ? (
        <div className="bg-[#F9F8F6] border border-[#EFECE6] rounded-xl p-5 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4 border-b border-[#EFECE6]">
            <div>
              <span className="text-xs text-[#2C3531]/70 block">Total Footprint</span>
              <span className="text-xl font-semibold text-[#2C3531] font-mono tabular-nums">
                {footprintSqIn} in²
              </span>
              <span className="text-[11px] text-[#2C3531]/60 block">({footprintSqFt} sq ft)</span>
            </div>
            <div>
              <span className="text-xs text-[#2C3531]/70 block">Internal Volume</span>
              <span className="text-xl font-semibold text-[#2C3531] font-mono tabular-nums">
                {volumeCubicIn} in³
              </span>
            </div>
            <div>
              <span className="text-xs text-[#2C3531]/70 block">Max Safe Tray Width</span>
              <span className="text-xl font-semibold text-[#7A8C7D] font-mono tabular-nums">
                {usableWidth.toFixed(1)}"
              </span>
            </div>
            <div>
              <span className="text-xs text-[#2C3531]/70 block">Max Safe Tray Depth</span>
              <span className="text-xl font-semibold text-[#7A8C7D] font-mono tabular-nums">
                {usableDepth.toFixed(1)}"
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-[#EFECE6]">
            <CheckCircle2 className="w-5 h-5 text-[#7A8C7D] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-[#2C3531]">{rec.type}</h4>
              <p className="text-xs text-[#2C3531]/80 mt-0.5 leading-relaxed">
                {rec.suggestion} Maximum recommended organizer dimensions:{" "}
                <strong className="text-[#2C3531]">{usableWidth.toFixed(1)}" W × {usableDepth.toFixed(1)}" D × {usableHeight.toFixed(1)}" H</strong>.
              </p>
            </div>
          </div>

          {/* Simple Visual Representation */}
          <div className="pt-2">
            <span className="text-xs font-medium text-[#2C3531]/70 block mb-2">Drawer Box Proportional Diagram:</span>
            <div className="border border-dashed border-[#7A8C7D] bg-white rounded-lg p-3 relative flex items-center justify-center min-h-[100px]">
              <div
                className="bg-[#EBF0EC] border border-[#7A8C7D] rounded flex flex-col items-center justify-center text-center p-2 transition-all"
                style={{
                  width: `${Math.min(100, Math.max(30, (usableWidth / Math.max(usableWidth, 1)) * 80))}%`,
                  height: "70px",
                }}
              >
                <span className="text-xs font-semibold text-[#58685B]">Usable Tray Zone</span>
                <span className="text-[10px] text-[#2C3531]/70">
                  {usableWidth.toFixed(1)}" × {usableDepth.toFixed(1)}"
                </span>
              </div>
              <div className="absolute bottom-1 right-2 text-[10px] text-[#2C3531]/50">
                Outer drawer: {w}" × {d}"
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 p-4 bg-[#F9F8F6] rounded-lg border border-[#EFECE6] text-xs text-[#2C3531]/70">
          <Info className="w-4 h-4 text-[#7A8C7D] shrink-0" />
          <span>Enter valid positive numbers for width, depth, and height to see calculated storage recommendations.</span>
        </div>
      )}

      {/* Disclaimers & Assumptions */}
      <div className="mt-5 pt-4 border-t border-[#EFECE6] flex items-start gap-2 text-xs text-[#2C3531]/60 leading-relaxed">
        <AlertCircle className="w-4 h-4 text-[#C86D51] shrink-0 mt-0.5" />
        <p>
          <strong>Planning Disclaimer:</strong> This calculator provides mathematical estimates based on rectangular geometry. Always check manufacturer product specifications and leave clearance for drawer slide friction and cabinet frame lips before purchasing.
        </p>
      </div>
    </div>
  );
}
