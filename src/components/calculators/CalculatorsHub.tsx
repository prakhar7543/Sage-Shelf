import React, { useState } from "react";
import { KitchenDrawerCalculator } from "./KitchenDrawerCalculator";
import { UnderSinkCalculator } from "./UnderSinkCalculator";
import { PantryShelfCalculator } from "./PantryShelfCalculator";
import { Ruler, Wrench, Package } from "lucide-react";

interface CalculatorsHubProps {
  initialTab?: "drawer" | "under-sink" | "pantry";
}

export function CalculatorsHub({ initialTab = "drawer" }: CalculatorsHubProps) {
  const [activeTab, setActiveTab] = useState<"drawer" | "under-sink" | "pantry">(initialTab);

  return (
    <div className="w-full">
      {/* Functional Segmented Tabs (Compliant with frontend-design skill §1.A) */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#EFECE6] rounded-xl max-w-fit mb-8">
        <button
          type="button"
          onClick={() => setActiveTab("drawer")}
          className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
            activeTab === "drawer"
              ? "bg-white text-[#2C3531] shadow-xs"
              : "text-[#2C3531]/70 hover:text-[#2C3531]"
          }`}
        >
          <Ruler className="w-3.5 h-3.5 text-[#7A8C7D]" />
          <span>Kitchen Drawer Calculator</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("under-sink")}
          className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
            activeTab === "under-sink"
              ? "bg-white text-[#2C3531] shadow-xs"
              : "text-[#2C3531]/70 hover:text-[#2C3531]"
          }`}
        >
          <Wrench className="w-3.5 h-3.5 text-[#7A8C7D]" />
          <span>Under-Sink Space Calculator</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("pantry")}
          className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
            activeTab === "pantry"
              ? "bg-white text-[#2C3531] shadow-xs"
              : "text-[#2C3531]/70 hover:text-[#2C3531]"
          }`}
        >
          <Package className="w-3.5 h-3.5 text-[#7A8C7D]" />
          <span>Pantry Shelf Calculator</span>
        </button>
      </div>

      {/* Calculator Render Area */}
      <div>
        {activeTab === "drawer" && <KitchenDrawerCalculator />}
        {activeTab === "under-sink" && <UnderSinkCalculator />}
        {activeTab === "pantry" && <PantryShelfCalculator />}
      </div>
    </div>
  );
}
