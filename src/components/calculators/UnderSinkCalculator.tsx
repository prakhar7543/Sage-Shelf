import React, { useState } from "react";
import { Wrench, RefreshCw, AlertCircle, Info, ShieldCheck } from "lucide-react";

export function UnderSinkCalculator() {
  const [cabinetWidth, setCabinetWidth] = useState<string>("33.0");
  const [cabinetHeight, setCabinetHeight] = useState<string>("24.0");
  const [cabinetDepth, setCabinetDepth] = useState<string>("21.5");

  const [pipeWidth, setPipeWidth] = useState<string>("10.0");
  const [pipeHeight, setPipeHeight] = useState<string>("15.0");
  const [pipeDepth, setPipeDepth] = useState<string>("12.0");

  const cw = parseFloat(cabinetWidth) || 0;
  const ch = parseFloat(cabinetHeight) || 0;
  const cd = parseFloat(cabinetDepth) || 0;

  const pw = parseFloat(pipeWidth) || 0;
  const ph = parseFloat(pipeHeight) || 0;
  const pd = parseFloat(pipeDepth) || 0;

  const isValid = cw > 0 && ch > 0 && cd > 0 && pw >= 0 && ph >= 0 && pd >= 0;
  const hasPlumbingCollision = pw > cw || ph > ch || pd > cd;

  const totalCabinetVolume = Math.round(cw * ch * cd);
  const plumbingExclusionVolume = Math.round(pw * ph * pd);
  const usableVolume = Math.max(0, totalCabinetVolume - plumbingExclusionVolume);
  const usablePercent = totalCabinetVolume > 0 ? Math.round((usableVolume / totalCabinetVolume) * 100) : 0;

  // Flank width (assuming center-ish plumbing)
  const remainingWidthTotal = Math.max(0, cw - pw);
  const estimatedFlankWidth = Math.round((remainingWidthTotal / 2) * 10) / 10;

  const handleReset = () => {
    setCabinetWidth("");
    setCabinetHeight("");
    setCabinetDepth("");
    setPipeWidth("");
    setPipeHeight("");
    setPipeDepth("");
  };

  return (
    <div className="bg-[#FFFFFF] border border-[#EFECE6] rounded-xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center justify-between border-b border-[#EFECE6] pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#7A8C7D] font-medium tracking-wide uppercase">
            <Wrench className="w-4 h-4" />
            <span>Plumbing Space Estimator</span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif text-[#2C3531] mt-1">
            Under-Sink Clearance & Storage Calculator
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
        Under-sink cabinets have complex plumbing, garbage disposals, and shutoff valves. Enter your cabinet shell dimensions and approximate plumbing obstruction boundaries to calculate true usable storage corridors.
      </p>

      {/* Input Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Cabinet Shell */}
        <div className="p-4 bg-[#F9F8F6] rounded-xl border border-[#EFECE6]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#58685B] mb-3">
            1. Cabinet Shell Dimensions (Inches)
          </h4>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-[#2C3531] mb-1">
                Internal Cabinet Width
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                value={cabinetWidth}
                onChange={(e) => setCabinetWidth(e.target.value)}
                placeholder="e.g. 33.0"
                className="w-full px-3 py-2 text-sm bg-white border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D]"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#2C3531] mb-1">
                  Internal Height
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  value={cabinetHeight}
                  onChange={(e) => setCabinetHeight(e.target.value)}
                  placeholder="e.g. 24.0"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#2C3531] mb-1">
                  Internal Depth
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  value={cabinetDepth}
                  onChange={(e) => setCabinetDepth(e.target.value)}
                  placeholder="e.g. 21.5"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Plumbing Obstruction */}
        <div className="p-4 bg-[#F9F8F6] rounded-xl border border-[#EFECE6]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#C86D51] mb-3">
            2. Central Plumbing Exclusion Envelope (Inches)
          </h4>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-[#2C3531] mb-1">
                Plumbing / Disposal Total Width
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                value={pipeWidth}
                onChange={(e) => setPipeWidth(e.target.value)}
                placeholder="e.g. 10.0"
                className="w-full px-3 py-2 text-sm bg-white border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D]"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#2C3531] mb-1">
                  Obstruction Height
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  value={pipeHeight}
                  onChange={(e) => setPipeHeight(e.target.value)}
                  placeholder="e.g. 15.0"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#2C3531] mb-1">
                  Obstruction Depth
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  value={pipeDepth}
                  onChange={(e) => setPipeDepth(e.target.value)}
                  placeholder="e.g. 12.0"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#EFECE6] rounded-lg focus:outline-none focus:border-[#7A8C7D]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results View */}
      {isValid && !hasPlumbingCollision ? (
        <div className="bg-[#F9F8F6] border border-[#EFECE6] rounded-xl p-5 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4 border-b border-[#EFECE6]">
            <div>
              <span className="text-xs text-[#2C3531]/70 block">Total Shell Volume</span>
              <span className="text-lg font-semibold text-[#2C3531] font-mono tabular-nums">
                {totalCabinetVolume.toLocaleString()} in³
              </span>
            </div>
            <div>
              <span className="text-xs text-[#2C3531]/70 block">Plumbing Blocked</span>
              <span className="text-lg font-semibold text-[#C86D51] font-mono tabular-nums">
                {plumbingExclusionVolume.toLocaleString()} in³
              </span>
            </div>
            <div>
              <span className="text-xs text-[#2C3531]/70 block">Usable Storage Volume</span>
              <span className="text-lg font-semibold text-[#7A8C7D] font-mono tabular-nums">
                {usableVolume.toLocaleString()} in³ ({usablePercent}%)
              </span>
            </div>
            <div>
              <span className="text-xs text-[#2C3531]/70 block">Avg Side Flank Clearance</span>
              <span className="text-lg font-semibold text-[#58685B] font-mono tabular-nums">
                ~{estimatedFlankWidth}" width
              </span>
            </div>
          </div>

          {/* Visual Schematic Diagram */}
          <div className="bg-white p-4 rounded-xl border border-[#EFECE6]">
            <span className="text-xs font-semibold text-[#2C3531] block mb-3">
              Cabinet Elevation & Flank Zones Diagram:
            </span>
            <div className="border-2 border-[#2C3531] bg-[#F9F8F6] h-40 rounded-lg relative flex items-end p-2 overflow-hidden">
              {/* Left Flank Storage */}
              <div
                className="bg-[#EBF0EC] border border-[#7A8C7D] rounded flex flex-col items-center justify-center p-1 text-center"
                style={{
                  width: `${Math.max(20, ((cw - pw) / (cw || 1)) * 45)}%`,
                  height: "85%",
                }}
              >
                <span className="text-[10px] font-bold text-[#58685B]">Left Storage</span>
                <span className="text-[9px] text-[#2C3531]/70">Max ~{estimatedFlankWidth}" W</span>
                <span className="text-[9px] text-[#7A8C7D] font-medium mt-1">2-Tier Pullout</span>
              </div>

              {/* Center Plumbing Exclusion */}
              <div
                className="bg-[#FBEBE7] border border-[#C86D51] mx-auto rounded flex flex-col items-center justify-center p-1 text-center"
                style={{
                  width: `${Math.max(20, (pw / (cw || 1)) * 80)}%`,
                  height: `${Math.min(90, Math.max(40, (ph / (ch || 1)) * 100))}%`,
                }}
              >
                <span className="text-[10px] font-bold text-[#C86D51]">P-Trap / Disposal</span>
                <span className="text-[9px] text-[#2C3531]/70">
                  {pw}" W × {ph}" H
                </span>
                <span className="text-[8px] text-[#C86D51]/80 mt-1">(Low drip tray only)</span>
              </div>

              {/* Right Flank Storage */}
              <div
                className="bg-[#EBF0EC] border border-[#7A8C7D] rounded flex flex-col items-center justify-center p-1 text-center"
                style={{
                  width: `${Math.max(20, ((cw - pw) / (cw || 1)) * 45)}%`,
                  height: "85%",
                }}
              >
                <span className="text-[10px] font-bold text-[#58685B]">Right Storage</span>
                <span className="text-[9px] text-[#2C3531]/70">Max ~{estimatedFlankWidth}" W</span>
                <span className="text-[9px] text-[#7A8C7D] font-medium mt-1">Tall Spray Bottles</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[11px] text-[#2C3531]/60 mt-2 px-1">
              <span>Overall Cabinet Width: {cw}"</span>
              <span>Available Height: {ch}"</span>
              <span>Depth: {cd}"</span>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-[#EFECE6]">
            <ShieldCheck className="w-5 h-5 text-[#7A8C7D] shrink-0 mt-0.5" />
            <div className="text-xs text-[#2C3531]/80 leading-relaxed space-y-1">
              <p>
                <strong>Organizer Layout Strategy:</strong> With an estimated {estimatedFlankWidth}" of width on either side of your plumbing, an <strong>8.5" wide two-tier sliding basket</strong> will fit comfortably on the primary flank.
              </p>
              <p>
                Use the opposing side for tall cleaning bottles or an over-the-door hanging basket to keep sponges off the baseboard.
              </p>
            </div>
          </div>
        </div>
      ) : hasPlumbingCollision ? (
        <div className="p-4 bg-[#FBEBE7] rounded-lg border border-[#C86D51]/30 text-xs text-[#C86D51] flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Plumbing dimensions cannot exceed the cabinet's outer dimensions. Please check your measurement numbers.</span>
        </div>
      ) : (
        <div className="flex items-center gap-2 p-4 bg-[#F9F8F6] rounded-lg border border-[#EFECE6] text-xs text-[#2C3531]/70">
          <Info className="w-4 h-4 text-[#7A8C7D] shrink-0" />
          <span>Fill in your cabinet shell and plumbing dimensions to calculate usable volume and side flank clearances.</span>
        </div>
      )}

      {/* Disclaimers & Assumptions */}
      <div className="mt-5 pt-4 border-t border-[#EFECE6] flex items-start gap-2 text-xs text-[#2C3531]/60 leading-relaxed">
        <AlertCircle className="w-4 h-4 text-[#C86D51] shrink-0 mt-0.5" />
        <p>
          <strong>Approximate Planning Tool:</strong> This is a simplified rectangular estimation tool, not an engineering CAD solver. Drain lines, garbage disposal brackets, and water shutoff valve stems are irregular. We recommend measuring pipes, drain traps, and disposal units separately before purchasing storage products. We never guarantee that an organizer is guaranteed to fit based on automated calculations alone.
        </p>
      </div>
    </div>
  );
}
