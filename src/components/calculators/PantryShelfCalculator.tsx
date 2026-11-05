import React, { useState } from "react";
import { Package, RefreshCw, AlertCircle, Info, Grid } from "lucide-react";

interface ContainerPreset {
  name: string;
  width: number;
  depth: number;
  height: number;
}

const PRESETS: ContainerPreset[] = [
  { name: "Modular Canister (Standard)", width: 6.3, depth: 6.3, height: 9.0 },
  { name: "Slim Decanting Jar", width: 4.2, depth: 6.3, height: 6.0 },
  { name: "Canned Goods (15oz Can)", width: 3.0, depth: 3.0, height: 4.5 },
  { name: "Spice / Extract Bottle", width: 2.2, depth: 2.2, height: 4.5 },
];

export function PantryShelfCalculator() {
  const [shelfWidth, setShelfWidth] = useState<string>("30.0");
  const [shelfDepth, setShelfDepth] = useState<string>("14.0");
  const [shelfHeight, setShelfHeight] = useState<string>("12.0");

  const [containerWidth, setContainerWidth] = useState<string>("6.3");
  const [containerDepth, setContainerDepth] = useState<string>("6.3");
  const [containerHeight, setContainerHeight] = useState<string>("9.0");

  const [buffer, setBuffer] = useState<string>("0.5");

  const sw = parseFloat(shelfWidth) || 0;
  const sd = parseFloat(shelfDepth) || 0;
  const sh = parseFloat(shelfHeight) || 0;

  const cw = parseFloat(containerWidth) || 0;
  const cd = parseFloat(containerDepth) || 0;
  const ch = parseFloat(containerHeight) || 0;

  const buf = parseFloat(buffer) || 0;

  const isValid = sw > 0 && sd > 0 && sh > 0 && cw > 0 && cd > 0 && ch > 0;

  // Calculate items along width and depth
  const effectiveCW = cw + buf;
  const effectiveCD = cd + buf;

  const cols = effectiveCW > 0 ? Math.floor(sw / effectiveCW) : 0;
  const rows = effectiveCD > 0 ? Math.floor(sd / effectiveCD) : 0;
  const totalContainers = cols * rows;

  const shelfFootprintSqIn = Math.round(sw * sd);
  const shelfVolumeCuIn = Math.round(sw * sd * sh);

  const fitsHeight = ch + 0.5 <= sh;

  const handleApplyPreset = (preset: ContainerPreset) => {
    setContainerWidth(preset.width.toString());
    setContainerDepth(preset.depth.toString());
    setContainerHeight(preset.height.toString());
  };

  const handleReset = () => {
    setShelfWidth("");
    setShelfDepth("");
    setShelfHeight("");
    setContainerWidth("");
    setContainerDepth("");
    setContainerHeight("");
    setBuffer("0.5");
  };

  return (
    <div className="bg-[#FFFFFF] border border-[#EFECE6] rounded-xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center justify-between border-b border-[#EFECE6] pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#7A8C7D] font-medium tracking-wide uppercase">
            <Package className="w-4 h-4" />
            <span>Shelf Capacity Estimator</span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif text-[#2C3531] mt-1">
            Pantry Shelf & Container Fit Calculator
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
        Estimate how many food storage canisters, jars, or canned goods can fit onto your pantry shelf with comfortable hand-retrieval clearance.
      </p>

      {/* Preset Buttons */}
      <div className="mb-6">
        <span className="text-xs font-semibold text-[#2C3531] block mb-2">
          Quick Fill Container Preset:
        </span>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => handleApplyPreset(preset)}
              className="text-xs px-3 py-1.5 rounded-lg bg-[#F9F8F6] border border-[#EFECE6] text-[#2C3531] hover:border-[#7A8C7D] hover:bg-[#EBF0EC] transition-all cursor-pointer whitespace-nowrap"
            >
              {preset.name} ({preset.width}" × {preset.depth}")
            </button>
          ))}
        </div>
      </div>

      {/* Input Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Shelf Dimensions */}
        <div className="p-4 bg-[#F9F8F6] rounded-xl border border-[#EFECE6]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#58685B] mb-3">
            1. Shelf Dimensions (Inches)
          </h4>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-[#2C3531] mb-1">
                Usable Shelf Width
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                value={shelfWidth}
                onChange={(e) => setShelfWidth(e.target.value)}
                placeholder="e.g. 30.0"
                className="w-full px-3 py-2 text-sm bg-white border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D]"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#2C3531] mb-1">
                  Shelf Depth
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  value={shelfDepth}
                  onChange={(e) => setShelfDepth(e.target.value)}
                  placeholder="e.g. 14.0"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#2C3531] mb-1">
                  Clear Height
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  value={shelfHeight}
                  onChange={(e) => setShelfHeight(e.target.value)}
                  placeholder="e.g. 12.0"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Container Dimensions */}
        <div className="p-4 bg-[#F9F8F6] rounded-xl border border-[#EFECE6]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A8C7D] mb-3">
            2. Container Dimensions & Buffer (Inches)
          </h4>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-xs font-semibold text-[#2C3531] mb-1">
                  Width
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  value={containerWidth}
                  onChange={(e) => setContainerWidth(e.target.value)}
                  placeholder="6.3"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#2C3531] mb-1">
                  Depth
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  value={containerDepth}
                  onChange={(e) => setContainerDepth(e.target.value)}
                  placeholder="6.3"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#2C3531] mb-1">
                  Height
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  value={containerHeight}
                  onChange={(e) => setContainerHeight(e.target.value)}
                  placeholder="9.0"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D]"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#2C3531] mb-1">
                Hand Grip Spacing Buffer (inches between items)
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="2"
                value={buffer}
                onChange={(e) => setBuffer(e.target.value)}
                placeholder="0.5"
                className="w-full px-3 py-2 text-sm bg-white border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results View */}
      {isValid ? (
        <div className="bg-[#F9F8F6] border border-[#EFECE6] rounded-xl p-5 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4 border-b border-[#EFECE6]">
            <div>
              <span className="text-xs text-[#2C3531]/70 block">Estimated Fit Capacity</span>
              <span className="text-2xl font-bold text-[#7A8C7D] font-mono tabular-nums">
                {totalContainers}
              </span>
              <span className="text-[11px] text-[#2C3531]/60 block">containers on 1 shelf</span>
            </div>
            <div>
              <span className="text-xs text-[#2C3531]/70 block">Grid Layout</span>
              <span className="text-lg font-semibold text-[#2C3531] font-mono tabular-nums">
                {cols} across × {rows} deep
              </span>
            </div>
            <div>
              <span className="text-xs text-[#2C3531]/70 block">Shelf Surface Area</span>
              <span className="text-lg font-semibold text-[#2C3531] font-mono tabular-nums">
                {shelfFootprintSqIn} in²
              </span>
            </div>
            <div>
              <span className="text-xs text-[#2C3531]/70 block">Height Clearance</span>
              <span className={`text-lg font-semibold font-mono tabular-nums ${fitsHeight ? "text-[#7A8C7D]" : "text-[#C86D51]"}`}>
                {fitsHeight ? `+${(sh - ch).toFixed(1)}" safe` : "Too tall for shelf"}
              </span>
            </div>
          </div>

          {!fitsHeight && (
            <div className="p-3 bg-[#FBEBE7] rounded-lg border border-[#C86D51]/30 text-xs text-[#C86D51] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>
                <strong>Warning:</strong> The container height ({ch}") exceeds or is flush with the shelf clearance ({sh}"). You will not be able to slide or lift the container out.
              </span>
            </div>
          )}

          {/* Visual Container Grid Simulation */}
          <div className="bg-white p-4 rounded-xl border border-[#EFECE6]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-[#2C3531] flex items-center gap-1.5">
                <Grid className="w-3.5 h-3.5 text-[#7A8C7D]" />
                Top-Down Shelf Footprint Representation:
              </span>
              <span className="text-[11px] text-[#2C3531]/60 font-mono">
                {cols} cols × {rows} rows = {totalContainers} units
              </span>
            </div>

            <div className="border border-dashed border-[#7A8C7D] bg-[#F9F8F6] p-3 rounded-lg overflow-x-auto min-h-[90px] flex items-center justify-center">
              {totalContainers > 0 ? (
                <div
                  className="grid gap-2"
                  style={{
                    gridTemplateColumns: `repeat(${Math.min(cols, 12)}, minmax(32px, 1fr))`,
                  }}
                >
                  {Array.from({ length: Math.min(totalContainers, 36) }).map((_, idx) => (
                    <div
                      key={idx}
                      className="w-9 h-9 sm:w-11 sm:h-11 bg-[#EBF0EC] border border-[#7A8C7D] rounded flex items-center justify-center text-[10px] font-mono text-[#58685B] shadow-2xs"
                      title={`Container #${idx + 1}`}
                    >
                      {idx + 1}
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-xs text-[#2C3531]/50">Container is larger than shelf dimensions.</span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 p-4 bg-[#F9F8F6] rounded-lg border border-[#EFECE6] text-xs text-[#2C3531]/70">
          <Info className="w-4 h-4 text-[#7A8C7D] shrink-0" />
          <span>Enter shelf width, depth, height, and container dimensions to calculate capacity.</span>
        </div>
      )}

      {/* Disclaimers & Assumptions */}
      <div className="mt-5 pt-4 border-t border-[#EFECE6] flex items-start gap-2 text-xs text-[#2C3531]/60 leading-relaxed">
        <AlertCircle className="w-4 h-4 text-[#C86D51] shrink-0 mt-0.5" />
        <p>
          <strong>Capacity Assumption:</strong> Calculations assume uniform rectangular container footprints. Real shelf capacity will vary based on container lip flares, corner shelf radiuses, shelf bracket supports, and structural weight limits. Always verify shelf bracket load ratings before loading heavy glass jars.
        </p>
      </div>
    </div>
  );
}
