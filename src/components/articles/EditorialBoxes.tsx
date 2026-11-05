import React from "react";
import { Lightbulb, AlertTriangle, Info, Ruler } from "lucide-react";

interface BoxProps {
  title?: string;
  children: React.ReactNode;
}

export function TipBox({ title = "Editor's Practical Tip", children }: BoxProps) {
  return (
    <div className="my-6 p-5 rounded-xl bg-[#EBF0EC]/50 border border-[#7A8C7D]/25 text-[#2C3531]">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#58685B] mb-2">
        <Lightbulb className="w-4 h-4 text-[#7A8C7D]" />
        <span>{title}</span>
      </div>
      <div className="text-xs md:text-sm leading-relaxed text-[#2C3531]/85">
        {children}
      </div>
    </div>
  );
}

export function WarningBox({ title = "Important Clearance Note", children }: BoxProps) {
  return (
    <div className="my-6 p-5 rounded-xl bg-[#FBEBE7]/50 border border-[#C86D51]/30 text-[#2C3531]">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C86D51] mb-2">
        <AlertTriangle className="w-4 h-4 text-[#C86D51]" />
        <span>{title}</span>
      </div>
      <div className="text-xs md:text-sm leading-relaxed text-[#2C3531]/85">
        {children}
      </div>
    </div>
  );
}

export function InfoBox({ title = "Storage Insight", children }: BoxProps) {
  return (
    <div className="my-6 p-5 rounded-xl bg-[#FFFFFF] border border-[#EFECE6] text-[#2C3531] shadow-2xs">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A8C7D] mb-2">
        <Info className="w-4 h-4 text-[#7A8C7D]" />
        <span>{title}</span>
      </div>
      <div className="text-xs md:text-sm leading-relaxed text-[#2C3531]/85">
        {children}
      </div>
    </div>
  );
}

interface MeasurementGuideProps {
  title: string;
  step1: string;
  step2: string;
  step3: string;
}

export function MeasurementGuide({ title, step1, step2, step3 }: MeasurementGuideProps) {
  return (
    <div className="my-8 p-6 bg-[#FFFFFF] border border-[#EFECE6] rounded-2xl shadow-2xs">
      <div className="flex items-center gap-2 text-xs font-semibold text-[#7A8C7D] uppercase tracking-wider mb-2">
        <Ruler className="w-4 h-4 text-[#7A8C7D]" />
        <span>Measurement Checklist</span>
      </div>
      <h3 className="font-serif text-lg md:text-xl font-semibold text-[#2C3531] mb-4">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="p-3.5 bg-[#F9F8F6] rounded-xl border border-[#EFECE6]">
          <span className="font-bold text-[#58685B] block mb-1">01. Width Dimension</span>
          <p className="text-[#2C3531]/80 leading-relaxed">{step1}</p>
        </div>
        <div className="p-3.5 bg-[#F9F8F6] rounded-xl border border-[#EFECE6]">
          <span className="font-bold text-[#58685B] block mb-1">02. Depth Dimension</span>
          <p className="text-[#2C3531]/80 leading-relaxed">{step2}</p>
        </div>
        <div className="p-3.5 bg-[#F9F8F6] rounded-xl border border-[#EFECE6]">
          <span className="font-bold text-[#58685B] block mb-1">03. Height Clearance</span>
          <p className="text-[#2C3531]/80 leading-relaxed">{step3}</p>
        </div>
      </div>
    </div>
  );
}
